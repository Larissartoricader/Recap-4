import "./EditForm.css";
import { useState } from "react";

export default function EditForm({ theme, onSaveEdit }) {
  const [editedTheme, setEditedTheme] = useState(theme);

  const handleColorChange = (role, value) => {
    setEditedTheme((prevTheme) => ({
      ...prevTheme,
      colors: prevTheme.colors.map((color) =>
        color.role === role ? { ...color, value } : color
      ),
    }));
  };

  function handleEditSubmit(event) {
    event.preventDefault();
    onSaveEdit(editedTheme);
  }
  return (
    <div className="edit_box">
      <h1>Edit Form</h1>
      <form onSubmit={handleEditSubmit} className="form-edit-container">
        <label htmlFor="name">The Theme Name:</label>
        <input
          type="text"
          id="name"
          value={editedTheme.name}
          onChange={(event) =>
            setEditedTheme({ ...editedTheme, name: event.target.value })
          }
          required
        />
        <label>Choose New Colors:</label>
        <div className="form-edit-pick-colors">
          {editedTheme.colors.map((color) => (
            <input
              className="edit-pick-color"
              key={color.role}
              type="color"
              value={color.value}
              onChange={(event) =>
                handleColorChange(color.role, event.target.value)
              }
            />
          ))}
        </div>
        <button type="submit">Save Modification</button>
      </form>
    </div>
  );
}
