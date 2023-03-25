import useBoard from "@/hooks/useBoard";
import Cell from "../Cell/Cell";

const Board = () => {
  const { board, player, winner, handleCellClick } = useBoard();

  return (
    <div>
      <div className="grid gap-4 grid-cols-3 grid-rows-3 mb-8">
        {board.map((cell, idx) => {
          return <Cell key={idx} text={cell} onCellClick={() => handleCellClick(idx)} />;
        })}
      </div>
      <div className="flex justify-center px-4 py-4 bg-slate-600 text-white rounded-lg">
        <span className="text-2xl">
          {winner ? `Winner: ${winner}` : `Next Player: ${player ? "X" : "O"}`}
        </span>
      </div>
    </div>
  );
};

export default Board;
