import { combineReducers } from "redux";
import recipes from "./recipes";
import { reducer as formReducer } from "redux-form";
import auth from "./auth";
import messages from "./messages";
import errors from "./errors";

export default combineReducers({
  recipes: recipes,
  form: formReducer,
  auth: auth,
  errors: errors,
  messages: messages,
});
