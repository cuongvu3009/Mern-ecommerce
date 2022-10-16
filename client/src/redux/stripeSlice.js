import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  amount: 0,
  amount_captured: 0,
  created: null,
  currency: 'usd',
  userId: null,
  receipt_url: null,
  status: '',
};

const stripeSlice = createSlice({
  name: 'stripe',
  initialState,
  reducers: {
    stripeData: (state, action) => {
      state.amount = action.payload.amount;
      state.amount_captured = action.payload.amount_captured;
      state.currency = action.payload.currency;
      state.userId = action.payload.userId;
      state.receipt_url = action.payload.receipt_url;
      state.status = action.payload.status;
    },
  },
});

export const { stripeData } = stripeSlice.actions;
export default stripeSlice.reducer;
