import { Box, Button, Container, Flex, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

const Lobby = () => {
  return (
    <Box
      as={Flex}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      css={{
        background: "linear-gradient(-60deg, #E2E8F0 0%, #F7FAFC 100%)",
      }}>
      <Container maxW={"md"}>
        <Stack spacing={16}>
          <Box bg={"whiteAlpha.600"} rounded={"lg"} shadow={"sm"} flex={1} py={2} px={4}>
            <Text fontSize={"xl"} fontWeight={600} textAlign={"center"}>
              Lobby
            </Text>
          </Box>
          <Stack direction={"row"} spacing={8} alignItems={"center"}>
            <Box
              bg={"whiteAlpha.600"}
              rounded={"lg"}
              shadow={"sm"}
              flex={1}
              py={2}
              border="2px"
              borderColor={"blue.600"}>
              <Flex direction={"column"} textAlign={"center"}>
                <Text fontSize={"4xl"} fontWeight={600} color="blue.600">
                  X
                </Text>
                <Text fontSize={"lg"}>Player</Text>
              </Flex>
            </Box>
            <Text fontSize={"xl"} fontWeight={600} color={"gray.400"}>
              VS
            </Text>
            <Box
              bg={"whiteAlpha.600"}
              rounded={"lg"}
              shadow={"sm"}
              flex={1}
              py={2}
              border="2px"
              borderColor={"gray.400"}>
              <Flex direction={"column"} textAlign={"center"}>
                <Text fontSize={"4xl"} fontWeight={600} color={"gray.400"}>
                  O
                </Text>
                <Text fontSize={"lg"} color={"gray.400"}>
                  Player
                </Text>
              </Flex>
            </Box>
          </Stack>
          <Box textAlign={"center"}>
            <Link href="/game">
              <Button size={"lg"} variant={"solid"} colorScheme={"blackAlpha"}>
                Ready
              </Button>
            </Link>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Lobby;
