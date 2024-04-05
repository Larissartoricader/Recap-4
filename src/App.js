import "./App.css";
import Header from "./components/Header";
import Theme from "./components/Theme";
import { initialThemes } from "./db";
import Form from "./components/Form";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [themes, setThemes] = useLocalStorageState("themes", {
    defaultValue: initialThemes,
  });

  const [isEditing, setIsEditing] = useState(false);
  function handleEditTheme() {
    console.log("Edit Button pressed");
    setIsEditing(!isEditing);
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

  return (
    <div>
      <Header />
      <Form onAddTheme={handleAddTheme} />
      <div className="theme-list">
        {themes.map((theme) => (
          <div key={theme.id}>
            <Theme
              theme={theme}
              onDeleteTheme={handleDeleteTheme}
              onEditTheme={handleEditTheme}
              isEditing={isEditing}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
