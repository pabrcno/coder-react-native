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

const numRows = 50;
const numCols = 50;

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

    setTimeout(runSimulation, 100);
  }, []);

  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() => {
          setRunning(!running);
          if (!running) {
            runningRef.current = true;
            runSimulation();
          }
        }}
      >
        <Text>{running ? "stop" : "start"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          const rows = [];
          for (let i = 0; i < numRows; i++) {
            rows.push(
              Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0))
            );
          }

          setGrid(rows);
        }}
      >
        <Text>random</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setGrid(generateEmptyGrid());
        }}
      >
        <Text>clear</Text>
      </TouchableOpacity>
      <StyledGrid style={styles.grid}>
        {grid.map((rows, i) =>
          rows.map((col, k) => (
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
                  width: 40,
                  height: 40,
                  borderWidth: 1,
                  borderColor: "black",
                  backgroundColor: grid[i][k] ? "green" : "white",
                }}
              />
            </TouchableOpacity>
          ))
        )}
      </StyledGrid>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  grid: {
    flex: 10,
    flexDirection: "row",
  },
});
export default CellGrid;
