import React, { useState } from "react";

const Post = ({ post }) => {
	const [comment, setComment] = useState("");

	const handleSubmitComment = (e) => {
		e.preventDefault();
		// Handle submission logic here
		console.log("Submitted comment:", comment);
		setComment("");
	};

	return (
		<div className="border p-4 rounded-lg shadow-md">
			<h2 className="text-xl font-semibold mb-2">{post.title}</h2>
			<p className="mb-2">Total Comments: {post.totalComments}</p>
			<form onSubmit={handleSubmitComment}>
				<input
					type="text"
					className="border rounded p-2 w-full mb-2"
					placeholder="Enter your comment"
					value={comment}
					onChange={(e) => setComment(e.target.value)}
				/>
				<button
					type="submit"
					className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Post;
