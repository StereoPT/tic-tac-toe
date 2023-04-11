import { Box, Stack, Text } from "@chakra-ui/react";

type NextPlayerProps = {
  player: "X" | "O";
};

const NextPlayer = ({ player }: NextPlayerProps) => {
  return (
    <Stack direction={"row"} spacing={4}>
      <Box bg={"whiteAlpha.600"} rounded={"lg"} shadow={"sm"} flex={1}>
        <Text fontSize={"xl"} py={2} px={4}>
          Next Player:
        </Text>
      </Box>
      <Box bg={"whiteAlpha.600"} rounded={"lg"} shadow={"sm"} minW={16} textAlign={"center"}>
        <Text fontSize={"xl"} fontWeight={600} py={2} px={4}>
          {player}
        </Text>
      </Box>
    </Stack>
  );
};

export default NextPlayer;
