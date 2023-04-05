import Board from "@/components/Board/Board";
import { Container, Flex } from "@chakra-ui/react";

const TicTacToe = () => {
  return (
    <Container
      as={Flex}
      maxW={"3xl"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}>
      <Board />
    </Container>
  );
};

export default TicTacToe;
