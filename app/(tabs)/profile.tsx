import Header from "@/components/Header";
import ScreenWrapper from "@/components/ScreenWrapper";
import { wp } from "@/helpers/common";
import React from "react";
import { StatusBar, useColorScheme, View } from "react-native";
const Profile = () => {
  const colorScheme = useColorScheme();

  return (
    <ScreenWrapper>
      <StatusBar
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
      />
      <View style={{ paddingHorizontal: wp(4) }}>
        <UserHeader />
        {/* <Text>Hello there</Text> */}
      </View>
    </ScreenWrapper>
  );
};

const UserHeader = () => {
  return (
    <View className="flex">
      <Header title="Profile" showBackButton={false} />
    </View>
  );
};

export default Profile;
