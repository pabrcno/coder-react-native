import React, { useState } from "react";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import GameScreen from "./presentation/GameScreen/GameScreen";

export default function App() {
  const [loaded] = useFonts({ VCR: require("./assets/fonts/VCR.ttf") });

  return <>{loaded ? <GameScreen /> : <AppLoading />}</>;
}
