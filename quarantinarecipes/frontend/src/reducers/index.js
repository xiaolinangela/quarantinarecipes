import { combineReducers } from "redux";
import recipes from "./recipes";
import { reducer as formReducer } from "redux-form";
import auth from "./auth";

export default combineReducers({
  recipes: recipes,
  form: formReducer,
  auth: auth,
});
