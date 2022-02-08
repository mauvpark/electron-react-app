import React from "react";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<main>
			<h1>🌷I am MAUV!</h1>
			<p>
				Congratulations! You created simple electron app. Please contact
				me to develop more things.
			</p>
			<a href="mailto:mauvpark@gmail.com">Click here to contact me! 🎉</a>

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

export default About;
