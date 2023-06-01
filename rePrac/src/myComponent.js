import propTypes from "prop-types";

const MyComponent = (props) => {
  const { name, favoriteNumber, children } = props;
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다. <br />
      children 값은 {children} 입니다. <br />
      내가 좋아하는 숫자는 {favoriteNumber} 이라고 칩시다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "123뤼액투",
};

MyComponent.propTypes = {
  name: propTypes.string,
  favoriteNumber: propTypes.number.isRequired,
};

export default MyComponent;
