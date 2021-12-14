import React from "react";
import { SafeAreaView, Text } from "react-native";
import CellGrid from "./components/CellGrid/CellGrid";
import { Appbar } from "react-native-paper";
const GameScreen = () => {
  const _goBack = () => console.log("Went back");
  return (
    <SafeAreaView>
      <Appbar.Header style={{ backgroundColor: "black" }}>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title="Conway's Game of Life" />
      </Appbar.Header>
      <CellGrid />
    </SafeAreaView>
  );
};
export default GameScreen;
