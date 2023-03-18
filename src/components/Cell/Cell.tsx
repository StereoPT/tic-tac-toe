type CellProps = {
  text: string;
};

const Cell = ({ text }: CellProps) => {
  return (
    <div className="bg-slate-600 rounded-lg px-6 py-4 text-center">
      <span className="select-none text-white font-extrabold text-7xl">{text}</span>
    </div>
  );
};

export default Cell;
