package main

import (
	"github.com/ghutch55/crashpad-backend/handlers"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()

	e.POST("/bugs", handlers.CreateBug)
	e.GET("/bugs", handlers.GetBugs)

	e.Logger.Fatal(e.Start(":8080"))
}
