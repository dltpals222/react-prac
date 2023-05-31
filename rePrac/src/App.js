import "./App.css"; /* import 하지 않으면 적용 안됨 */

function App() {
  const name = "리액트";
  return (
    <>
      <div className="react">{name}</div>
      <input></input>
    </>
  );
} /* 원래 HTML은 class 가 맞지만 리액트에서는 className이 맞다 */

export default App;
