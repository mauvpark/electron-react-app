import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<main>
			<h1>👼🏻Hello World!</h1>
			<p>This is a template for electron react app</p>

			<nav>
				<ul>
					<li>
						<Link to="/main_window">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</nav>
		</main>
	);
};

export default Home;
