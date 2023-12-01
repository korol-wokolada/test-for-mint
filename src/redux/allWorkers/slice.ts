import { createSlice } from "@reduxjs/toolkit";
import { fetchAllWorkers } from "./thunk";
import { ResponseDataType } from "../../api/types";

const allWorkersSlice = createSlice({
  name: "allWorkers",
  initialState: {
    workers: { items: [] } as ResponseDataType,
    status: "idle", // idle, pending, fulfilled, rejected
    error: undefined as string | undefined,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllWorkers.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchAllWorkers.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.workers = action.payload;
      })
      .addCase(fetchAllWorkers.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export default allWorkersSlice.reducer;
export const {} = allWorkersSlice.actions;
export type allWorkersType = typeof allWorkersSlice.getInitialState;
