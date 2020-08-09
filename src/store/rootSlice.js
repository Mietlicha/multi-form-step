import { createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

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

const data = rootSlice.reducer;

export const {
  chooseBase,
  chooseGraphic,
  chooseBillingInfo,
} = rootSlice.actions;

const helpers = createSlice({
  name: 'help',
  initialState: {
    price: '0',
    step: 1,
  },
  reducers: {
    updatePrice: (state, action) => {
      state.price = action.payload;
    },
    incrementStep: (state) => {
      state.step = state.step + 1;
    },
    decrementStep: (state) => {
      state.step = state.step - 1;
    },
  },
});

const helper = helpers.reducer;

export const {
  updatePrice,
  updateStep,
  incrementStep,
  decrementStep,
} = helpers.actions;

export const reducer = combineReducers({
  data,
  helper,
});
