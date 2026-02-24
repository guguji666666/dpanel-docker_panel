package logic

import (
	"errors"
	"fmt"
	"io/fs"
	"os"
	"time"

	"github.com/donknap/dpanel/common/function"
	"github.com/donknap/dpanel/common/service/storage"
	"github.com/donknap/dpanel/common/types/define"
	"github.com/google/uuid"
)

type AttachDownloadTask struct {
	FilePath string
}

type AttachDownloadFileSystem struct {
	fs.FS
}

func (self AttachDownloadFileSystem) Open(name string) (fs.File, error) {
	cacheKey := fmt.Sprintf(storage.CacheKeyAttach, name)
	val, ok := storage.Cache.Get(cacheKey)
	if !ok {
		return nil, function.ErrorMessage(define.ErrorMessageCommonDataNotFoundOrDeleted)
	}
	task, ok := val.(*AttachDownloadTask)
	if !ok {
		return nil, function.ErrorMessage(define.ErrorMessageCommonDataNotFoundOrDeleted)
	}
	return os.Open(task.FilePath)
}

type Attach struct{}

func (self Attach) PreDownload(filePath string, expireTime time.Duration) (string, error) {
	if filePath == "" {
		return "", errors.New("filepath cannot be empty")
	}
	token := uuid.New().String()
	cacheKey := fmt.Sprintf(storage.CacheKeyAttach, token)
	storage.Cache.Set(cacheKey, &AttachDownloadTask{
		FilePath: filePath,
	}, expireTime)

	return fmt.Sprintf("%s?id=%s", function.RouterApiUri("/common/attach/download"), token), nil
}
