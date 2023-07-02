import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../slieces/categories/categorySlice";
import clickedCategoryReducer from "../slieces/currentCategory/currentCategorySlice";

export const mainStore = configureStore({
  reducer: {
    category: categoryReducer,
    clickedCategory: clickedCategoryReducer,
  },
});
