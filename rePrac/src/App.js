import React from "react";

function App() {
  const name = "리액트";

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "aqua",
        fontSize: "48px",
        fontWeight: "bold",
        padding: 16, // 단위 생략시 px로 자동 지정됨
      }}
    >
      {name}
    </div>
  );
}

export default App;
