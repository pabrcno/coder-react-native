import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import styled from "styled-components/native";
import RootStackParamList from "../../domain/types/navigation";
import { StackNavigationProp } from "@react-navigation/stack";

const StyledContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
const StyledLogo = styled.Image``;

const StyledLogoContainer = styled.View`
  margin-bottom: 100px;
`;

const StyledButton = styled.TouchableOpacity`
  background-color: #202020;
  padding: 20px;
  margin: 20px;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
  width: 300px;
`;

const style = StyleSheet.create({
  text: {
    fontFamily: "VCR",
    color: "#fff",
    fontSize: 30,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
type homeScreenProp = StackNavigationProp<RootStackParamList, "Home">;
const StartScreen = () => {
  const dimensions = Dimensions.get("window");
  const imageHeight = Math.round((dimensions.width * 9) / 32);
  const imageWidth = dimensions.width / 0.9;
  const navigation = useNavigation<homeScreenProp>();

  return (
    <StyledContainer>
      <ImageBackground
        source={require("../../assets/background.png")}
        resizeMode="cover"
        style={{
          ...style.background,
          width: dimensions.width,
          height: dimensions.height,
        }}
      >
        <StyledLogo
          source={require("../../assets/logo.png")}
          style={{ height: imageHeight, width: imageWidth }}
        />

        <View>
          <StyledButton
            onPress={() => {
              //navigate to game screen
              navigation.navigate("Game");
            }}
          >
            <Text style={style.text}>PROFILE</Text>
          </StyledButton>
          <StyledButton
            onPress={() => {
              navigation.navigate("Challenges");
            }}
          >
            <Text style={style.text}>CHALLENGES</Text>
          </StyledButton>
          <StyledButton
            onPress={() => {
              navigation.navigate("About");
            }}
          >
            <Text style={style.text}>ABOUT</Text>
          </StyledButton>
        </View>
      </ImageBackground>
    </StyledContainer>
  );
};

export default StartScreen;
