import { enableScreens } from "react-native-screens";
import "../global.css";

import ScreenWrapper from "@/components/ScreenWrapper";
import { useRouter } from "expo-router";
import React from "react";
import { Button, Text } from "react-native";
enableScreens(true);
function index() {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <Text>Hello There</Text>
      <Text>This is the main entry point of the app.</Text>
      <Button title="Welcome Page" onPress={() => router.push("/welcome")} />
    </ScreenWrapper>
  );
}

export default index;
