import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quantity: 0,
    item_array: []
}

const NewItemSlice = createSlice({
    name: "newItemSlice",
    initialState: initialState,
    reducers: {
        newItem(state, action) {
            
        }
    }
})
export default NewItemSlice.reducer
export const {newItem} = NewItemSlice.actions

