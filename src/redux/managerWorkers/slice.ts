import { createSlice } from "@reduxjs/toolkit";
import { ResponseDataType } from "../../api/types";

const managerWorkersSlice = createSlice({
  name: "managers",
  initialState: {
    workers: { items: [] } as ResponseDataType,
    status: "idle", // idle, pending, fulfilled, rejected
    error: null as string | null,
  },
  reducers: {
    setManagersWorkersData: (state, action) => {
      state.workers = action.payload;
      state.status = "fulfilled";
      state.error = null;
    },
    setManagersWorkersErrors: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default managerWorkersSlice.reducer;
export const { setManagersWorkersData, setManagersWorkersErrors } =
  managerWorkersSlice.actions;
