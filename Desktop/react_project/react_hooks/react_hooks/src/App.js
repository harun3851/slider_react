
import './App.css';
import React, {useState} from "react";

function App() {

const[counter, setCounter]=useState(1);
  
  const increment= ()=> {
 setCounter(counter+1);
    console.log(counter);
  };

  return (
    <div className="App">
      <p>{counter}</p>
<button onClick={increment}> increment </button>
    </div>
  );
}

export default App;
