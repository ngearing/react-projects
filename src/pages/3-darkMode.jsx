import { useState } from "react";
import "./3-style.css";

export default function DarkMode() {
	const [darkMode, setDarkMode] = useState(false);

	function toggleDark() {
		setDarkMode(!darkMode);

		const body = document.querySelector("body");
		body.classList.toggle("dark-mode");
	}

	return (
		<div className="dark-mode">
			<h1>Dark Mode</h1>
			<div className="buttons">
				<button className="button-dark" onClick={toggleDark}>
					Toggle Dark Mode
				</button>
				<button className="button-light" onClick={toggleDark}>
					Toggle Light Mode
				</button>
			</div>
		</div>
	);
}
