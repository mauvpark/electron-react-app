import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

const Entry = () => {
	return (
		<Router>
			<Routes>
				<Route path="/main_window" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</Router>
	);
};

export default Entry;
