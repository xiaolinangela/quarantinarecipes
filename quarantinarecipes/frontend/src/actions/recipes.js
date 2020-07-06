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
import { tokenConfig } from "./auth";
import { createMessage } from "./messages";

export const getRecipes = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(
      "localhost:8000/api/recipes/",
      tokenConfig(getState)
    );
    dispatch({
      type: GET_RECIPES,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getRecipe = (id) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.get(`localhost/api/recipes/${id}/`, config);
    dispatch({
      type: GET_RECIPE,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const editRecipe = (id, formValues) => (dispatch, getState) => {
  const { name, ingredients, instructions, image } = formValues;
  const formData = new FormData();
  formData.append("name", name);
  formData.append("ingredients", ingredients);
  formData.append("instructions", instructions);
  formData.append("image", image);
  const token = getState().auth.token;
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };
  try {
    const response = axios.patch(
      `localhost/api/recipes/${id}/`,
      formData,
      config
    );
    dispatch({
      type: EDIT_RECIPE,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
  history.push("/");
};

export const createRecipe = ({
  name,
  ingredients,
  instructions,
  image,
}) => async (dispatch, getState) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("ingredients", ingredients);
  formData.append("instructions", instructions);
  formData.append("image", image);
  const token = getState().auth.token;
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };
  try {
    const response = axios.post(
      "localhost:8000/api/recipes/",
      formData,
      config
    );
    dispatch(createMessage({ addRecipe: "Recipe Added" }));
    dispatch({ type: CREATE_RECIPE, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteRecipe = (id) => async (dispatch, getState) => {
  await axios.delete(`loclhost:8000/api/recipes/${id}/`, tokenConfig(getState));

  dispatch({ type: DELETE_RECIPE, payload: id });
  dispatch(createMessage({ deleteRecipe: "Recipe Deleted" }));
  //history.push("/");
};
