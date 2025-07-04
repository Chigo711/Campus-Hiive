import Icon from "@/assets/icons"; // Adjust the import path as necessary
import { wp } from "@/helpers/common";
import { View } from "react-native";

const SocialButtons = () => {
  return (
    <View
      className="flex-row items-center justify-center gap-4 max-w-[10rem]"
      style={{ paddingHorizontal: wp(4) }}
    >
      {/* <Text>SocialButtons</Text> */}
      <View className="h-[40px] w-[40px] border border-[#4b99e9] rounded-[50px] ">
        <Icon name="facebook" color="#4b99e9" />
      </View>
      <View className="h-[40px] w-[40px] border border-[#4b99e9] rounded-[50px] ">
        <Icon name="apple" color="#4b99e9" />
      </View>
      <View className="h-[40px] w-[40px] border border-[#4b99e9] rounded-[50px] ">
        <Icon name="google" color="#4b99e9" />
      </View>
    </View>
  );
};

export default SocialButtons;
