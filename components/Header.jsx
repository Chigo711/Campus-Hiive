import { hp } from "@/helpers/common";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import BackButton from "./BackButton";

const Header = ({ showBackButton = false, mb = 10, title }) => {
  const route = useRouter();
  return (
    <View
      style={{ marginBottom: mb }}
      className="flex flex-row justify-center items-center mt-5 gap-10"
    >
      {/* <Text className="font-pmedium">{title}</Text> */}
      {showBackButton && (
        <View>
          <BackButton router={route} />
        </View>
      )}

      <Text className="font-psemibold" style={{ fontSize: hp(2.7) }}>
        {title || ""}
      </Text>
    </View>
  );
};

export default Header;
