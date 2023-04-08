import Link from "next/link";

import { Box, Button, Heading, Stack } from "@chakra-ui/react";
import Waves from "@/components/Waves/Waves";

const HomePage = () => {
  return (
    <Box>
      <Box
        paddingTop={48}
        css={{
          background: "linear-gradient(60deg, #2A4365 0%, #00A3C4 100%)",
        }}>
        <Stack textAlign={"center"} spacing={"24"}>
          <Heading
            fontWeight={800}
            color={"gray.200"}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}>
            Tic-Tac-Toe
          </Heading>
          <Box>
            <Link href="/game">
              <Button colorScheme={"whiteAlpha"} variant={"outline"} size={"lg"}>
                Start Game
              </Button>
            </Link>
          </Box>
          <Waves />
        </Stack>
      </Box>
    </Box>
  );
};

export default HomePage;
