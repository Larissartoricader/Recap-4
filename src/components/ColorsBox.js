import ColorCard from "./ColorCard";
import "./ColorsBox.css";

export default function ColorsBox({ theme, onDeleteTheme, id }) {
  return (
    <div>
      <div>
        {theme.colors.map((color, index) => (
          <ColorCard key={index} color={color} />
        ))}
      </div>
      <button
        className="colorbox-delete"
        onClick={() => onDeleteTheme(theme.id)}
      >
        DELETE
      </button>
    </div>
  );
}
