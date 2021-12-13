import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import todos from "./infrastructure/data/todos";
import TodoList from "./presentation/components/TodoList";
import StartScreen from "./presentation/StartScreen";
import { SafeAreaView, Text, View } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [loaded] = useFonts({ VCR: require("./assets/fonts/VCR.ttf") });

  return <>{loaded ? <StartScreen /> : <AppLoading />}</>;
}
