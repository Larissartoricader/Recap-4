import ColorCard from "./ColorCard";
import "./ColorsBox.css";

export default function ColorsBox({ theme }) {
  return (
    <div className="colortheme-container">
      <div className="colorsbox_container">
        {theme.colors.map((color, index) => (
          <ColorCard key={index} color={color} />
        ))}
      </div>
    </div>
  );
}
