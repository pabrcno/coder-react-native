import React from "react";
import { SafeAreaView, Text } from "react-native";
import CellGrid from "./components/CellGrid";
import { Appbar } from "react-native-paper";
import RootStackParamList from "../../domain/types/navigation";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
type gameScreenProp = StackNavigationProp<RootStackParamList, "Game">;

const GameScreen = () => {
  const navigation = useNavigation<gameScreenProp>();
  const _goBack = () => console.log("Went back");
  return (
    <SafeAreaView>
      <Appbar.Header style={{ backgroundColor: "white" }}>
        <Appbar.BackAction onPress={() => navigation.navigate("Home")} />
        <Appbar.Content title="Conway's Game of Life" />
      </Appbar.Header>
      <CellGrid />
    </SafeAreaView>
  );
};
export default GameScreen;
