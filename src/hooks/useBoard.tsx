import { useState } from "react";

import calculateWinner from "@/utils/calculateWinner";

const initialBoardState: string[] = Array(9).fill(null);
const initialPlayer = true;

const useBoard = () => {
  const [board, setBoard] = useState<string[]>(initialBoardState);
  const [player, setPlayer] = useState(initialPlayer);

  const winner = calculateWinner(board);

  const handleCellClick = (idx: number) => {
    const boardCopy = [...board];

    if (winner || boardCopy[idx]) return;

    boardCopy[idx] = player ? "X" : "O";

    setBoard(boardCopy);
    setPlayer((prevPlayer) => !prevPlayer);
  };

  const handlePlayAgain = () => {
    setBoard(initialBoardState);
    setPlayer(initialPlayer);
  };

  return {
    board,
    player,
    winner,

    handleCellClick,
    handlePlayAgain,
  };
};

export default useBoard;
