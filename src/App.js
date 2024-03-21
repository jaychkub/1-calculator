import { useState } from "react";

import Screen from "./componets/screen";
import Keyboard from "./componets/keyboard";

function App() {
	const [a, setA] = useState("");
	const [b, setB] = useState("");
	const [operator, setOperator] = useState("");

	const handleNumber = (event) => {
		if (operator === "") setA(a.concat(event.target.value));
		else setB(b.concat(event.target.value));
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
		setA("");
		setB("");
		setOperator("");
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
			/>
		</div>
	);
}

export default App;
