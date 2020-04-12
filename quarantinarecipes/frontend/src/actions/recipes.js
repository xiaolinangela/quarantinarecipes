import {
  GET_RECIPES,
  CREATE_RECIPE,
  GET_RECIPE,
  EDIT_RECIPE,
  DELETE_RECIPE,
} from "./types";
import axios from "axios";
import regeneratorRuntime from "regenerator-runtime";
import history from "../history";

export const getRecipes = () => (dispatch, getState) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .get("http://127.0.0.1:8000/api/recipes/", config)
    .then((response) => {
      dispatch({
        type: GET_RECIPES,
        payload: response.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getRecipe = (id) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .get(`http://127.0.0.1:8000/api/recipes/${id}/`, config)
    .then((response) => {
      dispatch({
        type: GET_RECIPE,
        payload: response.data,
      });
    })
    .catch((err) => console.log(err));
};

export const editRecipe = (id, formValues) => (dispatch) => {
  console.log(formValues);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .patch(`http://127.0.0.1:8000/api/recipes/${id}/`, formValues)
    .then((response) => {
      dispatch({
        type: EDIT_RECIPE,
        payload: response.data,
      });
    })
    .catch((err) => console.log(err));
};

export const createRecipe = ({ name, ingredients, instructions, image }) => (
  dispatch
) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("ingredients", ingredients);
  formData.append("instructions", instructions);
  formData.append("image", image);

  axios
    .post("http://127.0.0.1:8000/api/recipes/", formData)
    .then((response) => {
      dispatch({ type: CREATE_RECIPE, payload: response.data });
    })
    .catch((err) => console.log(err));
};

export const deleteRecipe = (id) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  await axios.delete(`http://127.0.0.1:8000/api/recipes/${id}/`, config);
  dispatch({ type: DELETE_RECIPE, payload: id });
  history.push("/");
};
