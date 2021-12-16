import React from "react";
import { SafeAreaView } from "react-native";
import { Appbar } from "react-native-paper";
import RootStackParamList from "../../domain/types/navigation";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { View, Dimensions, ScrollView, Image } from "react-native";
import styled from "styled-components/native";
import MyTabs from "./components/TabNavigator/TabNavigator";

const StyledBody = styled.View`
  flex: 1;
  margin: 20px;

  justify-content: center;
`;
const StyledTitle = styled.Text`
  font-family: "VCR";
  font-size: 22px;
  margin-left: 5px;

  color: #202020;
`;
const StyledText = styled.Text`
  font-size: 20px;
  margin-top: 10px;
`;
const ParagraphContainer = styled.View`
  margin-top: 10px;
  width: 90%;
  margin-left: 10px;
`;
const StyledFootDecoration = styled.View`
  width: 100%;
  height: 100px;
  flex-direction: row;
  flex: 1;
  margin-top: 20px;
  margin-bottom: 30px;
`;
type aboutScreenProp = StackNavigationProp<RootStackParamList, "About">;
const AboutScreen = () => {
  const navigation = useNavigation<aboutScreenProp>();
  return <MyTabs />;
};
export default AboutScreen;
