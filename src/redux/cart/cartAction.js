import { CART_ACTION_TYPES } from "./cartActionTypes";

const {
  SET_ITEM_TO_CART,
  OPEN_CART,
  SET_CART_TOTAL,
  SUBTRACT_ITEM_FROM_CART,
  REMOVE_ITEM_FROM_CART,
} = CART_ACTION_TYPES;

export const setItemToCart = (values) => {
  return {
    type: SET_ITEM_TO_CART,
    payload: { ...values, quantity: values.quantity || 1 },
  };
};

export const openCart = () => {
  return { type: OPEN_CART };
};

export const setCartTotal = (total) => {
  return { type: SET_CART_TOTAL, payload: total };
};

export const subtractItemFromCart = (item) => {
  return { type: SUBTRACT_ITEM_FROM_CART, payload: item };
};

export const removeItemFromCart = (item) => {
  return { type: REMOVE_ITEM_FROM_CART, payload: item };
};
