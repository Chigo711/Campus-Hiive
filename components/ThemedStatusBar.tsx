import { StatusBar, useColorScheme } from "react-native";

export default function ThemedStatusBar() {
  const theme = useColorScheme();
  return (
    <StatusBar
      barStyle={theme === "dark" ? "light-content" : "dark-content"}
      backgroundColor="transparent"
      translucent
    />
  );
}
