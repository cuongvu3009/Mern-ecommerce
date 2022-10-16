import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProducts: (state, action) => {
      state.quantity -= 1;
      state.products.pop(action.payload);
      state.total -= action.payload.price * action.payload.quantity;
    },
    clearCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProducts, removeProducts, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
