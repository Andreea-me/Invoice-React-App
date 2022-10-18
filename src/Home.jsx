import React from "react";
import "./App.css";
import CreateInvoice from "./CreateInvoice";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div className="homePage">
      <Navbar/>
      <Sidebar />
      <CreateInvoice/>
      
    </div>
  );
};

export default Home;
