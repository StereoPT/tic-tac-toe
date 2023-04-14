import { useEffect, useState } from "react";

import { calculateBoardState, calculateBoardWinner } from "@/utils/boardUtils";
import random from "random";
import { Symbol } from "@/types/types";

const initialBoardState: Symbol[] = Array(9).fill(null);
const initialRound = 1;
const initialPlayer = "X";
const initialPlayerTime = 30;

const useBoard = () => {
  const [board, setBoard] = useState<Symbol[]>(initialBoardState);
  const [round, setRound] = useState(initialRound);
  const [player, setPlayer] = useState<Symbol>(initialPlayer);
  const [winner, setWinner] = useState<string | null>(null);
  const [playerTime, setPlayerTime] = useState<number>(initialPlayerTime);

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

    setPlayerTime(initialPlayerTime);
  };

  const clickRandomCell = () => {
    const availableCells = [...board].flatMap((player, idx) => {
      if (player) return [];
      return idx;
    });

    const randomCell = random.choice(availableCells) as number;

    handleCellClick(randomCell);
  };

  const handlePlayAgain = () => {
    setBoard(initialBoardState);
    setRound(initialRound);
    setPlayer(initialPlayer);
    setWinner(null);
    setPlayerTime(initialPlayerTime);
  };

  const passTime = () => {
    setPlayerTime((prevTime) => {
      if (prevTime <= 0) {
        clickRandomCell();
      }

      return prevTime - 1;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => passTime(), 1000);

    return () => clearInterval(interval);
  }, [board]);

  return {
    board,
    round,
    player,
    winner,
    playerTime,

    handleCellClick,
    handlePlayAgain,
  };
};

export default useBoard;
