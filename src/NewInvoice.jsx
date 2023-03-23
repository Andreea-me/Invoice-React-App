import React from "react";
import DefaultInvoice from "./DefaultInvoice";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const NewInvoice = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <DefaultInvoice />
    </div>
  );
};

export default NewInvoice;
