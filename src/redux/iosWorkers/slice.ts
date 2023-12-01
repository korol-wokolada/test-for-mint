import { createSlice } from "@reduxjs/toolkit";
import { fetchIosWorkers } from "./thunk";
import { ResponseDataType } from "../../api/types";

const iosWorkersSlice = createSlice({
  name: "iosWorkers",
  initialState: {
    workers: { items: [] } as ResponseDataType,
    status: "idle", // idle, pending, fulfilled, rejected
    error: undefined as undefined | string,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIosWorkers.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchIosWorkers.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.workers = action.payload;
      })
      .addCase(fetchIosWorkers.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export default iosWorkersSlice.reducer;
export const {} = iosWorkersSlice.actions;
