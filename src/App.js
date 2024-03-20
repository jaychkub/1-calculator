import { useState } from "react";

import Screen from "./componets/screen";
import Keyboard from "./componets/keyboard";

function App() {
	const [result, setResult] = useState("");

	const inputHandle = (event) => {
		if (result.length <= 13) {
			setResult(result.concat(event.target.value));
		}
	};
	const clearScreen = () => {
		setResult("");
	};
	const calculate = () => {
		setResult(eval(result).toString());
	};
	const handleBackspace = () => {
		setResult(result.substring(0, result.length - 1));
	};

	return (
		<div className="w-screen h-svh grid-rows-2">
			<Screen result={result} />
			<Keyboard
				onClick={inputHandle}
				clear={clearScreen}
				calc={calculate}
				backspace={handleBackspace}
			/>
		</div>
	);
}

export default App;
