import "./App.css";
import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(1);
  const [inputValue, setInputValue] = useState("harun");

  const increment = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
 const onChange = (event) => {
  const newValue = event.target.value;
  setInputValue(newValue);

 };
  return (
    <div className="App">
      <div>
        <p>example 1:statehooks increment</p>
        <p>{counter}</p>
        <button onClick={increment}> increment </button>
        <p>_____________________</p>
      </div>

      <p>example 2:statehooks onchange</p>

      <div style={{ marginTop: "40px" }}>
        <input placeholder="write your name..." onChange={onChange}></input>
        <p>{inputValue}</p>
      </div>
    </div>
  );
};

export default App;
