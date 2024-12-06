import Strike from "./Strike";
import Tile from "./Tile";

const Board = () => {
  return (
    <div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((tile) => (
        <div key={tile}>
          <Tile />
        </div>
      ))}
      <Strike />
    </div>
  );
};

export default Board;
