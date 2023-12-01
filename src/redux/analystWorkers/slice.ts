import { createSlice } from "@reduxjs/toolkit";
import { fetchAnalysts } from "./thunk";
import { ResponseDataType } from "../../api/types";

const analystsWorkersSlice = createSlice({
  name: "analysts",
  initialState: {
    workers: { items: [] } as ResponseDataType,
    status: "idle", // idle, pending, fulfilled, rejected
    error: undefined as string | undefined,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnalysts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchAnalysts.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.workers = action.payload;
      })
      .addCase(fetchAnalysts.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export default analystsWorkersSlice.reducer;
export const {} = analystsWorkersSlice.actions;
