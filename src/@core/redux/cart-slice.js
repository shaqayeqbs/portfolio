import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      console.log(action);
      const item = action.payload.item;
      const updatedTotalAmount = state.totalAmount + +item.price * +item.amount;

      const existingCartItemIndex = state.items.findIndex(
        (myitem) => myitem.id === item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: +existingCartItem.amount + item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        console.log(item);
        updatedItems = state.items.concat(action.payload.item);
      }
      state.items = updatedItems;
      console.log({ updatedItems });
      state.totalAmount = updatedTotalAmount;
    },
    removeItem(state, action) {
      console.log(action);
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      const existingItem = state.items[existingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.price;
      let updatedItems;
      if (existingItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.payload);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
      state.items = updatedItems;
      state.totalAmount = updatedTotalAmount;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
