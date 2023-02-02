
import { createRoot } from "react-dom/client";
import Pet from "./Pet";
import SearchParams from "./SearchParams";
import './style.css'

const App = () => {
  return (
    <div>
    <SearchParams />
  </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);