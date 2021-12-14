import { PatchListener } from "immer";
import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import styled from "styled-components";

interface IProps {
  grid: number[][];
  onPress: () => void;
  i: number;
  k: number;
}

const Cell = ({ grid, onPress, i, k }: IProps) => {
  return (
    <TouchableWithoutFeedback key={`${i}-${k}`} onPress={onPress}>
      <View
        style={{
          width: 24,
          height: 24,
          borderWidth: 0.5,
          borderColor: "black",
          backgroundColor: grid[i][k] ? "black" : "white",
        }}
      />
    </TouchableWithoutFeedback>
  );
};
export default Cell;
