import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingVal = state.items.find(
        (subject) => subject.item.id === action.payload.item.id
      );

      if (existingVal) {
        const increasedItem = state.items.map(
          (subject) =>
            subject.item.id == action.payload.item.id && {
              ...subject.item,
              quantity: subject.quantity + 1,
            }
        );

        {
          state.items = increasedItem;
        }
      } else {
        state.items = [action.payload, ...state.items];
      }

      console.log(state.items);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
