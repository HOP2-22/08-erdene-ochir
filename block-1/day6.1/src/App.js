import "./App.css";
import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import AllUsers from "./pages/AllUsers";
import { SingleUser } from "./pages/SingleUser";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllUsers />} />
        <Route path=":userID" element={<SingleUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
