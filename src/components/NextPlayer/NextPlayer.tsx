import { Box, Stack, Text, Flex } from "@chakra-ui/react";

type NextPlayerProps = {
  player: "X" | "O";
};

const NextPlayer = ({ player }: NextPlayerProps) => {
  return (
    <Stack direction={"row"} spacing={4}>
      <Box
        bg={"whiteAlpha.600"}
        rounded={"lg"}
        shadow={"sm"}
        flex={1}
        py={2}
        border={player === "X" ? "2px" : "none"}
        borderColor={"blue.600"}>
        <Flex direction={"column"} textAlign={"center"}>
          <Text fontSize={"4xl"} fontWeight={600} color={"blue.600"}>
            X
          </Text>
          <Text fontSize={"lg"}>Player</Text>
        </Flex>
      </Box>
      <Box
        bg={"whiteAlpha.600"}
        rounded={"lg"}
        shadow={"sm"}
        flex={1}
        py={2}
        border={player === "O" ? "2px" : "none"}
        borderColor={"orange.600"}>
        <Flex direction={"column"} textAlign={"center"}>
          <Text fontSize={"4xl"} fontWeight={600} color={"orange.600"}>
            O
          </Text>
          <Text fontSize={"lg"}>Player</Text>
        </Flex>
      </Box>
    </Stack>
  );
};

export default NextPlayer;
