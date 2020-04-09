import { combineReducers } from "redux";
import recipes from "./recipes";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  recipes: recipes,
  form: formReducer,
});
