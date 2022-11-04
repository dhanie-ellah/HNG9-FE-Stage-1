import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from './pages/contact'
import Home from './pages/home'

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Contact" element={<Contact/>} />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
