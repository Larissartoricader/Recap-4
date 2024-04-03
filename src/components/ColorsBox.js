import ColorCard from "./ColorCard";
import "./ColorsBox.css";

export default function ColorsBox({ themes }) {
  return (
    <div>
      {themes.map((theme) => (
        <div className="colortheme-container" key={theme.id}>
          <h2>{theme.name}</h2>
          <div className="colorsbox_container">
            {theme.colors.map((color, index) => (
              <ColorCard key={index} color={color} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
