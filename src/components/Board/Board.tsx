import Cell from "../Cell/Cell";
import { Box, Grid } from "@chakra-ui/react";

type BoardProps = {
  board: string[];
  handleCellClick: (idx: number) => void;
};

const Board = ({ board, handleCellClick }: BoardProps) => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={"4"}>
      {board.map((cell, idx) => {
        return <Cell key={idx} text={cell} onCellClick={() => handleCellClick(idx)} />;
      })}
    </Grid>
  );
};

export default Board;
