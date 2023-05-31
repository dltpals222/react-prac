import React, { Fragment } from "react";

function App() {
  const name = "뤼액트";
  return <div>{name === "리액트" && <h1>리액트 입니다!</h1>}</div>;
}

export default App;
