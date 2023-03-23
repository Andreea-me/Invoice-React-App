import React, { useState } from "react";

function Form(props) {
  const [formData, setFormData] = useState({
    index: "",
    description: "",
    quantity: "",
    price: "",
    total: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onSubmit(formData);
    setFormData({
      index: "",
      description: "",
      quantity: "",
      price: "",
      total: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Index:
        <input
          type="text"
          name="index"
          value={formData.index}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Quantity:
        <input
          type="text"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
        />
      </label>
      <label>
        Price:
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </label>
      <label>
        Total:
        <input
          type="text"
          name="total"
          value={formData.total}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
