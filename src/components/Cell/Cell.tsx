type CellProps = {
  text: string;
  onCellClick: () => void;
};

const Cell = ({ text, onCellClick }: CellProps) => {
  return (
    <div
      className="bg-slate-600 rounded-lg px-6 py-4 text-center cursor-pointer min-w-[105px] min-h-[105px]"
      onClick={onCellClick}>
      <span className="select-none text-white font-extrabold text-7xl">{text}</span>
    </div>
  );
};

export default Cell;
