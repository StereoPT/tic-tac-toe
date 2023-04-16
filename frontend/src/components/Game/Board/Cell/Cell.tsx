import { Symbol } from "@/types/types";
import { getPlayerColor } from "@/utils/playerUtils";
import { Flex, GridItem, Text } from "@chakra-ui/react";

type CellProps = {
  text: Symbol;
  onCellClick: () => void;
};

const Cell = ({ text, onCellClick }: CellProps) => {
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
      alignItems={"center"}
      cursor={"pointer"}>
      <Text fontSize={"6xl"} fontWeight={600} color={getPlayerColor(text)} userSelect={"none"}>
        {text}
      </Text>
    </GridItem>
  );
};

export default Cell;
