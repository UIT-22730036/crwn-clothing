import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openCart, setCartTotal } from "../../redux/cart/cartAction";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

import "./CartDropDown.scss";
const CartDropDown = () => {
  const { cart } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cart.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button
        onClick={() => {
          navigate("/shop/checkout");
          dispatch(openCart());
        }}
      >
        CHECKOUT
      </Button>
    </div>
  );
};

export default CartDropDown;
