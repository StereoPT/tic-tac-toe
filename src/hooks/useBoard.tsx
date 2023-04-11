import { useState } from "react";

import { calculateBoardState, calculateBoardWinner } from "@/utils/boardUtils";

const initialBoardState: string[] = Array(9).fill(null);
const initialRound = 1;
const initialPlayer = "X";

const useBoard = () => {
  const [board, setBoard] = useState<string[]>(initialBoardState);
  const [round, setRound] = useState(initialRound);
  const [player, setPlayer] = useState<"X" | "O">(initialPlayer);
  const [winner, setWinner] = useState<string | null>(null);

  const handleCellClick = (idx: number) => {
    const boardCopy = [...board];

    if (!!winner || boardCopy[idx]) return;

    boardCopy[idx] = player;
    setBoard(boardCopy);

    const boardState = calculateBoardState(boardCopy, round);

    if (!boardState) {
      setRound((prevRound) => prevRound + 1);
      setPlayer((prevPlayer) => {
        return prevPlayer === "X" ? "O" : "X";
      });
    } else {
      const boardWinner = calculateBoardWinner(boardState, player);
      setWinner(boardWinner);
    }
  };

  const handlePlayAgain = () => {
    setBoard(initialBoardState);
    setRound(initialRound);
    setPlayer(initialPlayer);
    setWinner(null);
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
