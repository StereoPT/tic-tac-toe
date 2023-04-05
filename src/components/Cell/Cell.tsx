import { GridItem, Text } from "@chakra-ui/react";

type CellProps = {
  text: string;
  onCellClick: () => void;
};

const Cell = ({ text, onCellClick }: CellProps) => {
  return (
    <GridItem w="100%" h="10" bg="green.500" onClick={onCellClick}>
      <Text>{text}</Text>
    </GridItem>
  );
};

export default Cell;
