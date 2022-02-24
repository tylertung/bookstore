import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./templates/Home";
import Registration from "./templates/Registration";
import Login from "./templates/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route
        path="/registration"
        element={<Registration/>}
      ></Route>
      <Route path="/sign-in" element={<Login/>} />
    </Routes>
  );
}

export default App;
