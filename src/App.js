import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/styles.css";
import Détails from "./pages/Détails-films";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:handle" element={<Détails />}></Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
