import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    setAddFavorite(state, action) {
      const findPeople = state.favorite.find((obj) => obj.name === action.payload.name);
      if (findPeople) {
        state.favorite = state.favorite.filter((obj) => obj.name !== action.payload.name);
      } else {
        state.favorite = [...state.favorite, action.payload];
      }
    },
  },
});

export const { setAddFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
