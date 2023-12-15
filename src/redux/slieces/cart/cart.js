import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      if (state.find((obj) => obj.item.text === action.payload.item.text)) {
        return state.map((obj) =>
          obj.item.text == action.payload.item.text && obj.quantity < 20
            ? {
                ...obj,
                quantity: obj.quantity + 1,
              }
            : {
                ...obj,
              }
        );
      }
      return [...state, action.payload];
    },
    sizeChanger(state, action) {
      return state.map((obj) =>
        obj.item.text == action.payload.text
          ? {
              ...obj,
              extraPrice: action.payload.p,
            }
          : {
              ...obj,
            }
      );
    },
    quantityChanger(state, action) {
      return state.map((obj) =>
        obj.item.text == action.payload.text
          ? {
              ...obj,
              quantity: action.payload.q,
            }
          : {
              ...obj,
            }
      );
    },
    deleteFromCart(state, action) {
      return state.filter((obj) => obj.item.text != action.payload);
    },
  },
});

export const { addToCart, quantityChanger, deleteFromCart, sizeChanger } =
  cartSlice.actions;

export default cartSlice.reducer;
