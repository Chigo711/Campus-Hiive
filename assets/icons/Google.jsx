import Svg, { Path } from "react-native-svg";

const Google = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
      {...props}
    >
      {/* <g id="evaGoogleFill0">
        <g id="evaGoogleFill1"> */}
      <Path
        id="evaGoogleFill2"
        fill="currentColor"
        d="M17.5 14a5.51 5.51 0 0 1-4.5 3.93a6.15 6.15 0 0 1-7-5.45A6 6 0 0 1 12 6a6.12 6.12 0 0 1 2.27.44a.5.5 0 0 0 .64-.21l1.44-2.65a.52.52 0 0 0-.23-.7A10 10 0 0 0 2 12.29A10.12 10.12 0 0 0 11.57 22A10 10 0 0 0 22 12.52v-2a.51.51 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h5"
      />
      {/* </g>
      </g> */}
    </Svg>
  );
};

export default Google;
