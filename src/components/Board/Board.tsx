import { Symbol } from "@/types/types";
import Cell from "../Cell/Cell";
import { Grid, SlideFade } from "@chakra-ui/react";

type BoardProps = {
  board: Symbol[];
  handleCellClick: (idx: number) => void;
};

const Board = ({ board, handleCellClick }: BoardProps) => {
  return (
    <SlideFade offsetY={"50px"} in={true}>
      <Grid templateColumns="repeat(3, 1fr)" gap={"4"}>
        {board.map((cell, idx) => {
          return <Cell key={idx} text={cell} onCellClick={() => handleCellClick(idx)} />;
        })}
      </Grid>
    </SlideFade>
  );
};

export default Board;
