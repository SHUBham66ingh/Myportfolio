import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router";  
import Certificates from "../pages/Certificates";
import Education from "../pages/Education";
import Skills from "../pages/Skills";   
import Hobbies from "../pages/Hobbies";
import "./index.css"; 

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/certificates" element={<Certificates></Certificates>} />
          <Route path="/education" element={<Education></Education>} />
          <Route path="/hobbies" element={<Hobbies></Hobbies>} />
           <Route path="/skills" element={<Skills></Skills>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
