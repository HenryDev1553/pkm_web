import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    quantity: 0,
    card_array: [],
}

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: initialState,
    reducers: {
        addItem(state, action) {
            if (state.card_array.length === 0) {
                state.card_array.push(action.payload)
                state.quantity++
            } else {
                const index = state.card_array.findIndex((item) =>
                    item.name === action.payload.name,
                )
                if (index < 0) {
                    state.card_array.push(action.payload)
                    state.quantity++

                } else {
                    const temp_arr = [...state.card_array]
                    temp_arr[index].sl++
                    state.card_array = [...temp_arr]
                    state.quantity++
                }
            }
          
            
        },
        
        removeItem(state, action) {
            if (state.card_array.length === 0) {
                return
            } else {
                const index = state.card_array.findIndex((item) =>
                    item.id === action.payload.id,
                    
                ) 
                if (index !== -1) {
                    
                    const findItem = state.card_array.find((item) => item.id === action.payload.id)
                
                    if (findItem) {
                        if (findItem.sl > 1) {
                            const temp_arr = [...state.card_array]
                            temp_arr[index].sl--
                            state.card_array = [...temp_arr]
                            state.quantity--
                        } else {
                            const tmp = state.card_array.filter((item) => item.id !== action.payload.id)
                            state.card_array = [...tmp]
                            state.quantity--

                        }
                    }
                } 
              

            }
        },

    }
})

export default cartSlice.reducer
export const {addItem,removeItem} = cartSlice.actions
