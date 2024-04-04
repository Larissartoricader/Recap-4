import { useEffect, useState } from "react";
import "./ColorCard.css";

export default function ColorCard({ color }) {
  const [colorName, setColorName] = useState();

  useEffect(() => {
    async function loadColorName() {
      const indexToDelete = 0;
      const hexWithoutHashtag = color.value.slice(indexToDelete + 1);
      const response = await fetch(
        `https://www.thecolorapi.com/id?hex=${hexWithoutHashtag}`
      );
      const data = await response.json();
      console.log(data.name.value);
      setColorName(data.name.value);
    }
    loadColorName();
  }, [color]);

  return (
    <div className="colorcard_container">
      <div className="colorcard_name">
        <h3>{color.role}</h3>
        <h4>Color Code: {color.value}</h4>
        <p>{colorName}</p>
      </div>
      <div
        className="colorcard-box"
        style={{ backgroundColor: color.value }}
      ></div>
    </div>
  );
}
