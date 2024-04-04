import "./App.css";
import Header from "./components/Header";
import Theme from "./components/Theme";
import { initialThemes } from "./db";
import Form from "./components/Form";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const [themes, setThemes] = useState(initialThemes);

  function handleAddTheme(newTheme) {
    console.log(newTheme);
    // setThemes([...themes, { ...newTheme, id: uuid() }]);
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
  console.log(themes);
  return (
    <div>
      <Header />
      <Form onAddTheme={handleAddTheme} />
      <div className="theme-list">
        {themes.map((theme) => (
          <div key={theme.id}>
            <Theme theme={theme} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
