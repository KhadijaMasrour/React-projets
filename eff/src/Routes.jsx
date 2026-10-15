import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Formulaire from "./Formulaire";
import Experts1 from "./Experts1";
import Experts2 from "./Experts2";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/formulaire">Formulaire</Link>
        {" | "}
        <Link to="/Experts1">Experts1</Link>
        {" | "}
        <Link to="/Experts2">Experts2</Link>
      </nav>

      <Routes>
        <Route path="/formulaire" element={<Formulaire />} />
        <Route path="/Experts1" element={<Experts1 />} />
        <Route path="/Experts2" element={<Experts2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
