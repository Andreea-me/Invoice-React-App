import React, { useState } from "react";
import jsonData from "./tabledata.json";
import "./TableStyle.scss";

function InvoiceTable() {
  const [tableData, setTableData] = useState(jsonData);
  const tableRows = tableData.map((info, i) => {
    return (
      <tr key={i}>
        <td>{info.id}</td>
        <td>{info.item}</td>
        <td>{info.description}</td>
        <td>{info.quantity}</td>
        <td>{info.price}</td>
        <td>{info.total}</td>
      </tr>
    );
  });
  

  const addRows = (data) => {
    const totalData = tableData.length;
    data.id = totalData + 1;
    const updatedtotalData = [...tableData];
    updatedtotalData.push(data);
    setTableData(updatedtotalData);
  };
  return (
    <div>
      <table className="table table-stripped">
        <caption>Invoices</caption>
        <thead>
          <tr>
            <th>Index</th>
            <th>Item</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      {/* <DefaultInvoice func={addRows} /> */}
      <div>func={addRows}</div>
    </div>
  );
}

export default InvoiceTable;
