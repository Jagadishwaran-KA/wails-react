package main

import (
	"github.com/ulikunitz/xz"
	"io"
	"os"
)

func compressLZMA(inputPath, outputPath string) error {
	// Open the input file
	inputFile, err := os.Open(inputPath)
	if err != nil {
		return err
	}
	defer inputFile.Close()

	// Create the output file
	outputFile, err := os.Create(outputPath)
	if err != nil {
		return err
	}
	defer outputFile.Close()

	// Create an LZMA writer
	writer, err := xz.NewWriter(outputFile)
	if err != nil {
		return err
	}
	defer writer.Close()

	// Copy data from the input file to the LZMA writer
	_, err = io.Copy(writer, inputFile)
	if err != nil {
		return err
	}

	return nil
}
