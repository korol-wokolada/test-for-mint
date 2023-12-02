import { createSlice } from "@reduxjs/toolkit";
import { ResponseDataType } from "../../api/types";

const designerWorkersSlice = createSlice({
  name: "designers",
  initialState: {
    workers: { items: [] } as ResponseDataType,
    status: "idle", // idle, pending, fulfilled, rejected
    error: null as string | null,
  },
  reducers: {
    setDesignersWorkersData: (state, action) => {
      state.workers = action.payload;
      state.status = "fulfilled";
      state.error = null;
    },
    setDesignersWorkersError: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default designerWorkersSlice.reducer;
export const { setDesignersWorkersData, setDesignersWorkersError } =
  designerWorkersSlice.actions;
