import React from "react";
import Invoice from "./invoice/Invoice";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const NewInvoice = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Invoice />
    </div>
  );
};

export default NewInvoice;
