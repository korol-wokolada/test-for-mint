import { createSlice } from "@reduxjs/toolkit";
import { ResponseDataType } from "../../api/types";
import { fetchManagers } from "./thunk";

const managerWorkersSlice = createSlice({
  name: "managers",
  initialState: {
    workers: { items: [] } as ResponseDataType,
    status: "idle", // idle, pending, fulfilled, rejected
    error: undefined as string | undefined,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchManagers.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchManagers.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.workers = action.payload;
      })
      .addCase(fetchManagers.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export default managerWorkersSlice.reducer;
export const {} = managerWorkersSlice.actions;
