import { GET_RECIPES, CREATE_RECIPE } from "../actions/types";

const initialState = {
  recipes: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };
    case CREATE_RECIPE:
      return {
        ...state,
        recipes: [...state.leads, action.payload],
      };
    default:
      return state;
  }
};
