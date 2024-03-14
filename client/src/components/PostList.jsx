import React, { useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";

const PostList = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const { data } = await axios.get("http://localhost:4000/posts");
			console.log(data);
			setPosts(data?.posts);
		};

		fetchPosts();
	}, [posts]);

	return posts && posts.length > 0 ? (
		<>
			<h2 className="text-4xl text-blue-600 mb-4 font-bold">Posts</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{posts?.map((post) => (
					<Post key={post.id} post={post} />
				))}
			</div>
		</>
	) : (
		<p>No posts found!</p>
	);
};

export default PostList;
