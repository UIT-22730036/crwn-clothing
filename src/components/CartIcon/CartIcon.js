import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as ShoppingBag } from "../../assets/logos/shopping-bag.svg";
import { openCart } from "../../redux/cart/cartAction";

import "./CartIcon.scss";
const CartIcon = () => {
  const dispatch = useDispatch();
  const { itemsNumber } = useSelector((state) => state.cartReducer);
  const openCartHandler = () => {
    dispatch(openCart());
  };
  return (
    <div className="cart-icon-container" onClick={openCartHandler}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">{itemsNumber}</span>
    </div>
  );
};

export default CartIcon;
