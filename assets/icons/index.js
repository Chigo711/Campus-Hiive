import { Text } from "react-native"; // Import Text from react-native for fallback
import AddPost from "./AddPost"; // Import AddPost icon
import Apple from "./Apple"; // Import Apple icon if needed
import ArrowLeft from "./ArrowLeft";
import Chat from "./Chat"; // Import other icons as needed
import Delete from "./Delete"; // Import Delete icon if needed
import Facebook from "./Facebook"; // Import Facebook icon if needed
import Goggle from "./Google"; // Import Google icon if needed
import Home from "./Home";
import HomeSolid from "./HomeSolid"; // Assuming Home is the icon you want to use
import Lock from "./Lock"; // Import Lock icon if needed
import Mail from "./Mail"; // Import Mail icon
import Person from "./Person";
import Profile from "./Profile";
const icons = {
  home: Home,
  homeSold: HomeSolid,
  chat: Chat,
  addPost: AddPost,
  delete: Delete,
  profile: Profile,
  arrowLeft: ArrowLeft,
  mail: Mail, // Add Mail icon to the icons object
  lock: Lock, // Add Lock icon to the icons object
  facebook: Facebook, // Add Facebook icon to the icons object
  google: Goggle, // Add Google icon to the icons object
  apple: Apple, // Add Apple icon to the icons object
  person: Person,
};
// const icons: Record<string, React.ComponentType<any>> = { ... };

const Icons = ({ name, ...props }) => {
  //   const IconsComponent = icons[name];
  const FallbackIcon = () => <Text style={{ fontSize: 12 }}>❓</Text>; // or a placeholder SVG
  const IconsComponent = icons[name] || FallbackIcon;

  return (
    <IconsComponent
      height={props.size || 24}
      weight={props.size || 24}
      strokeWidth={props.strokeWidth || 1}
      color={props.color}
      {...props}
    />
  );
};

export default Icons;
