import React from "react";
import { SafeAreaView } from "react-native";
import { Appbar } from "react-native-paper";
import RootStackParamList from "../../domain/types/navigation";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
type aboutScreenProp = StackNavigationProp<RootStackParamList, "About">;
const AboutScreen = () => {
  const navigation = useNavigation<aboutScreenProp>();
  return (
    <SafeAreaView>
      <Appbar.Header style={{ backgroundColor: "white" }}>
        <Appbar.BackAction onPress={() => navigation.navigate("Home")} />
        <Appbar.Content title="About" />
      </Appbar.Header>
      <Text>About Screen</Text>
    </SafeAreaView>
  );
};
export default AboutScreen;
