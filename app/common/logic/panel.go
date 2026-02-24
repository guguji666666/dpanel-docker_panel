package logic

import (
	"fmt"
	"os"
	"path/filepath"

	"github.com/donknap/dpanel/common/function"
	"github.com/donknap/dpanel/common/service/docker/types"
	"github.com/donknap/dpanel/common/service/storage"
)

type Panel struct {
}

func (self Panel) GetPanelPath() []*types.ValueItem {
	savePath := []*types.ValueItem{
		{Name: "database", Value: "./dpanel.db"},
		{Name: "acme", Value: "./acme"},
		{Name: "backup", Value: "./backup"},
		{Name: "cert", Value: "./cert"},
		{Name: "compose-local", Value: "./compose"},
		{Name: "nginx", Value: "./nginx"},
		{Name: "script", Value: "./script"},
		{Name: "export/file", Value: "./storage/export/file"},
		{Name: "export/container", Value: "./storage/export/container"},
		{Name: "export/image", Value: "./storage/export/image"},
		{Name: "export/panel", Value: "./storage/export/panel"},
		{Name: "temp", Value: "./storage/temp"},
		{Name: "image", Value: "./storage/image"},
		{Name: "store", Value: "./store"},
	}

	if setting, err := (Setting{}).GetValue(SettingGroupSetting, SettingGroupSettingDocker); err == nil {
		for _, item := range setting.Value.Docker {
			if item.EnableComposePath {
				name := fmt.Sprintf("compose-%s", item.Name)
				savePath = append(savePath, &types.ValueItem{
					Name:  name,
					Value: name,
				})
			}
		}
	}

	savePath = function.PluckArrayWalk(savePath, func(item *types.ValueItem) (*types.ValueItem, bool) {
		item.Value = filepath.Join(storage.Local{}.GetStorageLocalPath(), item.Value)
		return item, true
	})

	dpanelPath := "/app/server"
	if !function.IsRunInDocker() {
		if v, err := os.Executable(); err == nil {
			dpanelPath = filepath.Dir(v)
		}
	}

	savePath = append(savePath, &types.ValueItem{
		Name:  "dpanel",
		Value: dpanelPath,
	})

	return savePath
}
