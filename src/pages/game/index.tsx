import useBoard from "@/hooks/useBoard";

import Board from "@/components/Board/Board";
import { Box, Container, Flex, Stack } from "@chakra-ui/react";
import Round from "@/components/Round/Round";
import NextPlayer from "@/components/NextPlayer/NextPlayer";
import Winner from "@/components/Winner/Winner";
import Timer from "@/components/Timer/Timer";

const TicTacToe = () => {
  const { board, round, player, winner, playerTime, handleCellClick, handlePlayAgain } = useBoard();

  return (
    <Box
      paddingTop={16}
      height={"100vh"}
      css={{
        background: "linear-gradient(-60deg, #E2E8F0 0%, #F7FAFC 100%)",
      }}>
      <Container as={Flex} maxW={"3xl"} justifyContent={"center"} alignItems={"center"}>
        <Stack spacing={4}>
          <Round roundNumber={round} />
          <Board board={board} handleCellClick={handleCellClick} />
          {winner ? (
            <Winner player={player} winner={winner} handlePlayAgain={handlePlayAgain} />
          ) : (
            <Stack spacing={4}>
              <Timer player={player} playerTime={playerTime} />
              <NextPlayer player={player} />
            </Stack>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default TicTacToe;
