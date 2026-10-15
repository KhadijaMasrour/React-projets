import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Formulaire from "./Formulaire";
import Experts1 from "./Expert";
import Experts2 from "./Expert2";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/formulaire">Formulaire</Link>{" | "}
        <Link to="/experts1">Experts1</Link>{" | "}
        <Link to="/experts2">Experts2</Link>
      </nav>

      <Routes>
        <Route path="/formulaire" element={<Formulaire />} />
        <Route path="/experts1" element={<Experts1 />} />
        <Route path="/experts2" element={<Experts2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
