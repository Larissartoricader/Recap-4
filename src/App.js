import "./App.css";
import Header from "./components/Header";
import Theme from "./components/Theme";
import { initialThemes } from "./db";
import Form from "./components/Form";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import useLocalStorageState from "use-local-storage-state";
import TryOut from "./components/TryOut";

const initialTheme = {
  id: "0",
  name: "Vivid Meadow",
  colors: [
    {
      role: "primary",
      value: "#57886C",
      name: "Viridian",
    },
    {
      role: "secondary",
      value: "#F8C7CC",
      name: "Tea Rose",
    },
    {
      role: "surface",
      value: "#FDEDEE",
      name: "Lavender Blush",
    },
    {
      role: "surface-on",
      value: "#0E0F19",
      name: "Rich Black",
    },
  ],
};

function App() {
  const [themes, setThemes] = useLocalStorageState("themes", {
    defaultValue: initialThemes,
  });

  const [isEditing, setIsEditing] = useState(false);
  function handleEditButton() {
    console.log("Edit Button pressed");
    setIsEditing(!isEditing);
  }

  function handleSaveEdit(editedTheme) {
    setThemes((prevThemes) =>
      prevThemes.map((theme) =>
        theme.id === editedTheme.id ? editedTheme : theme
      )
    );
    setIsEditing(false);
  }

  function handleAddTheme(newTheme) {
    setThemes([
      {
        id: uuid(),
        name: newTheme.name,
        colors: [
          { role: "primary", value: newTheme.primary },
          { role: "seconday", value: newTheme.secondary },
          { role: "surface", value: newTheme.surface },
          { role: "surface-on", value: newTheme.surfaceon },
        ],
      },
      ...themes,
    ]);
  }

  function handleDeleteTheme(id) {
    setThemes(themes.filter((theme) => theme.id !== id));
  }

  const [showTryOut, setShowTryOut] = useState(false);
  function handleTryOutButton() {
    setShowTryOut(!showTryOut);
  }

  return (
    <div className="app-page">
      {showTryOut ? (
        <TryOut onCloseTryOut={handleTryOutButton} showTryOut={showTryOut} />
      ) : (
        <>
          <Header />
          <Form onAddTheme={handleAddTheme} theme={initialTheme} />
          <div className="theme-list">
            {themes.map((theme) => (
              <div key={theme.id}>
                <Theme
                  theme={theme}
                  onDeleteTheme={handleDeleteTheme}
                  onEditButton={handleEditButton}
                  isEditing={isEditing}
                  onSaveEdit={handleSaveEdit}
                  onTryOutButton={handleTryOutButton}
                  showTryOut={showTryOut}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
