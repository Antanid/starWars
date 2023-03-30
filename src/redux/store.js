import { configureStore } from "@reduxjs/toolkit";
import peopleSlice from './peopleSlice';    
import characterSlice from './characterSlice'

export const store = configureStore({
    reducer: {
        peopleSlice,
        characterSlice
    }
})
