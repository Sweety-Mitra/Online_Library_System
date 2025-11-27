import { createSlice } from "@reduxjs/toolkit";
import initialBooks from "../data/dummyBooks";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    list: initialBooks, // array of book objects
  },
  reducers: {
    addBook: (state, action) => {
      // add new book to beginning
      state.list.unshift(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;