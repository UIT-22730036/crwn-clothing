import { getCollectionAndDocument } from "../../utils/firebase/firebase.utils";
import { CATEGORIES_ACTION_TYPES } from "./categoriesActionTypes";

const {
  FETCH_CATEGORIES_MAP_FAILED,
  FETCH_CATEGORIES_MAP_START,
  FETCH_CATEGORIES_MAP_SUCCESS,
} = CATEGORIES_ACTION_TYPES;

export const fetchCategoriesMapStart = () => {
  return { type: FETCH_CATEGORIES_MAP_START };
};

export const fetchCategoriesMapSuccess = (values) => {
  return {
    type: FETCH_CATEGORIES_MAP_SUCCESS,
    payload: values,
  };
};

export const fetchCategoriesMapFailed = (error) => {
  return {
    type: FETCH_CATEGORIES_MAP_FAILED,
    payload: error,
  };
};

export const fetchCategoriesStartAsync = () => {
  return async (dispatch) => {
    dispatch(fetchCategoriesMapStart());
    try {
      const categoriesArray = await getCollectionAndDocument("categories");
      dispatch(fetchCategoriesMapSuccess(categoriesArray));
    } catch (error) {
      dispatch(fetchCategoriesMapFailed(error));
    }
  };
};
