import React, {useState} from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import jsonData from './tabledata.json'
import InvoiceTable from './InvoiceTable'

const Invoices = () => {
  const [invoiceData, setInvoiceData] = useState(jsonData);

  const tableRows = invoiceData.map((info) =>{
    return (
      <tr>
        <td>{info.id}</td>
        <td>{info.item}</td>
        <td>{info.description}</td>
        <td>{info.qty}</td>
        <td>{info.price}</td>
      </tr>
    );
  })

  const addRows = (data) => {
    const totalItems = invoiceData.length;
    data.id = totalItems + 1;
    const updatedInvoiceData = [...invoiceData];
    updatedInvoiceData.push(data);
    setInvoiceData(updatedInvoiceData);
  }
  return (
    <div>
      <Navbar />
      <Sidebar />
      <table className="table" table-stripped>
        <thead>
          <tr>
            <th>Index</th>
            <th>Item</th>
            <th>Description</th>
            <th>Qty</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      {/* <InvoiceTable func={addRows}/> */}
    </div>
  );
}

export default Invoices