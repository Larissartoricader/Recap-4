import { useState } from "react";
import ColorCard from "./ColorCard";
import "./ColorsBox.css";

import EditForm from "./EditForm";

export default function ColorsBox({
  theme,
  onDeleteTheme,
  onEditTheme,
  isEditing,
}) {
  return (
    <div>
      <div className="colorbox-buttons">
        <button className="colorbox-edit" onClick={onEditTheme}>
          {isEditing ? "Close Edition" : "Edit"}
        </button>
        <button
          className="colorbox-delete"
          onClick={() => onDeleteTheme(theme.id)}
        >
          Delete
        </button>
      </div>

      {isEditing ? (
        <EditForm theme={theme} />
      ) : (
        <div>
          {theme.colors.map((color, index) => (
            <ColorCard key={index} color={color} />
          ))}
        </div>
      )}
    </div>
  );
}
