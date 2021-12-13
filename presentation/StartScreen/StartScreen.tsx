import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";
import styled from "styled-components/native";

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
  width: 300;
`;

const StyledFootDecoration = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  flex-direction: row;
  flex: 1;
`;

const StartScreen = () => {
  const dimensions = Dimensions.get("window");
  const imageHeight = Math.round((dimensions.width * 9) / 35);
  const imageWidth = dimensions.width / 1;
  //sorry for the hardcoded values, but it does't let me require the images dynamically
  const decorationIterator = ["d1.png", "d2.png", "d3.png", "d4.png", "d5.png"];
  return (
    <StyledContainer>
      <StyledLogoContainer>
        <StyledLogo
          source={require("../../assets/logo.png")}
          style={{ height: imageHeight, width: imageWidth }}
        />
      </StyledLogoContainer>
      <View>
        <StyledButton onPress={() => {}}>
          <Text style={style.text}>PLAY!</Text>
        </StyledButton>
        <StyledButton onPress={() => {}}>
          <Text style={style.text}>ABOUT</Text>
        </StyledButton>
      </View>
      <StyledFootDecoration>
        <Image source={require(`../../assets/images/d4.png`)} />
        <Image source={require(`../../assets/images/d1.png`)} />
        <Image source={require(`../../assets/images/d2.png`)} />
        <Image source={require(`../../assets/images/d3.png`)} />
        <Image source={require(`../../assets/images/d4.png`)} />
      </StyledFootDecoration>
    </StyledContainer>
  );
};

const style = StyleSheet.create({
  text: {
    fontFamily: "VCR",
    color: "#fff",
    fontSize: 30,
  },
});
export default StartScreen;
