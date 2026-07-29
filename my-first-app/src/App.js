import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
//add reset button
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello, Fullstack developer!</h1>
      <h2>Count: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
      <button onClick={() => setCounter(0)}>Reset</button>
      <div>
        <label>Customized Input</label>
        <input
          type="number"
          value={counter}
          onChange={(e) => setCounter(Number(e.target.value))}
        />
      </div>
    </div>
  );
}

export default App;
