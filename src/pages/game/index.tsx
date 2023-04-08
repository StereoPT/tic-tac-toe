import Board from "@/components/Board/Board";
import { Box, Container, Flex } from "@chakra-ui/react";

const TicTacToe = () => {
  return (
    <Box
      paddingTop={40}
      height={"100vh"}
      css={{
        background: "linear-gradient(-60deg, #E2E8F0 0%, #F7FAFC 100%)",
      }}>
      <Container as={Flex} maxW={"3xl"} justifyContent={"center"} alignItems={"center"}>
        <Board />
      </Container>
    </Box>
  );
};

export default TicTacToe;
