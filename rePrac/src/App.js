import "./App.css";
import MyComponent from "./myComponent";

function App() {
  return <MyComponent favoriteNumber={10}>react dev env</MyComponent>;
} /* 원래 HTML은 class 가 맞지만 리액트에서는 className이 맞다 */

export default App;
