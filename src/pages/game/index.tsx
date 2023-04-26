import useBoard from "@/hooks/useBoard";

import Board from "@/components/Game/Board/Board";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import Round from "@/components/Game/Round/Round";
import NextPlayer from "@/components/Game/NextPlayer/NextPlayer";
import Winner from "@/components/Game/Winner/Winner";
import Timer from "@/components/Game/Timer/Timer";

const TicTacToe = () => {
  const { socket, board, round, player, winner, playerTime, handleCellClick, handlePlayAgain } =
    useBoard();

  return (
    <Box
      as={Flex}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      css={{
        background: "linear-gradient(-60deg, #E2E8F0 0%, #F7FAFC 100%)",
      }}>
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
    </Box>
  );
};

export default TicTacToe;
