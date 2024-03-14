import axios from "axios";
import React, { useState } from "react";

const CreatePost = () => {
	const [title, setTitle] = useState("");

	const submitHandler = async (e) => {
		e.preventDefault();

		await axios.post("http://localhost:4000/posts", { title });

		setTitle("");
	};

	return (
		<form
			onSubmit={submitHandler}
			className="flex flex-col gap-2 w-1/3 mx-auto justify-center "
		>
			<h2 className=" text-3xl font-bold text-blue-700">Create Post</h2>

			<div>
				<label htmlFor="title" className=" text-gray-900 font-semibold">
					Title
				</label>
				<input
					type="text"
					value={title}
					id="title"
					onChange={(e) => setTitle(e.target.value)}
					className="w-full border-2 rounded-sm p-2"
				/>
			</div>
			<button
				type="submit"
				className="flex-none py-2 px-4 bg-blue-600 text-white rounded-full"
			>
				Submit
			</button>
		</form>
	);
};

export default CreatePost;
