import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../slieces/categorySlice";

export const mainStore = configureStore({
  reducer: {
    category: categoryReducer,
  },
});
