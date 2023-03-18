import { useState } from "react";

import Cell from "../Cell/Cell";

const initialBoardState = new Array(9).fill(0);

const Board = () => {
  const [board, setBoard] = useState(initialBoardState);

  return (
    <div className="grid gap-4 grid-cols-3 grid-rows-3">
      {board.map((cell) => {
        return <Cell text={cell} />;
      })}
    </div>
  );
};

export default Board;
