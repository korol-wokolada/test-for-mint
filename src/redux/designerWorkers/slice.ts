import { createSlice } from "@reduxjs/toolkit";
import { fetchDesigners } from "./thunk";
import { ResponseDataType } from "../../api/types";

const designerWorkersSlice = createSlice({
  name: "designers",
  initialState: {
    workers: { items: [] } as ResponseDataType,
    status: "idle", // idle, pending, fulfilled, rejected
    error: undefined as string | undefined,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDesigners.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchDesigners.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.workers = action.payload;
      })
      .addCase(fetchDesigners.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export default designerWorkersSlice.reducer;
export const {} = designerWorkersSlice.actions;
