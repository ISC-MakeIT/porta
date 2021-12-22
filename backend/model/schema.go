package model

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Auth0ID  string `gorm:"auth0_id" json:"auth0_id"`
	Name     string `gorm:"name" json:"name"`
	Nickname string `gorm:"nickname" json:"nickname"`
	Picture  string `gorm:"picture" json:"picture"`
	Email    string `gorm:"email" json:"email"`
	Body     string `gorm:"body" json:"body"`
}

type Post struct {
	gorm.Model
	UserID  string `gorm:"user_id" json:"user_id"`
	Picture string `gorm:"picture" json:"picture"`
	Title   string `gorm:"title" json:"title"`
	Body    string `gorm:"body" json:"body"`
}
