import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import PaymentForm from "../../components/PaymentForm/PaymentForm";
import { setCartTotal } from "../../redux/cart/cartAction";

import "./Checkout.scss";
const Checkout = () => {
  const { cart, cartTotal } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const newCartTotal = cart.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    dispatch(setCartTotal(newCartTotal));
  }, [cart]);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cart.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${cartTotal}</div>
      <PaymentForm />
    </div>
  );
};

export default Checkout;
