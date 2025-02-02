import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./auth/authSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export default store;
