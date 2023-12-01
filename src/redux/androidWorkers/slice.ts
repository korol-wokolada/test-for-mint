import { createSlice } from "@reduxjs/toolkit";
import { fetchAndroidWorkers } from "./thunk";
import { ResponseDataType } from "../../api/types";

const androidWorkersSlice = createSlice({
  name: "androidWorkers",
  initialState: {
    workers: { items: [] } as ResponseDataType,
    status: "idle", // idle, pending, fulfilled, rejected
    error: undefined as string | undefined,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAndroidWorkers.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchAndroidWorkers.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.workers = action.payload;
      })
      .addCase(fetchAndroidWorkers.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export default androidWorkersSlice.reducer;
export const {} = androidWorkersSlice.actions;
