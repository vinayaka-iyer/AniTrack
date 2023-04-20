import { BrowserRouter, Routes, Route } from "react-router-dom";
import Anime from "./pages/Anime";
import Add from "./pages/Add";
import Update from "./pages/Update";
import { useState } from "react";
import Home from "./pages/Home";

function App() {

  let [backUrl, setBackUrl] = useState("src/assets/tanjiro coverpage.jpg");

  return (
    <div className="app-comp" style={{background: backUrl}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/anime' element={<Anime />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
