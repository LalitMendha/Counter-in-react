import "./styles.css";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function onIncrement() {
    setCount((count) => count + 1);
  }
  function onDecrement() {
    // count = count + 1; This is not working it says count is read only
    // setCount(count);
    setCount((count) => count - 1);
  }

  return (
    <div>
      <div>{count}</div>
      <br />
      <div>
        <button onClick={onIncrement}> + </button>
        <button onClick={onDecrement}> - </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
