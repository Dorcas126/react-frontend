/* eslint-disable */

import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './greetings/greetings';

const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
