import "./ColorCard.css";

export default function ColorCard({ color }) {
  return (
    <div className="colorcard_container">
      <div className="colorcard_name">
        <h3>{color.role}</h3>
        <h4>Color code: {color.value}</h4>
      </div>
      <div
        className="colorcard-box"
        style={{ backgroundColor: color.value }}
      ></div>
    </div>
  );
}
