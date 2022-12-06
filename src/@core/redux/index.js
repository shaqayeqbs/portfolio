import { configureStore, combineReducers } from "@reduxjs/toolkit";

import cartSlice from "./cart-slice";

const reducers = combineReducers({
  cart: cartSlice.reducer,
});

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  reducer: reducers,
});
export default store;
