import React from "react";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import LoadingPage from "../Components/LoadingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoPageFound from "../Pages/NoPageFound";

const TodoApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/Loading" element={<LoadingPage />} />
        <Route path="/TodoApp" element={<Home />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </Router>
  );
};

export default TodoApp;
