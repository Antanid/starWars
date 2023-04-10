import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    character: [],
    id: '',
    films: [],
    loading: false
};

const characterSlice = createSlice({
    name: "character",
    initialState,
    reducers: {
        setCharacter(state, action) {
            state.character = action.payload
        },
        setId(state, action) {
            state.id = action.payload
        },
        setFilms(state, action) {
 
                state.films = [
                    ...state.films,
                    action.payload
                ]
        },
        setDeleteFilms(state) {
            state.films = []
        },
        setCharecLoading(state, action) {
            state.loading = action.payload
        },
    }
});

export const { setCharacter, setId, setFilms, setDeleteFilms, setCharecLoading} = characterSlice.actions;
export default characterSlice.reducer;