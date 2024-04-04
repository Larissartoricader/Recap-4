import { useState } from "react";
import ColorCard from "./ColorCard";
import "./ColorsBox.css";
import ColorsBoxPreview from "./ColorsBoxPreview";

// export default function ColorsBox({ theme, onDeleteTheme }) {
//   return (
//     <div>
//       <div className="colorbox-buttons">
//         <button className="colorbox-edit">Edit</button>
//         <button
//           className="colorbox-delete"
//           onClick={() => onDeleteTheme(theme.id)}
//         >
//           Delete
//         </button>
//       </div>
//       <div>
//         {theme.colors.map((color, index) => (
//           <ColorCard key={index} color={color} />
//         ))}
//       </div>
//     </div>
//   );
// }

export default function ColorsBox({
  theme,
  onDeleteTheme,
  onEditTheme,
  editing,
}) {
  return (
    <div>
      <div className="colorbox-buttons">
        <button className="colorbox-edit" onClick={onEditTheme}>
          {editing ? "Save Edition" : "Edit"}
        </button>
        <button
          className="colorbox-delete"
          onClick={() => onDeleteTheme(theme.id)}
        >
          Delete
        </button>
      </div>
      {editing === "Edit" && <ColorsBoxPreview theme={theme} />}
      {/* {editing === "Save Edition" && null} */}
      <div>
        {theme.colors.map((color, index) => (
          <ColorCard key={index} color={color} />
        ))}
      </div>
    </div>
  );
}
