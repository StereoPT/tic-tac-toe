import { Box, Button, Stack, Text } from "@chakra-ui/react";

type WinnerProps = {
  winner: string;
  handlePlayAgain: () => void;
};

const Winner = ({ winner, handlePlayAgain }: WinnerProps) => {
  return (
    <Stack spacing={4} textAlign={"center"}>
      <Box bg={"whiteAlpha.600"} rounded={"lg"} shadow={"sm"}>
        <Text fontSize={"xl"} py={2}>
          {winner}
        </Text>
      </Box>
      <Button variant={"solid"} colorScheme="teal" onClick={handlePlayAgain}>
        Play Again
      </Button>
    </Stack>
  );
};

export default Winner;
