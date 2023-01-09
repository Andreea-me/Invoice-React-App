import React, { useState } from "react";

function InvoiceTable(props) {
  const [item, setItem] = useState("");
  const [description, setDescription] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");

  const changeItem = (event) => {
    setItem(event.target.value);
  };

  const changeDescription = (event) => {
    setDescription(event.target.value);
  };

  const changeQty = (event) => {
    setQty(event.target.value);
  };

  const changePrice = (event) => {
    setPrice(event.target.value);
  };

  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      item,
      description,
      qty,
      price,
    };
    props.func(val);
    clearState();
  };

  const clearState = () => {
    setItem("");
    setDescription("");
  };

  return (
    <div>
      <label>Item</label>
      <input type="text" value={item} onChange={changeItem} />
      <label>Description</label>
      <input type="text" value={description} onChange={changeDescription} />
      <label>Qty</label>
      <input type="number" value={qty} onChange={changeQty} />
      <label>Price</label>
      <input type="number" value={price} onChange={changePrice} />
      <button onClick={transferValue}> Click Me</button>
    </div>
  );
}

export default InvoiceTable;
