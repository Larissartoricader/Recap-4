import "./App.css";
import Header from "./components/Header";
import Theme from "./components/Theme";
import { themes } from "./db";
import Form from "./components/Form";

function App() {
  return (
    <div>
      <Header />
      <Form />
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
