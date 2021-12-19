package model

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func SetUpDB() (*gorm.DB, error) {
	db, err := gorm.Open(sqlite.Open("test.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect to database")
	}

	db.AutoMigrate(&User{})
	db.AutoMigrate(&Post{})

	return db, err
}
