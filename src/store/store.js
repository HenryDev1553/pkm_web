import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../components/cartSlice'
export const store = configureStore({
  reducer: {cartSlice},
})