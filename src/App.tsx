import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./templates/Home";
import Registration from "./templates/Registration";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route
        path="/registration"
        element={<Registration></Registration>}
      ></Route>
    </Routes>
  );
}

export default App;
