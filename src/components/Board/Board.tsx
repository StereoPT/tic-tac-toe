import Cell from "../Cell/Cell";

const Board = () => {
  return (
    <div className="grid gap-4 grid-cols-3 grid-rows-3">
      <Cell text="O" />
      <Cell text="X" />
      <Cell text="O" />

      <Cell text="X" />
      <Cell text="X" />
      <Cell text="O" />

      <Cell text="O" />
      <Cell text="O" />
      <Cell text="X" />
    </div>
  );
};

export default Board;
