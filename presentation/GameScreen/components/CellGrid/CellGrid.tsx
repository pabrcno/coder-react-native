import React, { useState, useCallback, useRef } from "react";
import produce from "immer";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import styled from "styled-components/native";
import { Row } from "react-native-easy-grid";

const numRows = 26;
const numCols = 18;

const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

const StyledGrid = styled.View``;
const StyledButton = styled.TouchableOpacity`
  background-color: #202020;
  padding: 20px;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
  width: 120px;
`;
const generateEmptyGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0));
  }

  return rows;
};

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

    setGrid((g) => {
      return produce(g, (gridCopy) => {
        for (let i = 0; i < numRows; i++) {
          for (let k = 0; k < numCols; k++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                neighbors += g[newI][newK];
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0;
            } else if (g[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1;
            }
          }
        }
      });
    });

    setTimeout(runSimulation, 150);
  }, []);

  return (
    <ScrollView>
      <StyledGrid style={styles.grid}>
        {grid.map((rows, i) => (
          <Row key={`${i}`}>
            {rows.map((col, k) => (
              <TouchableOpacity
                key={`${i}-${k}`}
                onPress={() => {
                  const newGrid = produce(grid, (gridCopy) => {
                    gridCopy[i][k] = grid[i][k] ? 0 : 1;
                  });
                  setGrid(newGrid);
                }}
              >
                <View
                  style={{
                    width: 24,
                    height: 24,
                    borderWidth: 0.5,
                    borderColor: "black",
                    backgroundColor: grid[i][k] ? "black" : "white",
                  }}
                />
              </TouchableOpacity>
            ))}
          </Row>
        ))}
      </StyledGrid>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "#202020",
          paddingBottom: 80,
        }}
      >
        <StyledButton
          onPress={() => {
            setRunning(!running);
            if (!running) {
              runningRef.current = true;
              runSimulation();
            }
          }}
        >
          <Text style={styles.text}>{running ? "STOP" : "START"}</Text>
        </StyledButton>

        <StyledButton
          onPress={() => {
            const rows = [];
            for (let i = 0; i < numRows; i++) {
              rows.push(
                Array.from(Array(numCols), () => (Math.random() > 0.5 ? 1 : 0))
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
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#202020",
  },
  text: {
    fontFamily: "VCR",
    color: "#fff",
    fontSize: 20,
  },
});
export default CellGrid;
