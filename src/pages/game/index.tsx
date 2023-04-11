import useBoard from "@/hooks/useBoard";

import Board from "@/components/Board/Board";
import { Box, Button, Container, Flex, Stack, Text } from "@chakra-ui/react";
import Round from "@/components/Round/Round";

const TicTacToe = () => {
  const { board, round, player, winner, handleCellClick, handlePlayAgain } = useBoard();

  return (
    <Box
      paddingTop={40}
      height={"100vh"}
      css={{
        background: "linear-gradient(-60deg, #E2E8F0 0%, #F7FAFC 100%)",
      }}>
      <Container as={Flex} maxW={"3xl"} justifyContent={"center"} alignItems={"center"}>
        <Stack spacing={4}>
          <Round roundNumber={round} />
          <Board board={board} handleCellClick={handleCellClick} />
          <Stack spacing={4} textAlign={"center"}>
            {winner && (
              <>
                <Box bg={"whiteAlpha.600"} rounded={"lg"} shadow={"sm"}>
                  <Text fontSize={"xl"} py={2}>
                    {winner}
                  </Text>
                </Box>
                <Button variant={"solid"} colorScheme="blue" onClick={handlePlayAgain}>
                  Play Again
                </Button>
              </>
            )}
            {!winner && (
              <Box bg={"whiteAlpha.600"} rounded={"lg"} shadow={"sm"}>
                <Text fontSize={"xl"} py={2}>
                  Next Player: {player ? "X" : "O"}
                </Text>
              </Box>
            )}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default TicTacToe;
