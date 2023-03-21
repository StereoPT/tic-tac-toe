import calculateWinner from "@/utils/calculateWinner";
import { useState } from "react";

import Cell from "../Cell/Cell";

const initialBoardState = Array(9).fill(null);

const Board = () => {
  const [board, setBoard] = useState(initialBoardState);
  const [player, setPlayer] = useState(true);
  const winner = calculateWinner(board);

  const handleCellClick = (idx: number) => {
    const boardCopy = [...board];

    if (winner || boardCopy[idx]) return;

    boardCopy[idx] = player ? "X" : "O";

    console.log(boardCopy);

    setBoard(boardCopy);
    setPlayer((prevPlayer) => !prevPlayer);
  };

  return (
    <div className="grid gap-4 grid-cols-3 grid-rows-3">
      {board.map((cell, idx) => {
        return <Cell key={idx} text={cell} onCellClick={() => handleCellClick(idx)} />;
      })}
    </div>
  );
};

export default Board;
