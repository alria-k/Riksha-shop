import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      console.log([action.payload, ...state]);
      state = [action.payload, ...state];
      console.log(state);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
