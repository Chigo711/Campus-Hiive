import { Stack } from "expo-router";
import React from "react";

import { useColorScheme } from "@/hooks/useColorScheme";
import { AuthProvider } from "../../context/AuthContext";

const _layout = () => {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  );
};
export default function MainLayout() {
  // const { setAuth } = useAuth();
  // const router = useRouter();
  // //   useEffect(() => {
  // //     supabase.auth.onAuthStateChange((_event, session) => {
  // //       //   setSession(session);
  // //       console.log("Session", session?.user);

  // //       if (session) {
  // //         // Set Auth
  // //         // Move to home screen
  // //         setAuth(session?.user);
  // //         router.replace("/(tabs)/explore");
  // //       } else {
  // //         // Set Auth null
  // //         // Move to Welcome Screen
  // //         setAuth(null);
  // //         router.replace("/welcome");
  // //       }
  // //     });
  // //   }, []);

  // useEffect(() => {
  //   const init = async () => {
  //     const {
  //       data: { session },
  //     } = await supabase.auth.getSession();

  //     if (session?.user) {
  // setAuth(session.user);/// We have remove the comment later when we have solved the authentication issue
  //       router.replace("/(tabs)/home");
  //     } else {
  //       setAuth(null);
  //       router.replace("/welcome");
  //     }

  //     supabase.auth.onAuthStateChange((_event, session) => {
  //       if (session?.user) {
  //         // setAuth(session.user);// Also this comment should be removed when the authentication is finally solved...
  //         console.log("🔥 Auth Event:", event);
  //         console.log("👤 Session User:", session?.user);
  //         router.replace("/(tabs)/home");
  //       } else {
  //         setAuth(null);
  //         router.replace("/welcome");
  //       }
  //     });
  //   };

  //   init();
  // }, []);  // THIS WHOLE THING SHOULD BE COMMENTED OUT LATER WHEN THE AUTHENTICATION ISSUE HAS BEEN RESOLVED

  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
// <Tabs
//   screenOptions={{
//     tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
//     headerShown: false,
//     // tabBarButton: HapticTab,
//     // tabBarBackground: TabBarBackground,
//     tabBarStyle: Platform.select({
//       ios: {
//         // Use a transparent background on iOS to show the blur effect
//         position: "absolute",
//       },
//       default: {},
//     }),
//   }}
// >
//   <Tabs.Screen
//     name="index"
//     options={{
//       title: "Home",
//       //   tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
//     }}
//   />
//   <Tabs.Screen
//     name="explore"
//     options={{
//       title: "Explore",
//       //   tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
//     }}
//   />
// </Tabs>
//   );
// }
