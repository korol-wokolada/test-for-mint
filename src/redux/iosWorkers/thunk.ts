import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/apiSettings";
import { ResponseDataType } from "../../api/types";

export const fetchIosWorkers = createAsyncThunk(
  "iosWorkers/fetchIosWorkers",
  async () => {
    try {
      const response = await axiosInstance.get<ResponseDataType>("", {
        params: { __example: "ios" },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
