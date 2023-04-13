import { Box, Icon, Progress, Stack, Flex } from "@chakra-ui/react";
import { MdOutlineTimer } from "react-icons/md";

type TimerProps = {
  player: string;
  playerTime: number;
};

const Timer = ({ player, playerTime }: TimerProps) => {
  const playerColor = player === "X" ? "blue" : "orange";

  return (
    <Box bg={"whiteAlpha.600"} rounded={"lg"} shadow={"sm"} flex={1} py={2} px={4}>
      <Stack direction={"row"} flex={1} spacing={4} alignItems={"center"}>
        <Icon as={MdOutlineTimer} boxSize={6} color={`${playerColor}.600`} />
        <Progress
          width={"100%"}
          colorScheme={playerColor}
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
