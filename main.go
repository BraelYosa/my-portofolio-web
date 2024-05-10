package main

import (
	"encoding/json"
	"log"
	"net/http"
)

type Profile struct {
	AboutMe     string `json:"aboutMe"`
	Email       string `json:"email"`
	PhoneNumber string `json:"phoneNumber"`
}

func main() {
	http.HandleFunc("/api/profile", func(w http.ResponseWriter, r *http.Request) {
		profile := Profile{
			AboutMe:     "Hi, I'm Brandon. Welcome to my personal web profile :)",
			Email:       "brandnsyo@gmail.com",
			PhoneNumber: "081318310981",
		}

		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)

		json.NewEncoder(w).Encode(profile)
	})

	http.Handle("/", http.FileServer(http.Dir(".")))

	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal("Error starting server: ", err)
	}

}
