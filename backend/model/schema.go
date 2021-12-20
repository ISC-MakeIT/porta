package model

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Auth0ID  string `gorm:"auth0_id" json:"auth0_id"`
	Name     string
	Nickname string
	Picture  string
	Email    string
	Body     string
}

type Post struct {
	gorm.Model
	UserID uint `gorm:"column:user_id" json:"user_id"`
	Title  string
	Body   string
}
