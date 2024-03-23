import { useState } from "react";

import Screen from "./componets/screen";
import Keyboard from "./componets/keyboard";

function App() {
	const [a, setA] = useState("0");
	const [b, setB] = useState("");
	const [operator, setOperator] = useState("");

	const handleNumber = (event) => {
		if (operator === "") {
			if (event.target.value === "." && a.includes(".")) return;
			if (a.length < 6)
				setA(a.replace(/^0+/, "").concat(event.target.value));
		} else {
			if (event.target.value === "." && b.includes(".")) return;
			if (b.length < 6)
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
		if (operator === "")
			if (a[0] === "." && a.length === 1) return;
			else if (b[0] === "." && b.length === 1) return;
		if (a && b) {
			setA(eval(a + operator + b).toString());
			if (a.length > 5) setA(Number(a).toExponential(1));
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
		if (a[0] === "0" || b[0] === "0") return;
		if (operator === "") {
			if (a.length < 1) return;
			setA(-Number(a).toString());
		} else {
			if (b.length < 1) return;
			setB(-Number(b).toString());
		}
	};

	const handlePercent = () => {
		if (a[0] === "0" || b[0] === "0") return;
		if (operator === "") {
			if (a.length < 1) return;
			setA(a / 100);
		} else {
			if (b.length < 1) return;
			setB(b / 100);
		}
	};

	const handleBackspace = () => {
		if (operator === "") setA(a.substring(0, a.length - 1));
		else setB(b.substring(0, b.length - 1));
	};

	return (
		<div className="bg-[url(./images/zigzag.jpg)] flex justify-center h-svh">
			<div className="w-screen max-w-[425px] h-full grid-rows-2 bg-black shadow-2xl shadow-white">
				<Screen equation={a + operator + b} result={b === "" ? a : b} />
				<Keyboard
					onClick={handleNumber}
					operator={handleOperator}
					clear={handleClear}
					calc={handleEqual}
					perc={handlePercent}
					invert={handleInvert}
				/>
			</div>
		</div>
	);
}

export default App;
