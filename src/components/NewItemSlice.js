import { createSlice } from "@reduxjs/toolkit";
import { Tree } from "antd";

const initialState = {
  quantity: 0,
  item_array: [],
  loading: false,
};

const NewItemSlice = createSlice({
  name: "newItemSlice",
  initialState: initialState,
  reducers: {
    newItem(state, action) {
      state.loading = true;
      if (state.item_array.length === 0) {
        state.item_array.push(action.payload);
        state.quantity++;
        state.loading = !state.loading;
      } else {
        const index = state.item_array.findIndex(
          (item) => item.name === action.payload.name
        );
        if (index < 0) {
          state.item_array.push(action.payload);
          state.quantity++;
          state.loading = !state.loading;
        } else {
          const temp_arr = [...state.card_array];
          state.card_array = [...temp_arr];
          state.quantity++;
          state.loading = !state.loading;
        }
      }
      // state.loading = !state.loading ;
    },
    remove(state, action) {
      if (state.item_array.length === 0) {
        return;
      } else {
        const index = state.item_array.findIndex(
          (item) => item.name === action.payload.name
        );
        if (index !== -1) {
          const findItem = state.card_array.find(
            (item) => item.name === action.payload.name
          );
        } else {
          const tmp = state.item_array.filter(
            (item) => item.name !== action.payload.id
          );
          state.item_array = [...tmp];
          state.quantity--;
        }
      }
    },
  },
});
export default NewItemSlice.reducer;
export const { newItem, remove } = NewItemSlice.actions;
