import Icons from "@/assets/icons";
import React from "react";
import { Pressable } from "react-native";

const BackButton = ({ router, fallback = "/welcome" }) => {
  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace(fallback);
    }
  };

  return (
    <Pressable onPress={handleBack}>
      <Icons name="arrowLeft" size="28" strokeWidth="0.5" />
    </Pressable>
  );
};

export default BackButton;
