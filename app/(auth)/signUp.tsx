import { Stack, useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";

import Icons from "@/assets/icons";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import Input from "@/components/Input";
import ScreenWrapper from "@/components/ScreenWrapper";
import SocialButtons from "@/components/SocialButtons";
import ThemedStatusBar from "@/components/ThemedStatusBar";
import theme from "@/constants/theme";
import { hp, wp } from "@/helpers/common";
import { supabase } from "@/lib/supabase";

const SignUp = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (!email || !password || !name) {
      Alert.alert("Sign Up", "Please fill in all the fields!");
      return;
    }

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedName = name.trim();

    setLoading(true);

    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: trimmedEmail,
      password: trimmedPassword,
      options: {
        data: {
          name: trimmedName,
        },
      },
    });

    if (error) {
      setLoading(false);
      Alert.alert("Sign Up", error.message);
      return;
    }

    // If no session returned, manually log in to trigger layout redirect
    if (!session) {
      const { error: loginError } = await supabase.auth.signInWithPassword({
        email: trimmedEmail,
        password: trimmedPassword,
      });

      if (loginError) {
        setLoading(false);
        Alert.alert("Login Failed", loginError.message);
        return;
      }
    }

    setLoading(false);
    // The layout should handle the redirect via `onAuthStateChange`
  };

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
        <View style={{ flex: 1, gap: 45, paddingHorizontal: wp(5) }}>
          <BackButton router={router} />
          <View>
            <Text
              className="font-pbold text-textColor"
              style={{ fontSize: hp(4) }}
            >
              Let's
            </Text>
            <Text
              className="font-pbold text-textColor"
              style={{ fontSize: hp(4) }}
            >
              Get Started
            </Text>
          </View>

          <View style={{ gap: 20 }}>
            <Text style={{ fontSize: hp(1.5) }} className="text-textColor">
              Please fill in your details to create an account
            </Text>

            <Input
              icons={
                <Icons
                  name="person"
                  strokeWidth="1.5"
                  color={theme.color.textLight}
                />
              }
              placeHolder="Enter your full name"
              value={name}
              onChangeText={(n) => setName(n)}
            />

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
              onChangeText={(e) => setEmail(e)}
            />

            <Input
              icons={
                <Icons
                  name="lock"
                  strokeWidth="1.5"
                  color={theme.color.textLight}
                />
              }
              placeHolder="Enter your password"
              secureTextEntry={!showPassword}
              onChangeText={(p) => setPassword(p)}
            />

            <View className="items-center w-full">
              <Button
                title="Submit"
                loading={loading}
                onPress={onSubmit}
                className="justify-center items-center bg-buttonColor w-full"
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

          <SocialButtons />

          <View className="flex-row justify-center items-center gap-2">
            <Text className="font-psemibold">Already have an account?</Text>
            <Pressable onPress={() => router.push("/signIn")}>
              <Text
                className="font-psemibold text-primary"
                style={{ fontSize: hp(1.6) }}
              >
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </ScreenWrapper>
    </>
  );
};

export default SignUp;

// // import Home from "@/assets/icons/Home"; // Assuming Home is a component you want to include
// import Icons from "@/assets/icons";
// import BackButton from "@/components/BackButton";
// import Button from "@/components/Button";
// import Input from "@/components/Input"; // Adjust the import path as necessary
// import ScreenWrapper from "@/components/ScreenWrapper";
// import SocialButtons from "@/components/SocialButtons"; // Adjust the import path as necessary
// import ThemedStatusBar from "@/components/ThemedStatusBar"; // Assuming you have a themed status bar component
// import theme from "@/constants/theme";
// import { hp, wp } from "@/helpers/common";
// import { supabase } from "@/lib/supabase";
// import { Stack, useRouter } from "expo-router";
// import React, { useRef, useState } from "react";
// import { Alert, Pressable, Text, View } from "react-native";

// const SignUp = () => {
//   const router = useRouter();
//   const emailRef = useRef("");
//   const passwordRef = useRef("");
//   const nameRef = useRef("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const [loading, setLoading] = useState(false);

//   async function onSubmit() {
//     // setLoading(true);
//     // Simulate a network request
//     if (!email || !password) {
//       Alert.alert("Sign Up", "Fill all the fields!!!");
//     }

//     const trimmedEmail = email.trim();
//     const trimmedPassword = password.trim();
//     const trimmedName = name.trim();

//     setLoading(true);

//     const {
//       data: { session },
//       error,
//     } = await supabase.auth.signUp({
//       email: trimmedEmail,
//       password: trimmedPassword,
//       options: {
//         data: {
//           name: trimmedName,
//         },
//       },
//     });

//     setLoading(false);
//     // console.log("session: ", session);
//     // console.log("error: ", error);

//     if (error) {
//       Alert.alert("Sign Up", error.message);
//     }
//   }

//   // setTimeout(() => {
//   //   setLoading(false);
//   //   // Here you would typically handle the login logic, e.g., API call
//   //   // For now, we just navigate to the home screen
//   //   // router.push("/home");
//   // }, 2000); // Simulate a 2-second delay
//   // }

//   return (
//     <>
//       <Stack.Screen
//         options={{
//           headerShown: false,
//           headerTitle: "",
//         }}
//       />
//       <ScreenWrapper>
//         <ThemedStatusBar />
//         <View
//           style={{
//             flex: 1,
//             gap: 45,
//             paddingHorizontal: wp(5),
//           }}
//         >
//           <BackButton router={router} />
//           <View>
//             <Text
//               className="font-pbold text-textColor"
//               style={{ fontSize: hp(4) }}
//             >
//               Let's
//             </Text>
//             <Text
//               className="font-pbold text-textColor"
//               style={{ fontSize: hp(4) }}
//             >
//               Get Started
//             </Text>
//           </View>
//           {/* LOGIN FORM */}
//           <View style={{ gap: 20 }}>
//             <Text style={{ fontSize: hp(1.5) }} className="text-textColor">
//               Please fill in your details to create an account
//             </Text>
//             <Input
//               icons={
//                 <Icons
//                   name="person"
//                   strokeWidth="1.5"
//                   color={theme.color.textLight}
//                 />
//               }
//               placeHolder="Enter your full name"
//               value={name}
//               // nameRef.current
//               onChangeText={(n) => {
//                 setName(n);
//               }}
//             />
//             <Input
//               icons={
//                 <Icons
//                   name="mail"
//                   strokeWidth="1.5"
//                   color={theme.color.textLight}
//                 />
//               }
//               placeHolder="Enter your email"
//               value={email}
//               onChangeText={(e) => {
//                 setEmail(e);
//               }}
//             />
//             <Input
//               // emailRef.current = value;hhh
//               icons={
//                 <Icons
//                   name="lock"
//                   strokeWidth="1.5"
//                   color={theme.color.textLight}
//                 />
//               }
//               placeHolder="Enter your password"
//               secureTextEntry={!showPassword}
//               onChangeText={(p) => {
//                 // passwordRef.current = value;
//                 setPassword(p);
//               }}
//             />

//             <View className="items-center w-full">
//               <Button
//                 title="Submit"
//                 loading={loading}
//                 onPress={onSubmit}
//                 className="justify-center items-center  bg-buttonColor w-full"
//                 buttonStyle={{
//                   marginHorizontal: wp(3),
//                   height: hp(6.6),
//                   borderCurve: "continuous",
//                   borderRadius: 18,
//                 }}
//                 textStyle={{
//                   fontSize: hp(2.3),
//                   color: "#fff",
//                 }}
//                 fontFamily="pmedium"
//               />
//             </View>
//           </View>
//           {/* End of welcome text hfhblock */}
//           <SocialButtons />

//           {/* Footer */}
//           <View className="flex-row justify-center items-center gap-2">
//             <Text className="font-psemibold">Already have an account?</Text>
//             <Pressable onPress={() => router.push("/signIn")}>
//               <Text
//                 className="font-psemibold text-primary"
//                 style={{ fontSize: hp(1.6) }}
//               >
//                 Login
//               </Text>
//             </Pressable>
//           </View>
//         </View>
//       </ScreenWrapper>
//     </>
//   );
// };

// export default SignUp;

// {
//   /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
//     <circle cx="12" cy="12" r="10" stroke="#141B34" stroke-width="1.5" />
//     <path d="M13.5 16C13.5 16 10.5 13.054 10.5 12C10.5 10.9459 13.5 8 13.5 8" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
// </svg> */
// }
// {
//   /* <Text>signIn</Text>
//           <Icon name="home" color={theme.color.primary} />
//           <Icon name="homeSolid" color={theme.color.primary} />
//           <Icon name="chat" color={theme.color.primary} />
//           <Icon name="addPost" color={theme.color.primary} />
//           <Icon name="delete" color="#FF5050" />
//           <Icon name="profile" color={theme.color.primary} /> */
// }
