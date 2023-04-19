import { Symbol } from "@/types/types";
import { getPlayerColor } from "@/utils/playerUtils";
import { Box, Text, Flex } from "@chakra-ui/react";

type PlayerProps = {
  player: Symbol;
  symbol: Symbol;
};

const Player = ({ player, symbol }: PlayerProps) => {
  return (
    <Box
      bg={"whiteAlpha.600"}
      rounded={"lg"}
      shadow={"sm"}
      flex={1}
      py={2}
      border={"2px"}
      borderColor={player === symbol ? getPlayerColor(symbol) : "transparent"}>
      <Flex direction={"column"} textAlign={"center"}>
        <Text fontSize={"4xl"} fontWeight={600} color={getPlayerColor(symbol)}>
          {symbol}
        </Text>
        <Text fontSize={"lg"}>Player</Text>
      </Flex>
    </Box>
  );
};

export default Player;
