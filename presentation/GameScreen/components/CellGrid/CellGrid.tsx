import React, { useState, useCallback, useRef } from "react";
import produce from "immer";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import { Row } from "react-native-easy-grid";
import Cell from "../Cell";
import generateEmptyGrid from "../../utils/generateEmptyGrid";
import { ActionsRow } from "./../ActionsRow/ActionsRow";
import gameLogic from "../../utils/gameLogic";

const StyledGrid = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

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
      <StyledGrid>
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

export default CellGrid;
