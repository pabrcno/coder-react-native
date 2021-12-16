import React from "react";
import { View, Dimensions, ScrollView, Image } from "react-native";
import styled from "styled-components/native";

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
const AboutConway = () => {
  return (
    <ScrollView>
      <StyledBody>
        <StyledTitle>Dr. Conway</StyledTitle>
        <ParagraphContainer>
          <StyledText>
            John Horton Conway FRS (26 December 1937 – 11 April 2020) was an
            English mathematician active in the theory of finite groups, knot
            theory, number theory, combinatorial game theory and coding theory.
            He also made contributions to many branches of recreational
            mathematics, most notably the invention of the cellular automaton
            called the Game of Life.
          </StyledText>
        </ParagraphContainer>
        <ParagraphContainer>
          <Image source={require(`../../../../assets/images/conway.png`)} />
        </ParagraphContainer>

        <View style={{ height: Dimensions.get("window").height * 0.1 }} />
      </StyledBody>
    </ScrollView>
  );
};
export default AboutConway;
