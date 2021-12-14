import React, { useState } from "react";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import GameScreen from "./presentation/GameScreen/GameScreen";
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";

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
      {loaded ? <GameScreen /> : <AppLoading />}
    </PaperProvider>
  );
}
