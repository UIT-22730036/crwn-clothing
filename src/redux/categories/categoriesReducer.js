import { CATEGORIES_ACTION_TYPES } from "./categoriesActionTypes";

const {
  FETCH_CATEGORIES_MAP_FAILED,
  FETCH_CATEGORIES_MAP_SUCCESS,
  FETCH_CATEGORIES_MAP_START,
} = CATEGORIES_ACTION_TYPES;

const initState = {
  categoriesMap: {},
  isLoading: false,
  error: null,
};

export const categoriesReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FETCH_CATEGORIES_MAP_START:
      return { ...state, isLoading: true };
    case FETCH_CATEGORIES_MAP_SUCCESS:
      return { ...state, isLoading: false, categoriesMap: payload };
    case FETCH_CATEGORIES_MAP_FAILED:
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
};
