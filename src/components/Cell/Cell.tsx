import { Flex, GridItem, Text } from "@chakra-ui/react";

type CellProps = {
  text: string;
  onCellClick: () => void;
};

const Cell = ({ text, onCellClick }: CellProps) => {
  const textColor = text === "X" ? "blue.600" : "orange.600";

  return (
    <GridItem
      as={Flex}
      w="24"
      h="24"
      rounded={"lg"}
      shadow={"sm"}
      bg="whiteAlpha.600"
      onClick={onCellClick}
      justifyContent={"center"}
      alignItems={"center"}>
      <Text fontSize={"6xl"} fontWeight={600} color={textColor}>
        {text}
      </Text>
    </GridItem>
  );
};

export default Cell;
