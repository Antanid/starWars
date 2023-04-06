import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    character: [],
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setCharSearch(state, action) {
            state.character = action.payload
        },
    }
});

export const { setCharSearch } = searchSlice.actions;
export default searchSlice.reducer;