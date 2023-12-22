import "./App.css";
import TickTack from "./pages/1-ticktacktoe";
import ColorRendered from "./pages/2-colorRenderer";
import DarkMode from "./pages/3-darkMode";

function App() {
	return (
		<>
			<h1>React Projects</h1>
			<TickTack />

			<ColorRendered />
			<DarkMode />
		</>
	);
}

export default App;
