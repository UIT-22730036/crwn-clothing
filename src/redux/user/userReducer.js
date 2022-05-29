import { USER_ACTION_TYPES } from "./userActionTypes";

const initState = {
  userInfo: null,
};

const { SET_USER_INFO, REMOVE_USER_INFO } = USER_ACTION_TYPES;

export const userReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_USER_INFO:
      return { ...state, userInfo: payload };
    case REMOVE_USER_INFO:
      return { ...state, userInfo: null };
    default:
      return state;
  }
};
