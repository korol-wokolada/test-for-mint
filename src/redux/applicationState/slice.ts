import { createSlice } from "@reduxjs/toolkit";

const applicationSlice = createSlice({
  name: "application",
  initialState: {
    sortType: "alphabetical",
    findWorkersValue: "",
  },
  reducers: {
    setSortType: (state, action) => {
      state.sortType = action.payload;
    },
    setFindWorkersValue: (state, action) => {
      state.findWorkersValue = action.payload;
    },
  },
});

export default applicationSlice.reducer;
export const { setSortType, setFindWorkersValue } = applicationSlice.actions;
