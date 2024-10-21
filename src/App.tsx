import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
    <div className="App">
      <h1>I'm an RSPACK app woot</h1>
      <h2>I'm changed</h2>
    </div>
  );
}

export default App;
