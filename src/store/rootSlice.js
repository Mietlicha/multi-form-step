import { createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const helperInitialState = {
  price: 0,
  step: 1,
};

const dataInitialState = {
  base: '',
  graphic: '',
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
};

const rootSlice = createSlice({
  name: 'root',
  initialState: dataInitialState,
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
    dataReset: (state) => (state = dataInitialState),
  },
});

const data = rootSlice.reducer;

export const {
  chooseBase,
  chooseGraphic,
  chooseBillingInfo,
  dataReset,
} = rootSlice.actions;

const helpers = createSlice({
  name: 'help',
  initialState: helperInitialState,
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
    helperReset: (state) => (state = helperInitialState),
  },
});

const helper = helpers.reducer;

export const {
  updatePrice,
  updateStep,
  incrementStep,
  decrementStep,
  helperReset,
} = helpers.actions;

export const reducer = combineReducers({
  data,
  helper,
});
