import { Stack } from "@chakra-ui/react";
import Player from "../Player/Player";
import { Symbol } from "@/types/types";

type NextPlayerProps = {
  player: Symbol;
};

const NextPlayer = ({ player }: NextPlayerProps) => {
  return (
    <Stack direction={"row"} spacing={4}>
      <Player player={player} symbol="X" />
      <Player player={player} symbol="O" />
    </Stack>
  );
};

export default NextPlayer;
