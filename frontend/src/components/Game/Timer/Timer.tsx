import { Symbol } from "@/types/types";
import { getPlayerColor } from "@/utils/playerUtils";
import { Box, Icon, Progress, Stack, Flex } from "@chakra-ui/react";
import { MdOutlineTimer } from "react-icons/md";

type TimerProps = {
  player: Symbol;
  playerTime: number;
};

const Timer = ({ player, playerTime }: TimerProps) => {
  return (
    <Box bg={"whiteAlpha.600"} rounded={"lg"} shadow={"sm"} flex={1} py={2} px={4}>
      <Stack direction={"row"} flex={1} spacing={4} alignItems={"center"}>
        <Icon as={MdOutlineTimer} boxSize={6} color={getPlayerColor(player)} />
        <Progress
          width={"100%"}
          colorScheme={getPlayerColor(player, false)}
          value={playerTime}
          max={30}
          hasStripe
          rounded={"lg"}
        />
      </Stack>
    </Box>
  );
};

export default Timer;
