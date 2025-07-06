// import Home from "@/assets/icons/Home"; // Assuming Home is a component you want to include
import Icons from "@/assets/icons";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import Input from "@/components/Input"; // Adjust the import path as necessary
import ScreenWrapper from "@/components/ScreenWrapper";
import SocialButtons from "@/components/SocialButtons"; // Adjust the import path as necessary
import ThemedStatusBar from "@/components/ThemedStatusBar"; // Assuming you have a themed status bar component
import theme from "@/constants/theme";
import { hp, wp } from "@/helpers/common";
import { supabase } from "@/lib/supabase";
import { Stack, useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";

const SignIn = () => {
  const router = useRouter();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  async function onSubmit() {
    // Simulate a network request
    if (!email || !password) {
      Alert.alert("Sign In", "Fill all the fields!!!");
    }

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: trimmedEmail,
      password: trimmedPassword,
    });

    setLoading(false);

    console.log("error:", error);

    if (error) {
      Alert.alert("Sign In", error.message);
    }
    return;
  }

  // setTimeout(() => {
  //   setLoading(false);
  //   // Here you would typically handle the login logic, e.g., API call
  //   // For now, we just navigate to the home screen
  //   // router.push("/home");
  // }, 2000); // Simulate a 2-second delay
  // }

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
          headerTitle: "",
        }}
      />
      <ScreenWrapper>
        <ThemedStatusBar />
        <View
          style={{
            flex: 1,
            gap: 45,
            paddingHorizontal: wp(5),
          }}
        >
          <BackButton router={router} />
          <View>
            <Text
              className="font-pbold text-textColor"
              style={{ fontSize: hp(4) }}
            >
              Hey,
            </Text>
            <Text
              className="font-pbold text-textColor"
              style={{ fontSize: hp(4) }}
            >
              Welcome Back
            </Text>
          </View>
          {/* LOGIN FORM */}
          <View style={{ gap: 20 }}>
            <Text style={{ fontSize: hp(1.5) }} className="text-textColor">
              Please Login to continue
            </Text>
            <Input
              icons={
                <Icons
                  name="mail"
                  strokeWidth="1.5"
                  color={theme.color.textLight}
                />
              }
              placeHolder="Enter your email"
              value={email}
              onChangeText={(e) => {
                setEmail(e);
              }}
            />
            <Input
              // emailRef.current = value;hhh
              icons={
                <Icons
                  name="lock"
                  strokeWidth="1.5"
                  color={theme.color.textLight}
                />
              }
              placeHolder="Enter your password"
              secureTextEntry={!showPassword}
              onChangeText={(p) => {
                // passwordRef.current = value;
                setPassword(p);
              }}
            />
            <Text className="text-right font-psemibold text-textColor">
              Forgot Password ?
            </Text>
            <View className="items-center w-full">
              <Button
                title="Login"
                loading={loading}
                onPress={onSubmit}
                className="justify-center items-center  bg-buttonColor w-full"
                buttonStyle={{
                  marginHorizontal: wp(3),
                  height: hp(6.6),
                  borderCurve: "continuous",
                  borderRadius: 18,
                }}
                textStyle={{
                  fontSize: hp(2.3),
                  color: "#fff",
                }}
                fontFamily="pmedium"
              />
            </View>
          </View>
          {/* End of welcome text block */}
          <SocialButtons />

          {/* Footer */}
          <View className="flex-row justify-center items-center gap-2">
            <Text className="font-psemibold">Don't have an account?</Text>
            <Pressable onPress={() => router.push("/signUp")}>
              <Text
                className="font-psemibold text-primary"
                style={{ fontSize: hp(1.6) }}
              >
                Sign Up
              </Text>
            </Pressable>
          </View>
        </View>
      </ScreenWrapper>
    </>
  );
};

export default SignIn;

{
  /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#141B34" stroke-width="1.5" />
    <path d="M13.5 16C13.5 16 10.5 13.054 10.5 12C10.5 10.9459 13.5 8 13.5 8" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg> */
}
{
  /* <Text>signIn</Text>
          <Icon name="home" color={theme.color.primary} />
          <Icon name="homeSolid" color={theme.color.primary} />
          <Icon name="chat" color={theme.color.primary} />
          <Icon name="addPost" color={theme.color.primary} />
          <Icon name="delete" color="#FF5050" />
          <Icon name="profile" color={theme.color.primary} /> */
}
