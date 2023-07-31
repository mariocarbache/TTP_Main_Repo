import React, {Component} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import User from "./User";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/user/:userId" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
