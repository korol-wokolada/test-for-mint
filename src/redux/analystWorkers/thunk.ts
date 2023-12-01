import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/apiSettings";
import { ResponseDataType } from "../../api/types";

export const fetchAnalysts = createAsyncThunk(
  "analysts/fetchAnalysts",
  async () => {
    try {
      const response = await axiosInstance.get<ResponseDataType>("", {
        params: { __example: "analytics" },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
