import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../slieces/categories/categorySlice";
import clickedCategoryReducer from "../slieces/currentCategory/currentCategorySlice";
import cartReducer from "../slieces/cart/cart";
import summaryReducer from "../slieces/summaryPrice/summaryPrice";

export const mainStore = configureStore({
  reducer: {
    category: categoryReducer,
    clickedCategory: clickedCategoryReducer,
    cart: cartReducer,
    summary: summaryReducer,
  },
});
