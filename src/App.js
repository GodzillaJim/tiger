import { BrowserRouter, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen.js";
import React from "react";
import { Routes } from "react-router";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
