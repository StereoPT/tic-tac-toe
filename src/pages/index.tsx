import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center justify-center flex-col gap-8">
        <span className="text-6xl font-bold">Tic-Tac-Toe</span>
        <Link href="/game">
          <span className="px-4 py-4 bg-slate-600 text-white rounded-lg text-xl">Start Game</span>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
