import React, { useState } from "react";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import GameScreen from "./presentation/GameScreen/GameScreen";
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import StartScreen from "./presentation/StartScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootStackParamList from "./domain/types/navigation";
import AboutScreen from "./presentation/AboutScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();
const fontConfig = {
  web: {
    regular: {
      fontFamily: "VCR",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "VCR",
      fontWeight: "normal",
    },
    light: {
      fontFamily: "VCR",
      fontWeight: "normal",
    },
    thin: {
      fontFamily: "VCR",
      fontWeight: "normal",
    },
  },
  ios: {
    regular: {
      fontFamily: "VCR",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "VCR",
      fontWeight: "normal",
    },
    light: {
      fontFamily: "VCR",
      fontWeight: "normal",
    },
    thin: {
      fontFamily: "VCR",
      fontWeight: "normal",
    },
  },
  android: {
    regular: {
      fontFamily: "VCR",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "VCR",
      fontWeight: "normal",
    },
    light: {
      fontFamily: "VCR",
      fontWeight: "normal",
    },
    thin: {
      fontFamily: "VCR",
      fontWeight: "normal",
    },
  },
};
const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig as any),
};
export default function App() {
  const [loaded] = useFonts({ VCR: require("./assets/fonts/VCR.ttf") });

  return (
    <PaperProvider theme={theme}>
      {loaded ? (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={StartScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Game"
              component={GameScreen}
              options={{ title: "Conway's Game of Life", headerShown: false }}
            />
            <Stack.Screen
              name="About"
              component={AboutScreen}
              options={{ title: "About", headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <AppLoading />
      )}
    </PaperProvider>
  );
}
