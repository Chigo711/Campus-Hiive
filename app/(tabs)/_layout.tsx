import { Tabs } from "expo-router";
import React, { useEffect } from "react";
import { Platform } from "react-native";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { supabase } from "@/lib/supabase";
import { AuthProvider, useAuth } from "../../context/AuthContext";

const _layout = () => {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  );
};
export default function MainLayout() {
  const { setAuth } = useAuth();
  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      //   setSession(session);
      console.log("Session", session?.user);

      if (session) {
        // Set Auth
        // Move to home screen
      } else {
        // Set Auth null
        // Move to Welcome Screen
      }
    });
  }, []);

  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        // tabBarButton: HapticTab,
        // tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          //   tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          //   tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
