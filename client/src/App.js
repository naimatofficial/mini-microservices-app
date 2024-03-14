import "./App.css";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

function App() {
	return (
		<main className="p-2">
			<CreatePost />
			<section className="mt-4 p-2">
				<PostList />
			</section>
		</main>
	);
}

export default App;
