import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  paymentId: '',
  address: {},
};

const stripeSlice = createSlice({
  name: 'stripe',
  initialState,
  reducers: {
    stripeData: (state, action) => {
      state.paymentId = action.payload.id;
      state.address = action.payload.billing_details.address;
    },
  },
});

export const { stripeData } = stripeSlice.actions;
export default stripeSlice.reducer;
