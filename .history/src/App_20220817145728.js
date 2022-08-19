import React from "react";
import "bootswatch/dist/lux/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Beggin from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beggin" element={<Beggin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
