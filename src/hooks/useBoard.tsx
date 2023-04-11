import { useState } from "react";

import { calculateBoardState, calculateBoardWinner } from "@/utils/boardUtils";

const initialBoardState: string[] = Array(9).fill(null);
const initialRound = 1;
const initialPlayer = true;

const useBoard = () => {
  const [board, setBoard] = useState<string[]>(initialBoardState);
  const [round, setRound] = useState(initialRound);
  const [player, setPlayer] = useState(initialPlayer);
  const [winner, setWinner] = useState<string>();

  const handleCellClick = (idx: number) => {
    const boardCopy = [...board];

    if (winner !== undefined || boardCopy[idx]) return;

    boardCopy[idx] = player ? "X" : "O";
    const boardState = calculateBoardState(boardCopy, round);

    setBoard(boardCopy);

    if (!boardState) {
      setRound((prevRound) => prevRound + 1);
      setPlayer((prevPlayer) => !prevPlayer);
    } else {
      const boardWinner = calculateBoardWinner(boardState, player);
      setWinner(boardWinner);
    }
  };

  const handlePlayAgain = () => {
    setBoard(initialBoardState);
    setRound(initialRound);
    setPlayer(initialPlayer);
    setWinner(undefined);
  };

  return {
    board,
    round,
    player,
    winner,

    handleCellClick,
    handlePlayAgain,
  };
};

export default useBoard;
