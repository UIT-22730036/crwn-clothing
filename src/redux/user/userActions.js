import { USER_ACTION_TYPES } from "./userActionTypes";

const { SET_USER_INFO, REMOVE_USER_INFO } = USER_ACTION_TYPES;

export const setUserInfo = (values) => {
  return {
    type: SET_USER_INFO,
    payload: values,
  };
};

export const removeUserInfo = () => {
  return {
    type: REMOVE_USER_INFO,
  };
};
