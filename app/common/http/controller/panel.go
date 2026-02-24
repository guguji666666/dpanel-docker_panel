package controller

import (
	"context"
	"errors"
	"fmt"
	"io/fs"
	"os"
	"path/filepath"
	"sort"
	"time"

	"github.com/docker/go-units"
	"github.com/donknap/dpanel/app/common/logic"
	"github.com/donknap/dpanel/common/function"
	"github.com/donknap/dpanel/common/service/docker/types"
	"github.com/donknap/dpanel/common/service/storage"
	"github.com/donknap/dpanel/common/types/define"
	"github.com/gin-gonic/gin"
	"github.com/mholt/archives"
	"github.com/shirou/gopsutil/v4/disk"
	"github.com/we7coreteam/w7-rangine-go/v2/src/http/controller"
)

type Panel struct {
	controller.Abstract
}

func (self Panel) Usage(http *gin.Context) {
	type pathUsageItem struct {
		*types.ValueItem
		Used        int64   `json:"used"`        // 路径已用空间 (Bytes)
		UsedSize    string  `json:"usedSize"`    // 路径已使用大小
		UsedPercent float64 `json:"usedPercent"` // 路径使用率 (%)
	}

	var diskTotal uint64
	var panelTotal uint64

	if v, err := disk.Usage(storage.Local{}.GetSaveRootPath()); err == nil {
		diskTotal = v.Total
	}

	if v, err := function.PathSize(storage.Local{}.GetStorageLocalPath()); err == nil {
		panelTotal = uint64(v)
	}

	savePath := function.PluckArrayWalk((logic.Panel{}).GetPanelPath(), func(item *types.ValueItem) (*pathUsageItem, bool) {
		usageItem := &pathUsageItem{
			ValueItem:   item,
			Used:        0,
			UsedSize:    "",
			UsedPercent: 0,
		}
		item.Value = filepath.Clean(item.Value)
		if _, err := os.Stat(item.Value); errors.Is(err, os.ErrNotExist) {
			return nil, false
		}
		if v, err := function.PathSize(item.Value); err == nil {
			usageItem.Used = v
		} else {
			usageItem.Used = 0
		}
		usageItem.UsedSize = units.HumanSize(float64(usageItem.Used))
		usageItem.UsedPercent = float64(usageItem.Used) / float64(diskTotal) * 100
		return usageItem, true
	})

	sort.Slice(savePath, func(i, j int) bool {
		return savePath[i].Used > savePath[j].Used
	})

	self.JsonResponseWithoutError(http, gin.H{
		"pathUsage":  savePath,
		"diskUsage":  diskTotal,
		"panelUsage": panelTotal,
	})
	return
}

func (self Panel) Backup(http *gin.Context) {
	type ParamsValidate struct {
		BackupPath []string `json:"backupPath"`
	}

	params := ParamsValidate{}
	if !self.Validate(http, &params) {
		return
	}

	panelAllPath := function.PluckArrayWalk((logic.Panel{}).GetPanelPath(), func(item *types.ValueItem) (string, bool) {
		return item.Value, true
	})

	if function.IsEmptyArray(params.BackupPath) {
		params.BackupPath = panelAllPath
	}

	backupFile, err := storage.Local{}.CreateSaveFile(filepath.Join("export", "panel", fmt.Sprintf("dpanel-backup-%s.tar.zst", time.Now().Format(define.DateYmdHis))))
	if err != nil {
		self.JsonResponseWithError(http, err, 500)
		return
	}
	defer func() {
		_ = backupFile.Close()
	}()

	targetFile := function.PluckArrayMapWalk(params.BackupPath, func(item string) (string, string, bool) {
		if !function.InArray(panelAllPath, item) {
			return "", "", false
		}
		return item, filepath.ToSlash(item), true
	})

	zipCtx := context.Background()
	files, err := archives.FilesFromDisk(zipCtx, nil, targetFile)
	if err != nil {
		self.JsonResponseWithError(http, err, 500)
		return
	}

	format := archives.CompressedArchive{
		Compression: archives.Zstd{},
		Archival:    archives.Tar{},
	}

	err = format.Archive(zipCtx, backupFile, files)
	if err != nil {
		self.JsonResponseWithError(http, err, 500)
		return
	}

	self.JsonResponseWithoutError(http, gin.H{
		"path": backupFile.Name(),
	})
	return
}

func (self Panel) Proxy(http *gin.Context) {
	type ParamsValidate struct {
		Proxy   string `json:"proxy"`
		NoProxy string `json:"noProxy"`
	}
	params := ParamsValidate{}
	if !self.Validate(http, &params) {
		return
	}
}

func (self Panel) BackupList(http *gin.Context) {
	root := filepath.Join(storage.Local{}.GetSaveRootPath(), "export", "panel")
	type backupFileItem struct {
		Path      string    `json:"path"`
		CreatedAt time.Time `json:"createdAt"`
		Size      int64     `json:"size"`
	}
	backupList := make([]backupFileItem, 0)
	err := filepath.Walk(root, func(path string, info fs.FileInfo, err error) error {
		if path == root {
			return nil
		}
		if info.IsDir() {
			return filepath.SkipDir
		}
		rel, err := filepath.Rel(root, path)
		if err != nil {
			return err
		}
		backupList = append(backupList, backupFileItem{
			Path:      rel,
			Size:      info.Size(),
			CreatedAt: info.ModTime(),
		})
		return nil
	})
	if err != nil {
		self.JsonResponseWithError(http, err, 500)
		return
	}
	sort.Slice(backupList, func(i, j int) bool {
		return backupList[i].CreatedAt.After(backupList[j].CreatedAt)
	})

	self.JsonResponseWithoutError(http, gin.H{
		"list": backupList,
	})
	return
}

func (self Panel) BackupDelete(http *gin.Context) {
	type ParamsValidate struct {
		Name []string `json:"name"`
	}
	params := ParamsValidate{}
	if !self.Validate(http, &params) {
		return
	}
	for _, s := range params.Name {
		backupFilePath := filepath.Join(storage.Local{}.GetSaveRootPath(), "export", "panel", function.PathClean(s))
		if _, err := os.Stat(backupFilePath); errors.Is(err, os.ErrNotExist) {
			self.JsonResponseWithError(http, err, 500)
			return
		}
		err := os.Remove(backupFilePath)
		if err != nil {
			self.JsonResponseWithError(http, err, 500)
			return
		}
	}

	self.JsonSuccessResponse(http)
	return
}

func (self Panel) BackupDownload(http *gin.Context) {
	type ParamsValidate struct {
		Name string `json:"name"`
	}
	params := ParamsValidate{}
	if !self.Validate(http, &params) {
		return
	}
	backupFilePath := filepath.Join(storage.Local{}.GetSaveRootPath(), "export", "panel", function.PathClean(params.Name))
	if _, err := os.Stat(backupFilePath); err != nil {
		self.JsonResponseWithError(http, err, 500)
		return
	}
	downloadUrl, err := logic.Attach{}.PreDownload(backupFilePath, time.Second*10)
	if err != nil {
		self.JsonResponseWithError(http, err, 500)
		return
	}
	self.JsonResponseWithoutError(http, gin.H{
		"downloadUrl": downloadUrl,
	})
	return
}

func (self Panel) Restore(http *gin.Context) {
	type ParamsValidate struct {
		FileName string `json:"fileName"`
	}
	params := ParamsValidate{}
	if !self.Validate(http, &params) {
		return
	}
}
