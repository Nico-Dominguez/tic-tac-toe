interface TileProps {
  className: string;
  value: string | null;
  onTileClick: () => void;
}
function Tile({ className, value, onTileClick }: TileProps) {
  return (
    <div className={`tile ${className}`} onClick={onTileClick}>
      {value}
    </div>
  );
}

export default Tile;
