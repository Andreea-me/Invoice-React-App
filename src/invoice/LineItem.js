import React, { useState } from "react";
import PropTypes from "prop-types";
import { MdCancel as DeleteIcon } from "react-icons/md";
import styles from "./LineItem.module.scss";

function LineItem() {
  // const [item, setItem] = useState("");
  // const [description, setDescription] = useState("");
  // const [qty, setQty] = useState("");
  // const [price, setPrice] = useState("");

  // const changeItem = (event) => {
  //   setItem(event.target.value);
  // };

  // const changeDescription = (event) => {
  //   setDescription(event.target.value);
  // };

  // const changeQty = (event) => {
  //   setQty(event.target.value);
  // };

  // const changePrice = (event) => {
  //   setPrice(event.target.value);
  // };

    return (
      <div className={styles.lineItem}>
        {/* <div>{index + 1}</div> */}
        <div>
          {/* <input name="name" type="text" value={item} onChange={changeItem} /> */}
        </div>
        <div>
          <input
            name="description"
            type="text"
            // value={description}
            // onChange={changeDescription}
          />
        </div>
        <div>
          <input
            name="quantity"
            type="number"
            step="1"
            // value={qty}
            // onChange={changeQty}
            onFocus={this.props.focusHandler}
          />
        </div>
        <div className={styles.currency}>
          <input
            name="price"
            type="number"
            step="0.01"
            min="0.00"
            max="9999999.99"
            // value={price}
            // onChange={changePrice}
            onFocus={this.props.focusHandler}
          />
        </div>
        <div className={styles.currency}>
          {/* {this.props.currencyFormatter(qty * price)} */}
        </div>
        <div>
          <button
            type="button"
            className={styles.deleteItem}
            onClick={this.props.deleteHandler}
          >
            <DeleteIcon size="1.25em" />
          </button>
        </div>
      </div>
    );
  };


export default LineItem;

LineItem.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
