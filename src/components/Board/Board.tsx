import useBoard from "@/hooks/useBoard";
import Cell from "../Cell/Cell";
import { Box, Text, Grid } from "@chakra-ui/react";

const Board = () => {
  const { board, player, winner, handleCellClick } = useBoard();

  return (
    <Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={"4"}>
        {board.map((cell, idx) => {
          return <Cell key={idx} text={cell} onCellClick={() => handleCellClick(idx)} />;
        })}
      </Grid>

      <Box mt={8} bg={"whiteAlpha.600"} rounded={"lg"} shadow={"sm"} textAlign={"center"}>
        <Text fontSize={"xl"} py={2}>
          {winner ? `Winner: ${winner}` : `Next Player: ${player ? "X" : "O"}`}
        </Text>
      </Box>
    </Box>
  );
};

export default Board;
