import { combineReducers } from "redux";
import recipes from "./recipes";
import { reducer as formReducer } from "redux-form";
import auth from "./auth";
import messages from "./messages";

export default combineReducers({
  recipes: recipes,
  form: formReducer,
  auth: auth,
  messages: messages,
});
