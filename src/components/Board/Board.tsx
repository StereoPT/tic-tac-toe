import useBoard from "@/hooks/useBoard";
import Cell from "../Cell/Cell";
import { Box, Button, Grid } from "@chakra-ui/react";

const Board = () => {
  const { board, player, winner, handleCellClick } = useBoard();

  return (
    <Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={"4"}>
        {board.map((cell, idx) => {
          return <Cell key={idx} text={cell} onCellClick={() => handleCellClick(idx)} />;
        })}
      </Grid>

      <Button
        colorScheme={"green"}
        bg={"green.400"}
        rounded={"full"}
        px={6}
        _hover={{
          bg: "green.500",
        }}>
        {winner ? `Winner: ${winner}` : `Next Player: ${player ? "X" : "O"}`}
      </Button>
    </Box>
  );
};

export default Board;
