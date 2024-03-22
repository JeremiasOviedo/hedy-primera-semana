import { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Events from "./components/Events";

function App() {
  return (
    <>
        <div className="flex flex-col w-full h-full bg-cover bg-center m-0 pr-0">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/contact" Component={Contact} />
            <Route path="/events" Component={Events} />
          </Routes>
        </Router>
        </div>
    </>
  );
}

export default App;
