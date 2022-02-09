import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      console.log(action.payload);
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProductFromCart: (state, action) => {
      console.log(action.payload);
      state.quantity -= 1;
      state.products = state.products.filter((item) => item._id !== action.payload._id);;
      state.total += state.total - action.payload.price;
    },
  },
});

export const { addProduct, removeProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;
