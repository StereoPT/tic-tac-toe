import { Box, Icon, Progress, Stack, Flex } from "@chakra-ui/react";
import { MdOutlineTimer } from "react-icons/md";

const Timer = () => {
  return (
    <Box bg={"whiteAlpha.600"} rounded={"lg"} shadow={"sm"} flex={1} py={2} px={4}>
      <Stack direction={"row"} flex={1} spacing={4} alignItems={"center"}>
        <Icon as={MdOutlineTimer} boxSize={6} />
        <Progress width={"100%"} colorScheme={"blue"} value={50} hasStripe rounded={"lg"} />
      </Stack>
    </Box>
  );
};

export default Timer;
