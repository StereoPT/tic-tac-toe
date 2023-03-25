import { useState } from "react";

import calculateWinner from "@/utils/calculateWinner";

const initialBoardState = Array(9).fill(null);

const useBoard = () => {
  const [board, setBoard] = useState(initialBoardState);
  const [player, setPlayer] = useState(true);

  const winner = calculateWinner(board);

  const handleCellClick = (idx: number) => {
    const boardCopy = [...board];

    if (winner || boardCopy[idx]) return;

    boardCopy[idx] = player ? "X" : "O";

    setBoard(boardCopy);
    setPlayer((prevPlayer) => !prevPlayer);
  };

  return {
    board,
    player,
    winner,

    handleCellClick,
  };
};

export default useBoard;
