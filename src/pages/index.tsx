import Link from "next/link";

import { Box, Button, Container, Heading, Stack } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Container maxW={"3xl"}>
      <Stack as={Box} textAlign={"center"} spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}>
          Tic-Tac-Toe
        </Heading>
        <Link href="/game">
          <Button
            colorScheme={"green"}
            bg={"green.400"}
            rounded={"full"}
            px={6}
            _hover={{
              bg: "green.500",
            }}>
            Start Game
          </Button>
        </Link>
      </Stack>
    </Container>
  );
};

export default HomePage;
