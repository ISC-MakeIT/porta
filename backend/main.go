package main

import (
	"github.com/ISC-MakeIT/porta/backend/model"
	"github.com/ISC-MakeIT/porta/backend/router"
)

func main() {
	db, err := model.SetUpDB()
	if err != nil {
		panic("Failed to set up DB")
	}
	router.SetUpRouter(db)
}
