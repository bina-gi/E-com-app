import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Hats from "./pages/hats";

function App() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <NavLink className="navlink" to="/">
            To Homepage
          </NavLink>
          <NavLink className="navlink" to="/Hats">
            To Hats
          </NavLink>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Hats" element={<Hats />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
