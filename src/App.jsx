import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./Home";
import Ordering from "./Ordering";
import React from "react";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>  
          <Route path="/" element={<Home />} />
          <Route path="/ordering" element={<Ordering />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
