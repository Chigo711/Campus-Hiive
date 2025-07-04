// components/ThemedText.tsx
import { Text, TextProps, useColorScheme } from "react-native";

export default function ThemedText(props: TextProps) {
  const theme = useColorScheme();
  const color = theme === "dark" ? "#fff" : "#000";

  return <Text {...props} style={[{ color }, props.style]} />;
}
