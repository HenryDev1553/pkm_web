import { createSlice } from "@reduxjs/toolkit";

const initialState2 = {
    quantity: 0,
    item_array:[]
}

const NewItemSlice = createSlice({
    name: "newItemSlice1213",
    initialState: initialState2,
    reducers: {
        newItem(state, action) {
            if (state.item_array.length === 0) {
                state.item_array.push(action.payload)
                state.quantity++
            } else {
                const index = state.item_array.findIndex((item) =>
                    item.name === action.payload.name,
                )
                if (index < 0) {
                    state.item_array.push(action.payload)
                    state.quantity++

                } else {
                    const temp_arr = [...state.item_array]
                    temp_arr[index].sl++
                    state.item_array = [...temp_arr]
                    state.quantity++
                }
            }
            
            
        }
    }
})
export default NewItemSlice.reducer
export const {newItem} = NewItemSlice.actions

