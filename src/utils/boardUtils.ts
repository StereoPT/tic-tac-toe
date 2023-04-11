export const calculateBoardState = (squares: string[], round: number) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // Someone Won
      return "victory";
    }
  }

  if (round >= 10) {
    // Tie
    return "tie";
  }

  // No one Won
  return null;
};

export const calculateBoardWinner = (boardState: "victory" | "tie", player: boolean) => {
  if (boardState === "victory") {
    const winnerPlayer = player ? "X" : "O";
    return `Winner: ${winnerPlayer}`;
  } else {
    return "Tie";
  }
};
