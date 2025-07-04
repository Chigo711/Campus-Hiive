import Svg, { Path } from "react-native-svg";

const Lock = (props) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      color="#000"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12105 13.2453 4 14.3624 4 15.5C4 16.6376 4.12105 17.7547 4.26781 18.8447Z"
        stroke="currentColor"
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
      ></Path>
      <Path
        d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></Path>
      <Path
        d="M16 15.49V15.5"
        stroke="currentColor"
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
      ></Path>
      <Path
        d="M12 15.49V15.5"
        stroke="currentColor"
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
      ></Path>
      <Path
        d="M8 15.49V15.5"
        stroke="currentColor"
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
      ></Path>
    </Svg>
  );
};

export default Lock;

{
  /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M19.439 15.439C20.3636 14.5212 21.0775 13.6091 21.544 12.955C21.848 12.5287 22 12.3155 22 12C22 11.6845 21.848 11.4713 21.544 11.045C20.1779 9.12944 16.6892 5 12 5C11.0922 5 10.2294 5.15476 9.41827 5.41827M6.74742 6.74742C4.73118 8.1072 3.24215 9.94266 2.45604 11.045C2.15201 11.4713 2 11.6845 2 12C2 12.3155 2.15201 12.5287 2.45604 12.955C3.8221 14.8706 7.31078 19 12 19C13.9908 19 15.7651 18.2557 17.2526 17.2526" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M9.85786 10C9.32783 10.53 9 11.2623 9 12.0711C9 13.6887 10.3113 15 11.9289 15C12.7377 15 13.47 14.6722 14 14.1421" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
    <path d="M3 3L21 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg> */
}
