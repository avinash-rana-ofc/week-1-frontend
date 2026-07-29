import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div style={{textAlign: 'center', marginTop : '50px'}}>
      <h1>Hello, Fullstack developer!</h1>
      <h2>Count: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
    </div>
  );
}

export default App;
