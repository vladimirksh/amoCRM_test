import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";

import Main from "../../pages/Main";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
      <div className="aa"></div>
      <div className="ab"></div>
      <div className="ac"></div>
      <div className="ae"></div>
      <div className="ar"></div>
    </>
  );
}

export default App;
