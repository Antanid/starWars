import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorite: [],
};

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        setAddFavorite(state, action) {
            state.favorite = [...state.favorite, action.payload];
        }
    }
});

export const { setAddFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;