const express = require("express");
const bodyPraser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");

const app = express();
app.use(bodyPraser.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
	res.status(200).json(posts);
});

app.post("/posts", (req, res) => {
	const { title } = req.body;
	const id = randomBytes(4).toString("hex");

	posts[id] = { id, title };

	res.status(201).json(posts[id]);
});
app.listen(4000, () => {
	console.log("Listening on 4000 port.");
});
