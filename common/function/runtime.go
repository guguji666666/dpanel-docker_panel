package function

import "runtime"

func CurrentSystemPlatform() (string, string) {
	currentOS := runtime.GOOS
	currentArch := runtime.GOARCH

	if currentOS == "darwin" {
		currentOS = "linux"
		if currentArch == "arm64" {
			currentArch = "arm64"
		} else {
			currentArch = "amd64"
		}
	}
	return currentOS, currentArch
}
