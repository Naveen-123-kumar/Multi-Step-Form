import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  data1: {},
  data2: {},
  page: 0,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    previous: (state) => void (state.page = state.page - 1),
    next: (state) => void (state.page = state.page + 1),
    formData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { previous, next, formData } = formSlice.actions;
export default formSlice.reducer;
