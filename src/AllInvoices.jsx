import React from 'react'
import "./App.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const AllInvoices = () => {
  return (
    <div className="homePage">
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default AllInvoices