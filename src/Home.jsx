import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div className="homePage">
      <Navbar/>
      <Sidebar />
    </div>
  );
};

export default Home;
