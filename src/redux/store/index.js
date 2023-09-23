import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../slieces/categories/categorySlice";
import clickedCategoryReducer from "../slieces/currentCategory/currentCategorySlice";
import itemPickSlice from "../slieces/itemPick/itemPickSlice";
import cartReducer from "../slieces/cart/cart";

export const mainStore = configureStore({
  reducer: {
    category: categoryReducer,
    clickedCategory: clickedCategoryReducer,
    item: itemPickSlice,
    cart: cartReducer,
  },
});
