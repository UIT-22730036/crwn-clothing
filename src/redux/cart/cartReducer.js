import { CART_ACTION_TYPES } from "./cartActionTypes";

const initState = {
  cart: [],
  itemCount: 0,
  cartTotal: 0,
  itemsNumber: 0,
  isCartOpen: false,
};

const {
  SET_ITEM_TO_CART,
  OPEN_CART,
  SET_CART_TOTAL,
  SUBTRACT_ITEM_FROM_CART,
  REMOVE_ITEM_FROM_CART,
} = CART_ACTION_TYPES;

export const cartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_ITEM_TO_CART: {
      const existingCartItem = state.cart.find((item) => {
        return item.id === payload.id;
      });
      const existingCartItemIndex = state.cart.findIndex((item) => {
        return item.id === payload.id;
      });
      if (existingCartItem) {
        return {
          ...state,
          cart: [
            ...state.cart.slice(0, existingCartItemIndex),
            { ...existingCartItem, quantity: existingCartItem.quantity + 1 },
            ...state.cart.slice(existingCartItemIndex + 1),
          ],
          itemsNumber: state.itemsNumber + 1,
        };
      }
      return {
        ...state,
        cart: [...state.cart, payload],
        itemsNumber: state.itemsNumber + 1,
      };
    }

    case SUBTRACT_ITEM_FROM_CART: {
      const existingCartItem = state.cart.find((item) => {
        return item.id === payload.id;
      });
      const existingCartItemIndex = state.cart.findIndex((item) => {
        return item.id === payload.id;
      });
      if (existingCartItem) {
        if (existingCartItem.quantity > 1) {
          return {
            ...state,
            cart: [
              ...state.cart.slice(0, existingCartItemIndex),
              { ...existingCartItem, quantity: existingCartItem.quantity - 1 },
              ...state.cart.slice(existingCartItemIndex + 1),
            ],
            itemsNumber: state.itemsNumber - 1,
          };
        } else {
          return {
            ...state,
            cart: [
              ...state.cart.slice(0, existingCartItemIndex),

              ...state.cart.slice(existingCartItemIndex + 1),
            ],
            itemsNumber: state.itemsNumber - 1,
          };
        }
      }
    }

    case REMOVE_ITEM_FROM_CART: {
      const existingCartItem = state.cart.find((item) => {
        return item.id === payload.id;
      });
      const existingCartItemIndex = state.cart.findIndex((item) => {
        return item.id === payload.id;
      });
      return {
        ...state,
        cart: [
          ...state.cart.slice(0, existingCartItemIndex),

          ...state.cart.slice(existingCartItemIndex + 1),
        ],
        itemsNumber: state.itemsNumber - existingCartItem.quantity,
      };
    }

    case OPEN_CART: {
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    }
    case SET_CART_TOTAL:
      return { ...state, cartTotal: payload };
    default:
      return state;
  }
};
