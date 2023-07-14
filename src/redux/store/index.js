import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../slieces/categories/categorySlice";
import clickedCategoryReducer from "../slieces/currentCategory/currentCategorySlice";
import itemPickSlice from "../slieces/itemPick/itemPickSlice";

export const mainStore = configureStore({
  reducer: {
    category: categoryReducer,
    clickedCategory: clickedCategoryReducer,
    item: itemPickSlice,
  },
});
