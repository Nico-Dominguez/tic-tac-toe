import Strike from "./Strike";
import Tile from "./Tile";

const TILE_BORDERS = {
  1: "right-border bottom-border",
  2: "right-border bottom-border",
  3: "bottom-border",
  4: "right-border bottom-border",
  5: "right-border bottom-border",
  6: "bottom-border",
  7: "right-border",
  8: "right-border",
  9: "",
} as const;

interface BoardProps {
  tiles: (string | null)[];
  onTileClick: (index: number) => void;
}

const Board = ({ tiles, onTileClick }: BoardProps) => {
  return (
    <div className="board">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((tile) => (
        <Tile
          className={TILE_BORDERS[tile as keyof typeof TILE_BORDERS]}
          key={tile}
          value={tiles[tile - 1]} // Subtract 1 to get correct array index
          onTileClick={() => onTileClick(tile - 1)}
        />
      ))}
      <Strike />
    </div>
  );
};

export default Board;
