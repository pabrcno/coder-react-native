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
const AboutGame = () => {
  return (
    <ScrollView>
      <StyledBody>
        <StyledTitle>THE GAME OF LIFE</StyledTitle>
        <ParagraphContainer>
          <StyledText>
            Also known simply as Life, is a cellular automaton devised by the
            British mathematician John Horton Conway in 1970. It is a
            zero-player game, meaning that its evolution is determined by its
            initial state, requiring no further input.
          </StyledText>
        </ParagraphContainer>
        <ParagraphContainer>
          <StyledText>
            One interacts with the Game of Life by creating an initial
            configuration and observing how it evolves. It is Turing complete
            and can simulate a universal constructor or any other Turing
            machine.
          </StyledText>
        </ParagraphContainer>
        <StyledFootDecoration>
          <Image source={require(`../../../../assets/images/d4.png`)} />
          <Image source={require(`../../../../assets/images/d1.png`)} />
          <Image source={require(`../../../../assets/images/d2.png`)} />
          <Image source={require(`../../../../assets/images/d3.png`)} />
        </StyledFootDecoration>
        <StyledTitle>RULES</StyledTitle>
        <ParagraphContainer>
          <StyledText>
            The universe of the Game of Life is an infinite (this app is a
            finite grid but soon it will comply this requirement ),
            two-dimensional orthogonal grid of square cells, each of which is
            live or dead. Every cell interacts with its eight neighbors,
          </StyledText>
        </ParagraphContainer>
        <ParagraphContainer>
          <StyledText>
            At each step in time, the following transitions occur:
          </StyledText>
        </ParagraphContainer>
        <ParagraphContainer>
          <StyledText>
            1. Any live cell with fewer than two live neighbors dies, as if by
            under population.
          </StyledText>
        </ParagraphContainer>
        <ParagraphContainer>
          <StyledText>
            2. Any live cell with two or three live neighbors lives on to the
            next generation.
          </StyledText>
        </ParagraphContainer>
        <ParagraphContainer>
          <StyledText>
            3. Any live cell with more than three live neighbors dies, as if by
            overpopulation.
          </StyledText>
        </ParagraphContainer>
        <ParagraphContainer>
          <StyledText>
            4. Any dead cell with exactly three live neighbors becomes a live
            cell, as if by reproduction.
          </StyledText>
        </ParagraphContainer>

        <ParagraphContainer>
          <StyledTitle>HAVE FUN SIMULATING LIFE!</StyledTitle>
        </ParagraphContainer>
        <View style={{ height: Dimensions.get("window").height * 0.1 }} />
      </StyledBody>
    </ScrollView>
  );
};
export default AboutGame;
