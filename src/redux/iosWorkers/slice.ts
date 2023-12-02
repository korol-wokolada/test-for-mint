import { createSlice } from "@reduxjs/toolkit";

import { ResponseDataType } from "../../api/types";

const iosWorkersSlice = createSlice({
  name: "iosWorkers",
  initialState: {
    workers: { items: [] } as ResponseDataType,
    status: "idle", // idle, pending, fulfilled, rejected
    error: null as null | string,
  },
  reducers: {
    setIosWorkersData: (state, action) => {
      state.workers = action.payload;
      state.status = "fulfilled";
      state.error = null;
    },
    setIosWorkersError: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default iosWorkersSlice.reducer;
export const { setIosWorkersData, setIosWorkersError } =
  iosWorkersSlice.actions;
