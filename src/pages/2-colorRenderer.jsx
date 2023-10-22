import "./2-style.css";

export default function ColorRendered() {
	const colors = [
		{ name: "Cornflower Blue", hexCode: "#869AFD" },
		{ name: "Persian Pink", hexCode: "#F780D5" },
		{ name: "Screamin Green", hexCode: "#7EF962" },
		{ name: "Tart Orange", hexCode: "#F54D44" },
	];

	return (
		<>
			<h1>Color Rendering</h1>
			<div className="colors">
				{colors.map((color) => (
					<Color key={color.name} color={color} />
				))}
			</div>
		</>
	);
}

export function Color({ color }) {
	const style = {
		backgroundColor: color.hexCode,
	};
	if (typeof color === "string") {
		style.backgroundColor = color.hexCode;
	} else if (Array.isArray(color)) {
		style.backgroundColor = color.hexCode
			? color.name.toLowerCase()
			: "#ffffff";
	}
	console.log("style", style);
	return (
		<div className="color" style={style}>
			{color.name}
		</div>
	);
}
