import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import About from "./Pages/About";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path="/about/:userName" element={<About/>}/>
      </Routes>
      <Routes>
        <Route path="/about/:userName/:project" element={<Project/>}/>
      </Routes>
    </Router>
  );
}
