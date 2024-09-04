import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";

export const appStore = configureStore({
  // This reducer is basically responsible for modify the app store. This reducer is the combination of all small reducer from different slices.
  //  Each slices have it's own reducers.
  reducer: {
    cart: cartReducer,
  },
});
