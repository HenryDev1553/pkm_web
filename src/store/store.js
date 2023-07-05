import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../components/cartSlice'
import NewItemSlice from '../components/NewItemSlice'

export const store = configureStore({
  reducer: {cartSlice,NewItemSlice},
})