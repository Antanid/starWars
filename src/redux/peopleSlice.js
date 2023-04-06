import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  people: [],
  page: 1,
  loading: false
};

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    setPeople(state, action) {
      state.people = action.payload
    },
    nextPage(state, action) {
      state.page = action.payload
    },
    prevPage(state, action) {
      state.page = action.payload
    },
    setLoading(state, action) {
      state.loading = action.payload
    }
  },
});

export const { setPeople, nextPage, prevPage, setLoading } = peopleSlice.actions;
export default peopleSlice.reducer;