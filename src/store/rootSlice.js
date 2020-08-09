import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
  name: 'root',
  initialState: {
    base: '',
    graphic: '1',
    billingInfo: {
      firstName: '',
      lastName: '',
      street: '',
      building: '',
      apartment: '',
      city: '',
      zip: '',
      town: '',
      email: '',
      phoneNumber: '',
    },
  },
  reducers: {
    chooseBase: (state, action) => {
      state.base = action.payload;
    },
    chooseGraphic: (state, action) => {
      state.graphic = action.payload;
    },
    chooseBillingInfo: (state, action) => {
      state.billingInfo = action.payload;
    },
  },
});

export const reducer = rootSlice.reducer;

export const {
  chooseBase,
  chooseGraphic,
  chooseBillingInfo,
} = rootSlice.actions;
