import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : [],
  isLogged: localStorage.getItem("isLogged") === "true" ? true : false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.user = action.payload;
      state.isLogged = true;

      localStorage.setItem("user", JSON.stringify(state.user));
      localStorage.setItem("isLogged", JSON.stringify(state.isLogged));
    },
    logoutUser: (state) => {
      state.user = [];
      state.isLogged = false;

      localStorage.removeItem("user");
      localStorage.removeItem("isLogged");
    },
  },
});

export const { userLogin, logoutUser } = authSlice.actions;
export default authSlice.reducer;
