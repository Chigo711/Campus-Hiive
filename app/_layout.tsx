import ThemedStatusBar from "@/components/ThemedStatusBar";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import "react-native-reanimated";
import "../global.css";
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync(); // Hide the splash screen once fonts are loaded
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null; //
  return (
    <>
      <ThemedStatusBar />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "fade_from_bottom",

          // contentStyle: { backgroundColor: Colors[colorScheme ?? 'light'].background },
        }}
      />
    </>
  );
}

// <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//   <Stack>
//     <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//     <Stack.Screen name="+not-found" />
//   </Stack>
// </ThemeProvider>

// return <Redirect href="/welcome" />;
//
