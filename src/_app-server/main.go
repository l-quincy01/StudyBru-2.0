package main

import (
	"context"
	"fmt"
	"log"
	"mime/multipart"
	"net/http"
	"os"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/s3"
	"github.com/joho/godotenv"
)

var (
	S3BucketName string
	Region       string
)

func init() {
	// Load the .env file
	err := godotenv.Load()
	if err != nil {
		log.Printf("Error loading .env file: %v", err)
	}

	// Set variables from environment
	S3BucketName = os.Getenv("AWS_BUCKET_NAME")
	Region = os.Getenv("AWS_REGION")

	// Check if variables are set
	if S3BucketName == "" || Region == "" {
		log.Fatalf("Environment variables AWS_BUCKET_NAME or AWS_REGION are not set")
	}
}

func main() {
	http.HandleFunc("/upload", uploadHandler)
	fmt.Println("Server started on http://localhost:4000")
	if err := http.ListenAndServe(":4000", nil); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}

func uploadHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
		return
	}

	file, fileHeader, err := r.FormFile("file")
	if err != nil {
		http.Error(w, fmt.Sprintf("Failed to parse file: %v", err), http.StatusBadRequest)
		return
	}
	defer file.Close()

	fileName := fileHeader.Filename

	// Upload the file to S3
	err = uploadToS3(file, fileName)
	if err != nil {
		http.Error(w, fmt.Sprintf("Failed to upload file to S3: %v", err), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
	w.Write([]byte(fmt.Sprintf("File %s uploaded successfully to S3", fileName)))
}

func uploadToS3(file multipart.File, fileName string) error {
	// Load AWS configuration
	cfg, err := config.LoadDefaultConfig(context.TODO(), config.WithRegion(Region))
	if err != nil {
		return fmt.Errorf("failed to load AWS configuration: %v", err)
	}

	// Create an S3 client
	client := s3.NewFromConfig(cfg)

	// Upload file to S3
	_, err = client.PutObject(context.TODO(), &s3.PutObjectInput{
		Bucket: aws.String(S3BucketName),
		Key:    aws.String(fileName),
		Body:   file,
	})
	if err != nil {
		return fmt.Errorf("failed to upload file to S3: %v", err)
	}

	return nil
}
