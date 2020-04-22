import axios from "axios";
import { REGISTER_SUCCESS, LOGIN_SUCCESS } from "./types";
import history from "../history";

export const register = (formValues) => async (dispatch) => {
  const { username, password, email } = formValues;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ username, password, email });
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/auth/register",
      body,
      config
    );
    dispatch({
      type: REGISTER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = ({ username, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ username, password });
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/auth/login",
      body,
      config
    );
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
  history.push("/");
};

// setup tokenconfig
export const tokenConfig = (getState) => {
  const token = getState().auth.token;

  //Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  return config;
};
