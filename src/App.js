import { useState } from "react";

import Screen from "./componets/screen";
import Keyboard from "./componets/keyboard";

function App() {
	const [a, setA] = useState("0");
	const [b, setB] = useState("");
	const [operator, setOperator] = useState("");

	const handleNumber = (event) => {
		if (operator === "") {
			if (
				event.target.value === "." &&
				a.substring(a.length - 1, a.length) === "."
			)
				return;
			if (a.length < 4)
				setA(a.replace(/^0+/, "").concat(event.target.value));
		} else {
			if (
				event.target.value === "." &&
				b.substring(b.length - 1, b.length) === "."
			)
				return;
			if (b.length < 4)
				setB(b.replace(/^0+/, "").concat(event.target.value));
		}
	};

	const handleOperator = (event) => {
		if (b === "") setOperator(event.target.value);
		else {
			handleEqual();
			setOperator(event.target.value);
		}
	};

	const handleEqual = () => {
		if (a && b) {
			setA(eval(a + operator + b).toString());
			setB("");
			setOperator("");
		}
	};

	const handleClear = () => {
		setA("0");
		setB("");
		setOperator("");
	};

	const handleInvert = () => {
		if (operator === "") setA(-Number(a).toString());
		else setB(-Number(b).toString());
	};

	const handlePercent = () => {
		if (operator === "") setA(a / 100);
		else setB(b / 100);
	};

	const handleBackspace = () => {
		if (operator === "") setA(a.substring(0, a.length - 1));
		else setB(b.substring(0, b.length - 1));
	};

	return (
		<div className="w-screen h-svh grid-rows-2">
			<Screen result={b === "" ? a : b} />
			<Keyboard
				onClick={handleNumber}
				operator={handleOperator}
				clear={handleClear}
				calc={handleEqual}
				backspace={handleBackspace}
				perc={handlePercent}
				invert={handleInvert}
			/>
		</div>
	);
}

export default App;
