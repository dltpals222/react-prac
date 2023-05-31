import React, { Fragment } from "react";

function App() {
  const name = "리액트";
  return <div>{name === "리액트" ? <h1>리액트 입니다! 진짜?</h1> : <h2>리액트 아닙니다!</h2>}</div>;
}

export default App;
