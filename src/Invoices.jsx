import React from 'react'
import InvoiceTable from './InvoiceTable';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
// import jsonData from './tabledata.json'
// import InvoiceTable from './InvoiceTable'

const Invoices = () => {
  
  return (
    <div>
      <Navbar />
      <Sidebar />
      <InvoiceTable/>
    </div>
  );
}

export default Invoices