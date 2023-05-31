const MyComponent = (props) => {
  return <div>안녕 만나서 반가워 내 이름은 {props.name} 이야!</div>;
};

MyComponent.defaultProps = {
  name: "뤼왝트",
};

export default MyComponent;
