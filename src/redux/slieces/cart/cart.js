import { createSlice, current } from "@reduxjs/toolkit";

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
            obj.item.id === action.payload.item.id
        )
      ) {
        return state.map((obj) => {
          return obj.item.id == action.payload.item.id && obj.quantity < 20
            ? {
                ...obj,
                quantity: obj.quantity + 1,
              }
            : {
                ...obj,
              };
        });
      }
      return [...state, action.payload];
    },
    sizeChanger(state, action) {
      return state.map((obj) =>
        obj.item.id == action.payload.id
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
        obj.item.id == action.payload.id
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
      return state.filter((obj) => obj.item.id != action.payload);
    },
  },
});

export const { addToCart, quantityChanger, deleteFromCart, sizeChanger } =
  cartSlice.actions;

export default cartSlice.reducer;
