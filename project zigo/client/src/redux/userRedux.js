import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    createUserStart: (state) => {
      state.isFetching = true;
    },
    createUserSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    createUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    clearUserStart: (state) => {
      state.currentUser = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, createUserStart, createUserSuccess, createUserFailure, clearUserStart } = userSlice.actions;
export default userSlice.reducer;
