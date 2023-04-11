import { Box, Stack, Text } from "@chakra-ui/react";

type RoundProps = {
  roundNumber: number;
};

const Round = ({ roundNumber }: RoundProps) => {
  return (
    <Stack direction={"row"} spacing={4}>
      <Box bg={"whiteAlpha.600"} rounded={"lg"} shadow={"sm"} flex={1}>
        <Text fontSize={"xl"} py={2} px={4}>
          Round:
        </Text>
      </Box>
      <Box bg={"whiteAlpha.600"} rounded={"lg"} shadow={"sm"} minW={"16"}>
        <Text fontSize={"xl"} fontWeight={600} py={2} px={4}>
          {roundNumber}
        </Text>
      </Box>
    </Stack>
  );
};

export default Round;
