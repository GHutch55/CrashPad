package handlers

import (
	"net/http"
	"time"

	"github.com/ghutch55/crashpad-backend/models"
	"github.com/google/uuid"
	"github.com/labstack/echo/v4"
)

var BugList = []models.Bug{} //local storage for now

func CreateBug(c echo.Context) error {
	var bug models.Bug
	if err := c.Bind(&bug); err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": "invalid request"})
	}

	bug.ID = uuid.New().String()
	bug.CreatedAt = time.Now()
	BugList = append(BugList, bug)

	return c.JSON(http.StatusCreated, bug)
}
