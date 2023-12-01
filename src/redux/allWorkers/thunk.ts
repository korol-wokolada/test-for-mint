import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/apiSettings";
import { ResponseDataType } from "../../api/types";

export const fetchAllWorkers = createAsyncThunk(
  "allWorkers/fetchAllWorkers",
  async () => {
    try {
      const response = await axiosInstance.get<ResponseDataType>("", {
        params: { __example: "all" },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
