import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const applicationSlice = createSlice({
  name: "application",
  initialState: {
    sortType: "alphabetical",
    findWorkersValue: "",
    isOnline: window.navigator.onLine,
    isRequestLoading: false,
  },
  reducers: {
    setSortType: (state, action: PayloadAction<string>) => {
      state.sortType = action.payload;
    },
    setFindWorkersValue: (state, action: PayloadAction<string>) => {
      state.findWorkersValue = action.payload;
    },
    setNetworkStatus: (state, action: PayloadAction<boolean>) => {
      state.isOnline = action.payload;
    },
    setRequestLoading: (state, action: PayloadAction<boolean>) => {
      state.isRequestLoading = action.payload;
    },
  },
});

export default applicationSlice.reducer;
export const {
  setSortType,
  setFindWorkersValue,
  setNetworkStatus,
  setRequestLoading,
} = applicationSlice.actions;
