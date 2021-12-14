import React, { useState, useCallback, useRef } from "react";
import produce from "immer";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedbackBase,
  TouchableWithoutFeedback,
} from "react-native";
import styled from "styled-components/native";
import { Row } from "react-native-easy-grid";
import Cell from "../Cell";
import { numCols, numRows, operations } from "../../utils/constants";
import generateEmptyGrid from "../../utils/generateEmptyGrid";
import { ActionsRow } from "./../ActionsRow/ActionsRow";
import gameLogic from "../../utils/gameLogic";

const StyledGrid = styled.View``;

const CellGrid = () => {
  const [grid, setGrid] = useState(() => {
    return generateEmptyGrid();
  });

  const [running, setRunning] = useState(false);

  const runningRef = useRef(running);
  runningRef.current = running;

  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    setGrid(gameLogic);

    setTimeout(runSimulation, 150);
  }, []);

  return (
    <ScrollView>
      <StyledGrid style={styles.grid}>
        {grid.map((rows, i) => (
          <Row key={`${i}`}>
            {rows.map((col, k) => (
              <Cell
                key={`${i}-${k}`}
                onPress={() => {
                  const newGrid = produce(grid, (gridCopy) => {
                    gridCopy[i][k] = grid[i][k] ? 0 : 1;
                  });
                  setGrid(newGrid);
                }}
                i={i}
                k={k}
                grid={grid}
              />
            ))}
          </Row>
        ))}
      </StyledGrid>
      <ActionsRow
        toggleRunning={() => {
          setRunning(!running);
          if (!running) {
            runningRef.current = true;
            runSimulation();
          }
        }}
        running={running}
        setGrid={setGrid}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "white",
  },
  text: {
    fontFamily: "VCR",
    color: "#fff",
    fontSize: 20,
  },
});
export default CellGrid;
