import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../slieces/categories/categorySlice";
import clickedCategoryReducer from "../slieces/currentCategory/currentCategorySlice";
import itemPickReducer from "../slieces/itemPick/itemPickSlice";
import cartReducer from "../slieces/cart/cart";
import summaryReducer from "../slieces/summaryPrice/summaryPrice";

export const mainStore = configureStore({
  reducer: {
    category: categoryReducer,
    clickedCategory: clickedCategoryReducer,
    item: itemPickReducer,
    cart: cartReducer,
    summary: summaryReducer,
  },
});
