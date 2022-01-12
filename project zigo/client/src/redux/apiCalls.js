import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { createUserStart, createUserSuccess, createUserFailure } from "./userRedux";
import { publicRequest } from "../requestMethods";

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
