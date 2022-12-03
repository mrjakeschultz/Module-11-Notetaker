const fs = require("fs");
const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/api/notes/", (req, res) => {
	//send note json
});

router.delete("/api/notes/:id", (req, res) => {
	//filter through array and remove
});

router.post("/api/notes", (req, res) => {
	//write body of note
	//need/get guid for id
});

module.exports = router;
