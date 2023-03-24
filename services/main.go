package main

import (
	"log"
	"net/http"
	"os"
)

func main() {
	fs := http.FileServer(http.Dir("../public"))

	// check if env port is set
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Println("✅ Running map server on")
	log.Println("<======================>")
	log.Println("🚀 http://localhost:" + port)

	err := http.ListenAndServe(":"+port, fs)

	// handle the error if exists
	if err != nil {
		log.Fatal(err)
	}
}
