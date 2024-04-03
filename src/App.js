import "./App.css";
import ColorsBox from "./components/ColorsBox";
import Header from "./components/Header";
import { themes } from "./db";

function App() {
  return (
    <div>
      <Header />
      <ColorsBox themes={themes} />
    </div>
  );
}

export default App;
