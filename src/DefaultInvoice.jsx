import React, { useState } from "react";
import styles from "../src/invoice/Invoice.module.scss";
import style from "../src/invoice/LineItems.module.scss";
import styleb from "../src/invoice/LineItem.module.scss";
import jsonData from "./tabledata.json";
import Logo from "./image/logo_f.png";
import { MdCancel as DeleteIcon } from "react-icons/md";

const DefaultInvoice = (props) => {
  const [invoices, setInvoices] = useState([
    {
      index: 1,
      item: "",
      description: "",
      quantity: 0,
      price: 0,
      total: 0,
    },
  ]);

  const [index, setIndex] = useState("");
  const [item, setItem] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [total, setTotal] = useState("");

  const changeItem = (event) => {
    setItem(event.target.value);
  };

  const changeDescription = (event) => {
    setDescription(event.target.value);
  };

  const changeQuantity = (event) => {
    setQuantity(event.target.value);
  };

  const changePrice = (event) => {
    setPrice(event.target.value);
  };

  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      index,
      item,
      description,
      quantity,
      price,
      total,
    };
    // props.func(val);
    clearState();
    //val in jsondata
    jsonData.push(val);
  };

  const clearState = () => {
    setItem("");
    setDescription("");
    setQuantity("");
    setPrice("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const invoiceData = {
      index: index,
      item: item,
      description: description,
      quantity: quantity,
      price: price,
      total: total,
    };
    console.log(invoiceData);
    clearState();
  };

  const [taxRate, setTaxRate] = useState(0);

  const handleChange = (event, index) => {
    const newInvoices = [...invoices];
    newInvoices[index][event.target.name] =
      event.target.name === "quantity" || event.target.name === "price"
        ? parseInt(event.target.value)
        : event.target.value;
    newInvoices[index].total =
      newInvoices[index].quantity * newInvoices[index].price;
    setInvoices(newInvoices);
  };

  const addInvoice = () => {
    setInvoices([
      ...invoices,
      {
        index: invoices.length + 1,
        item: "",
        description: "",
        quantity: 0,
        price: 0,
        total: 0,
      },
    ]);
  };

  const handleDeleteRow = (index) => {
    const newInvoices = invoices.filter((invoice) => invoice.index !== index);
    setInvoices(newInvoices);
  };

  /*-----Tax functions--------*/
  const handleTaxRateChange = (event) => {
    setTaxRate(event.target.value);
  };

  const calculateSubtotal = () => {
    return invoices.reduce((acc, curr) => acc + curr.total, 0);
  };

  const calculateTax = () => {
    return (taxRate / 100) * calculateSubtotal();
  };

  const calculateTotalDue = () => {
    return calculateSubtotal() + calculateTax();
  };

  return (
    <>
      <div className={styles.invoice}>
        <div className={styles.brand}>
          <img src={Logo} alt="Logo" />
        </div>
        <div className={styles.addresses}>
          <div className={styles.from}>
            <strong>Amazing Company</strong>
            <br />
            Calea Gusteritei
            <br />
            Sibiu, Romania &nbsp;A1B2C3
            <br />
            +40761524367
          </div>
          <div>
            <div className={`${styles.valueTable} ${styles.to}`}>
              <div className={styles.row}>
                <div className={styles.label}>Customer #</div>
                <div className={styles.value}>123456</div>
              </div>
              <div className={styles.row}>
                <div className={styles.label}>Invoice #</div>
                <div className={styles.value}>123456</div>
              </div>
              <div className={styles.row}>
                <div className={styles.label}>Date</div>
                <div className={`${styles.value} ${styles.date}`}>
                  19/10/2022
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2>Invoice</h2>
        <form onSubmit={handleSubmit}>
          <div className={style.lineItems}>
            <div className={style.gridTable}>
              <table>
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
                <tbody>
                  {invoices.map((invoice, index) => (
                    <tr key={invoice.index}>
                      <td>{invoice.index}</td>
                      <td>
                        <input
                          type="text"
                          name="item"
                          value={invoice.item}
                          onChange={(event) => {
                            handleChange(event, index);
                            changeItem(event);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="description"
                          value={invoice.description}
                          onChange={(event) => {
                            handleChange(event, index);
                            changeDescription(event);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name="quantity"
                          value={invoice.quantity}
                          onChange={(event) => {
                            handleChange(event, index);
                            changeQuantity(event);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          className={style.currency}
                          type="number"
                          name="price"
                          min="0.00"
                          max="9999999.99"
                          value={invoice.price}
                          onChange={(event) => {
                            handleChange(event, index);
                            changePrice(event);
                          }}
                        />
                      </td>
                      <td>{invoice.total}</td>
                      <button
                        type="button"
                        className={styleb.deleteItem}
                        onClick={() => handleDeleteRow(invoice.index)}
                      >
                        <DeleteIcon size="1.25em" />
                      </button>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className={style.addItem}>
              <button
                type="button"
                className={style.addIcon}
                onClick={addInvoice}
              >
                Add Item
              </button>
            </div>
          </div>
          <div className={styles.totalContainer}>
            <div>
              <div className={styles.valueTable}>
                <div className={styles.row}>
                  <div className={styles.label}>Tax Rate (%)</div>
                  <div className={styles.value}>
                    <input
                      name="taxRate"
                      type="number"
                      step="0.01"
                      min="0.00"
                      max="9999999.99"
                      onChange={handleTaxRateChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <label>Tax rate(%): </label>
            <input
              type="number"
              name="taxRate"
              onChange={handleTaxRateChange}
            /> */}
          </div>
          {/* <div
          style={{
            marginTop: "10px",
            border: "1px solid gray",
            padding: "10px",
          }}
        >
          <div>
            <label>Subtotal: </label>
            <span>{calculateSubtotal()}</span>
          </div>
          <div>
            <label>Tax: </label>
            <span>{calculateTax()}</span>
          </div>
          <div>
            <label>Total Due: </label>
            <span>{calculateTotalDue()}</span>
          </div>
        </div> */}
          <div>
            <div className={styles.valueTable}>
              <div className={styles.row}>
                <div className={styles.label}>Subtotal</div>
                <div className={` ${styles.currency}`}>
                  {calculateSubtotal()}
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.label}>Tax </div>
                <div className={` ${styles.currency}`}>{calculateTax()}</div>
              </div>
              <div className={styles.row}>
                <div className={styles.label}>Total Due</div>
                <div className={` ${styles.currency}`}>
                  {calculateTotalDue()}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.pay}>
            <button onClick={transferValue} className={styles.payNow}>
              Add invoice
            </button>
          </div>{" "}
        </form>
      </div>
    </>
  );
};

export default DefaultInvoice;
