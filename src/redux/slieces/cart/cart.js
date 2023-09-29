import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingVal = state.find(
        (subject) => subject.item.text === action.payload.item.text
      );

      if (existingVal) {
        return state.map((subject) =>
          subject.item.text == action.payload.item.text
            ? {
                item: subject.item,
                quantity: subject.quantity + 1,
              }
            : {
                item: subject.item,
                quantity: subject.quantity,
              }
        );
      }

      return [...state, action.payload];
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
