import { Symbol } from "@/types/types";

export const getPlayerColor = (player: Symbol, variant: boolean = true) => {
  if (variant) return player === "X" ? "blue.600" : "orange.600";

  return player === "X" ? "blue" : "orange";
};
