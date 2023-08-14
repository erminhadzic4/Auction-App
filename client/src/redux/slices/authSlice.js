import { createSlice } from "@reduxjs/toolkit";

const isAuthFromStorage = () => {
  const isAuth = localStorage.getItem("isAuth");
  return isAuth && JSON.parse(isAuth) === true;
};

const initialState = {
  isAuth: isAuthFromStorage(),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticateUser: (state) => {
      state.isAuth = true;
    },
    unauthenticateUser: (state) => {
      state.isAuth = false;
    },
  },
});

export const { authenticateUser, unauthenticateUser } = authSlice.actions;

export default authSlice.reducer;
