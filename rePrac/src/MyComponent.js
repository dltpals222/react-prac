const MyComponent = ({ name, children }) => {
  return (
    <div>
      안녕 만나서 반가워 내 이름은 {name} 이야! <br />
      children 값은 {children} 이야!
    </div>
  );
};

MyComponent.defaultProps = {
  name: "뤼왝트",
};

export default MyComponent;
