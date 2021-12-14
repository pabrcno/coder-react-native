import React from "react";
import { View, StyleSheet, Text } from "react-native";
import styled from "styled-components/native";
import { numCols, numRows } from "../../utils/constants";
import generateEmptyGrid from "../../utils/generateEmptyGrid";

const StyledButton = styled.TouchableOpacity`
  background-color: #202020;
  padding: 20px;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
  width: 120px;
`;

const StyledActionRow = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding-bottom: 80px;
  background-color: #202020;
`;

const styles = StyleSheet.create({
  text: {
    fontFamily: "VCR",
    color: "#fff",
    fontSize: 20,
  },
});

interface IProps {
  toggleRunning: () => void;
  running: boolean;
  setGrid: (grid: number[][]) => void;
}
export const ActionsRow = ({ toggleRunning, running, setGrid }: IProps) => {
  return (
    <StyledActionRow>
      <StyledButton onPress={toggleRunning}>
        <Text style={styles.text}>{running ? "STOP" : "START"}</Text>
      </StyledButton>

      <StyledButton
        onPress={() => {
          const rows = [];
          for (let i = 0; i < numRows; i++) {
            rows.push(
              Array.from(Array(numCols), () => (Math.random() > 0.8 ? 1 : 0))
            );
          }

          setGrid(rows);
        }}
      >
        <Text style={styles.text}>Random</Text>
      </StyledButton>
      <StyledButton
        onPress={() => {
          setGrid(generateEmptyGrid());
        }}
      >
        <Text style={styles.text}>Clear</Text>
      </StyledButton>
    </StyledActionRow>
  );
};

export default ActionsRow;
