import React from "react";

function App() {
  const [count, setCount] = React.useState(0);
  const incremenetCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Counter App</h1>
      <p>Count : {count}</p>
      <button onClick={incremenetCount}>Incremenet</button>
    </div>
  );
}

export default App;
