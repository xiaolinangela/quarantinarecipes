import _ from "lodash";
import {
  GET_RECIPES,
  CREATE_RECIPE,
  GET_RECIPE,
  EDIT_RECIPE,
  DELETE_RECIPE,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case CREATE_RECIPE:
      return { ...state, [action.payload.id]: action.payload };
    case GET_RECIPE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_RECIPE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_RECIPE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
