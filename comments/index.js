const express = require("express");
const { randomBytes } = require("crypto");
const bodyPraser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyPraser.json());
app.use(cors());

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
	res.status(200).json({ comments: commentsByPostId[req.params.id] });
});

app.post("/posts/:id/comments", (req, res) => {
	const { content } = req.body;
	const commentId = randomBytes(4).toString("hex");

	const comments = commentsByPostId[req.params.id] || [];
	comments.push({ id: commentId, content });

	commentsByPostId[req.params.id] = comments;

	res.status(201).json({ comments });
});

app.listen(4001, () => {
	console.log("Listening on 4001 port.");
});
