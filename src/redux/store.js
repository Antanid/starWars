import { configureStore } from "@reduxjs/toolkit";
import peopleSlice from './peopleSlice';    
import characterSlice from './characterSlice';
import favoriteSlice from './favoriteSlice';
import searchSlice from './searchSlice'

export const store = configureStore({
    reducer: {
        peopleSlice,
        characterSlice,
        favoriteSlice,
        searchSlice
    }
})
