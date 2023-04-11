import { useState } from "react";

import calculateWinner from "@/utils/calculateWinner";

const initialBoardState: string[] = Array(9).fill(null);
const initialRound = 1;
const initialPlayer = true;

const useBoard = () => {
  const [board, setBoard] = useState<string[]>(initialBoardState);
  const [round, setRound] = useState(initialRound);
  const [player, setPlayer] = useState(initialPlayer);

  const victoryState = calculateWinner(board, round);

  const handleCellClick = (idx: number) => {
    const boardCopy = [...board];

    if (victoryState || boardCopy[idx]) return;

    boardCopy[idx] = player ? "X" : "O";

    setBoard(boardCopy);
    setRound((prevRound) => prevRound + 1);
    setPlayer((prevPlayer) => !prevPlayer);
  };

  const handlePlayAgain = () => {
    setBoard(initialBoardState);
    setRound(initialRound);
    setPlayer(initialPlayer);
  };

  return {
    board,
    round,
    player,
    victoryState,

    handleCellClick,
    handlePlayAgain,
  };
};

export default useBoard;
