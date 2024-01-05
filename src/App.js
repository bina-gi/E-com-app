import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Homepage from "./component/homepage/homepage/homepage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>
    </div>
  );
}

export default App;
