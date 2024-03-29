import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      if (
        state.find(
          (obj) =>
            obj.extraPrice == action.payload.extraPrice &&
            obj.item.id == action.payload.item.id
        )
      ) {
        return state.map((obj) =>
          obj.extraPrice == action.payload.extraPrice &&
          obj.item.id == action.payload.item.id &&
          obj.quantity < 20
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
      return state.map((obj, i) =>
        i == action.payload.itemIndex && obj.item.id == action.payload.id
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
      return state.map((obj, i) =>
        i == action.payload.itemIndex && obj.item.id == action.payload.id
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
      return state.filter(
        (obj, i) =>
          !(i == action.payload.itemIndex && obj.item.id == action.payload.id)
      );
    },
  },
});

export const { addToCart, quantityChanger, deleteFromCart, sizeChanger } =
  cartSlice.actions;

export default cartSlice.reducer;
