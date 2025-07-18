import Svg, { Path } from "react-native-svg";

const HomeSolid = (props) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      color="#000"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fill="none"
        d="M0 0h24v24H0z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></Path>
      <Path
        d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20Z"
        fill="#877EFF"
        stroke="currentColor"
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
      ></Path>
    </Svg>
  );
};

export default HomeSolid;
