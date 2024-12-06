import { useState } from "react";
import Board from "./Board";

const PLAYER_X = "X";
const PLAYER_O = "O";

type Player = typeof PLAYER_X | typeof PLAYER_O;

const TicTacToe = () => {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState<Player>(PLAYER_X);

  const handleTileClick = (index: number) => {
    const newTiles = [...tiles];

    if (tiles[index] !== null) {
      return;
    }

    newTiles[index] = playerTurn;
    setTiles(newTiles);

    setPlayerTurn(playerTurn === PLAYER_X ? PLAYER_O : PLAYER_X);
  };
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board onTileClick={handleTileClick} tiles={tiles} />
    </div>
  );
};

export default TicTacToe;
