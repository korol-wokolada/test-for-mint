import { createSlice } from "@reduxjs/toolkit";
import { ResponseDataType } from "../../api/types";

const allWorkersSlice = createSlice({
  name: "allWorkers",
  initialState: {
    workers: { items: [] } as ResponseDataType,
    status: "idle", // idle, pending, fulfilled, rejected
    error: null as string | null,
  },
  reducers: {
    setWorkersData: (state, action) => {
      state.workers = action.payload;
      state.status = "fulfilled";
      state.error = null;
    },
    setWorkersError: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default allWorkersSlice.reducer;
export const { setWorkersData, setWorkersError } = allWorkersSlice.actions;
export type allWorkersType = typeof allWorkersSlice.getInitialState;
