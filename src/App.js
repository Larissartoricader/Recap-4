import "./App.css";
import Header from "./components/Header";
import Theme from "./components/Theme";
import { initialThemes } from "./db";
import Form from "./components/Form";
import { useState, uid } from "react";

function App() {
  const [themes, setThemes] = useState(initialThemes);

  function handleAddTheme(newTheme) {
    setThemes([...themes, { ...newTheme, id: uid() }]);
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
