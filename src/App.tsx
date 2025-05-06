import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Stillness from "./Pages/Theme Pages/Stillness";
import Obsidian from "./Pages/Theme Pages/Obsidian";
import Verdant from "./Pages/Theme Pages/Verdant";
import Dreamy from "./Pages/Theme Pages/Dreamy";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/src/Pages/Theme Pages/Stillness.tsx" element={<Stillness />} />
        <Route path="/src/Pages/Theme Pages/Obsidian.tsx" element={<Obsidian />} />
        <Route path="/src/Pages/Theme Pages/Verdant.tsx" element={<Verdant />} />
        <Route path="/src/Pages/Theme Pages/Dreamy.tsx" element={<Dreamy />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
