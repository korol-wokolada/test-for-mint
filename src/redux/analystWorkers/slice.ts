import { createSlice } from "@reduxjs/toolkit";

import { ResponseDataType } from "../../api/types";

const analystsWorkersSlice = createSlice({
  name: "analysts",
  initialState: {
    workers: { items: [] } as ResponseDataType,
    status: "idle", // idle, pending, fulfilled, rejected
    error: null as string | null,
  },
  reducers: {
    setAnalystsWorkersData: (state, action) => {
      state.workers = action.payload;
      state.status = "fulfilled";
      state.error = null;
    },
    setAnalystsWorkersError: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default analystsWorkersSlice.reducer;
export const { setAnalystsWorkersData, setAnalystsWorkersError } =
  analystsWorkersSlice.actions;
