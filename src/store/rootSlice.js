import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
  name: 'root',
  initialState: {
    base: '',
    graphics: '',
    billingInfo: {},
  },
  reducers: {
    chooseBase: (state, action) => {
      state.base = action.payload;
    },
    chooseGraphics: (state, action) => {
      state.graphics = action.payload;
    },
    chooseBillingInfo: (state, action) => {
      state.chooseBillingInfo = action.payload;
    },
  },
});

export const reducer = rootSlice.reducer;

export const {
  chooseBase,
  chooseGraphics,
  chooseBillingInfo,
} = rootSlice.actions;
