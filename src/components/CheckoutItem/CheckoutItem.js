import React from "react";
import { useDispatch } from "react-redux";
import {
  removeItemFromCart,
  setItemToCart,
  subtractItemFromCart,
} from "../../redux/cart/cartAction";

import "./CheckoutItem.scss";
const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const clearItemHandler = (item) => {
    dispatch(subtractItemFromCart(item));
  };

  const addItemHandler = (item) => {
    dispatch(setItemToCart(item));
  };

  const removeItemHandler = (item) => {
    dispatch(removeItemFromCart(item));
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => {
            clearItemHandler(cartItem);
          }}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          onClick={() => {
            addItemHandler(cartItem);
          }}
        >
          &#10095;
        </div>
      </span>
      <span className="price"> {price}</span>
      <div
        className="remove-button"
        onClick={() => {
          removeItemHandler(cartItem);
        }}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
