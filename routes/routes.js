const fs = require("fs");
const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/api/notes/", (req, res) => {
	//send note json
	const allNotes = JSON.parse(
		fs.readFileSync(path.join(__dirname, "./db/db.json"))
	);
	res.json(allNotes);
});

router.delete("/api/notes/:id", (req, res) => {
	//filter through array and remove
	return fs.readFile(
		path.join(__dirname, "./db/db.json"),
		"utf8",
		(err, data) => {
			console.log(
				"🚀 ~ file: routes.js ~ line 18 ~ router.delete ~ data",
				data
			);
			if (err) throw err;
			const allNotesArr = JSON.parse(data);
			const deleteNote = allNotesArr.filter(
				(yeetNote) => yeetNote.id !== req.paramsw.id
			);
			fs.writeFileSync(
				path.join(__dirname, "./db/db.json"),
				JSON.stringify(deleteNote)
			);
			res.json(deleteNote);
		}
	);
});

router.post("/api/notes", (req, res) => {
	//write body of note
	//need/get guid for id
});

module.exports = router;
