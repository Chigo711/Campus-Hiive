import Svg, { Path } from "react-native-svg";

const ArrowLeft = (props) => {
  return (
    <Svg
      width="28"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      color="#000"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path fill="none" d="M0 0h24v24H0z"></Path>
      <Path
        d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"
        fill={props.color || "currentColor"}
        stroke="currentColor"
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        size={props.size || "24"}
      ></Path>
    </Svg>
    // <Text>Hello Go Back</Text>
  );
};

export default ArrowLeft;
