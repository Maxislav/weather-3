import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {Testtsx} from "./test.tsx";

export const App = () => {
  const [count, setCount] = useState(10);
  const update = () => {
    setCount(count+1)
  }

  return (

    <div className="App">
      <h1>{count}</h1>
        <Testtsx/>
      <button onClick={update}>
        update
      </button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
//export default App;
