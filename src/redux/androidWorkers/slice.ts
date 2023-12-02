import { createSlice } from "@reduxjs/toolkit";
import { ResponseDataType } from "../../api/types";

const androidWorkersSlice = createSlice({
  name: "androidWorkers",
  initialState: {
    workers: { items: [] } as ResponseDataType,
    status: "idle", // idle, pending, fulfilled, rejected
    error: null as string | null,
  },
  reducers: {
    setAndroidWorkersData: (state, action) => {
      state.workers = action.payload;
      state.status = "fulfilled";
      state.error = null;
    },
    setAndroidWorkersError: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default androidWorkersSlice.reducer;
export const { setAndroidWorkersData, setAndroidWorkersError } =
  androidWorkersSlice.actions;
