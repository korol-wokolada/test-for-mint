import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/apiSettings";
import { ResponseDataType } from "../../api/types";

export const fetchAndroidWorkers = createAsyncThunk(
  "androidWorkers/fetchAndroidWorkers",
  async () => {
    try {
      const response = await axiosInstance.get<ResponseDataType>("", {
        params: { __example: "android" },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
