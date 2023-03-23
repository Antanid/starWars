import { configureStore } from "@reduxjs/toolkit";
import peopleSlice from './peopleSlice';

export const store = configureStore({
    reducer: {
        peopleSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
