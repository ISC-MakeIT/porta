package router

import (
	"log"
	"net/http"

	"github.com/ISC-MakeIT/porta/backend/middleware"
	"github.com/ISC-MakeIT/porta/backend/model"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"gorm.io/gorm"
)

func SetUpRouter(db *gorm.DB) {
	if err := godotenv.Load(); err != nil {
		log.Fatalf("Error loading the .env file: %v", err)
	}

	router := gin.Default()

	router.Use(cors.New(
		cors.Config{
			AllowOrigins:     []string{"http://localhost:3000", "https://auth0.com/"},
			AllowCredentials: true,
			AllowHeaders:     []string{"Authorization"},
		},
	))

	// This route is always accessible.
	router.Any("/api/public", func(ctx *gin.Context) {
		response := map[string]string{
			"message": "Hello from a public endpoint! You don't need to be authenticated to see this.",
		}
		ctx.JSON(http.StatusOK, response)
	})

	// This route is only accessible if the user has a valid access_token.
	router.GET(
		"/api/private",
		middleware.EnsureValidToken(),
		func(ctx *gin.Context) {
			response := map[string]string{
				"message": "Hello from a private endpoint! You need to be authenticated to see this.",
			}
			ctx.JSON(http.StatusOK, response)
		},
	)

	// User

	router.POST("/user", func(ctx *gin.Context) {
		user := model.User{}
		ctx.BindJSON(&user)
		db.Create(&user)
		ctx.JSON(http.StatusOK, user)
	})

	router.GET("/user", func(ctx *gin.Context) {
		users := []model.User{}
		db.Find(&users)
		ctx.JSON(http.StatusOK, users)
	})

	router.GET("/user/:auth0_id", func(ctx *gin.Context) {
		user := model.User{}
		db.Where("auth0_id = ?", ctx.Param("auth0_id")).First(&user)
		ctx.JSON(http.StatusOK, user)
	})

	router.PUT("/user", func(ctx *gin.Context) {
		user := model.User{}
		ctx.BindJSON(&user)
		db.Save(&user)
		ctx.JSON(http.StatusOK, user)
	})

	router.DELETE("/user/:auth0_id", func(ctx *gin.Context) {
		user := model.User{}
		db.First(&user, ctx.Param("auth0_id"))
		db.Delete(&user)
		ctx.JSON(http.StatusOK, user)
	})

	// Post

	router.POST("/post", func(ctx *gin.Context) {
		post := model.Post{}
		ctx.BindJSON(&post)
		db.Create(&post)
		ctx.JSON(http.StatusOK, post)
	})

	router.GET("/post", func(ctx *gin.Context) {
		posts := []model.Post{}
		db.Find(&posts)
		ctx.JSON(http.StatusOK, posts)
	})

	router.GET("/posts/:user_id", func(ctx *gin.Context) {
		posts := []model.Post{}
		db.Where("user_id = ?", ctx.Param("user_id")).Find(&posts)
		ctx.JSON(http.StatusOK, posts)
	})

	router.PUT("/post", func(ctx *gin.Context) {
		post := model.Post{}
		ctx.BindJSON(&post)
		db.Save(&post)
		ctx.JSON(http.StatusOK, post)
	})

	router.DELETE("/post/:id", func(ctx *gin.Context) {
		post := model.Post{}
		db.First(&post, ctx.Param("id"))
		db.Delete(&post)
		ctx.JSON(http.StatusOK, post)
	})

	// other

	router.POST("/auth0/user", func(ctx *gin.Context) {
		user := model.User{}
		gotUser := model.User{}
		ctx.BindJSON(&user)
		result := db.First(&gotUser, "auth0_id = ?", user.Auth0ID)
		if result.RowsAffected == 0 {
			db.Create(&user)
		}
		ctx.JSON(http.StatusOK, user)
	})

	log.Print("Server listening on http://localhost:3010")
	if err := http.ListenAndServe("0.0.0.0:3010", router); err != nil {
		log.Fatalf("There was an error with the http server: %v", err)
	}
}
