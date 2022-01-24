import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { createUserStart, createUserSuccess, createUserFailure, clearUserStart } from "./userRedux";
import { publicRequest } from "../requestMethods";
import {
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "./productRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const createUser = async (dispatch, user) => {
  dispatch(createUserStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(createUserSuccess(res.data));
  } catch (err) {
    dispatch(createUserFailure());
  }
};

export const clearUser = async (dispatch, user) => {
  dispatch(clearUserStart());
};

export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await publicRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};

