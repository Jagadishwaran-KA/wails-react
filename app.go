package main

import (
	"context"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Upload returns a greeting for the given name
func (a *App) Upload(filePath string) string {
	// Compress File
	err := compressLZMA(filePath, filePath+".xz")
	if err != nil {
		return err.Error()
	}

	// Upload File
	res, err := PostFile("http://localhost:9090/api/v1/files/upload", filePath+".xz")
	if err != nil {
		return err.Error()
	}

	return res
}
