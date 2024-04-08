import ColorCard from "./ColorCard";
import "./ColorsBox.css";

import EditForm from "./EditForm";

export default function ColorsBox({
  theme,
  onDeleteTheme,
  onEditButton,
  isEditing,
  onSaveEdit,
  onTryOutButton,
}) {
  return (
    <div>
      <div className="colorbox-buttons">
        <button className="colorbox-tryout" onClick={onTryOutButton}>
          Try Out
        </button>
        <button className="colorbox-edit" onClick={onEditButton}>
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
        <EditForm theme={theme} onSaveEdit={onSaveEdit} />
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
