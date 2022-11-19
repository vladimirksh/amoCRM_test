import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Main from "../../pages/Main";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
      <div className="aa"></div>
      <div className="ab"></div>
      <div className="ac"></div>
      <div className="ar"></div>
      <div className="ae"></div>
    </div>
  );
}

export default App;
