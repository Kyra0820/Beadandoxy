import React, {useState} from "react";
import Home from "./Views/Home";
import Phone from "./Views/Phone";
import Navbar from "./Views/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Computer from "./Views/Computer";
import Headphones from "./Views/Headphones";
import TV from "./Views/TV";
import Other from "./Views/Other";
import Hardver from "./Views/Hardver";
function App() {
  return (
    
    <Router>

      <header>
          <Navbar/>

      </header>
      <main>
    
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/pc" element={<Computer/>}></Route>
        <Route path="/hardver" element={<Hardver/>}></Route>
        <Route path="/headphones" element={<Headphones/>}></Route>
        <Route path="/other" element={<Other/>}></Route>
        <Route path="/tv" element={<TV/>}></Route>
        <Route path="/phone" element={<Phone/>}></Route>
          </Routes>
          </main>
      </Router>
   
  );
}

export default App;
