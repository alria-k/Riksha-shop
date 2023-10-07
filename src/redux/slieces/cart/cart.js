import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingVal = state.find(
        (obj) => obj.item.text === action.payload.item.text
      );

      if (existingVal) {
        return state.map((obj) =>
          obj.item.text == action.payload.item.text && obj.quantity < 20
            ? {
                item: obj.item,
                quantity: obj.quantity + 1,
                category: obj.category,
              }
            : {
                item: obj.item,
                quantity: obj.quantity,
                category: obj.category,
              }
        );
      }

      return [...state, action.payload];
    },
    quantityChanger(state, action) {
      return state.map((obj) =>
        obj.item.text == action.payload.text
          ? {
              item: obj.item,
              quantity: action.payload.q,
              category: obj.category,
            }
          : {
              item: obj.item,
              quantity: obj.q,
              category: obj.category,
            }
      );
    },
  },
});

export const { addToCart, quantityChanger } = cartSlice.actions;

export default cartSlice.reducer;
