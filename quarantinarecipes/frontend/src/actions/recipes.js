import { GET_RECIPES, CREATE_RECIPE } from "./types";
import axios from "axios";
import regeneratorRuntime from "regenerator-runtime";

export const getRecipes = () => (dispatch, getState) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .get("api/recipes/", config)
    .then((response) => {
      dispatch({
        type: GET_RECIPES,
        payload: response.data,
      });
    })
    .catch((err) => console.log(err));
};

export const createRecipe = ({ name, ingredients, instructions, image }) => (
  dispatch
) => {
  console.log(name);
  const formData = new FormData();
  formData.append("name", name);
  formData.append("ingredients", ingredients);
  formData.append("instructions", instructions);
  formData.append("image", image);

  axios
    .post("api/recipes/", formData)
    .then((response) => {
      dispatch({ type: CREATE_RECIPE, payload: response.data });
    })
    .catch((err) => console.log(err));
};
