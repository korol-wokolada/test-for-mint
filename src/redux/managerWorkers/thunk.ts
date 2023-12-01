import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/apiSettings";
import { ResponseDataType } from "../../api/types";

export const fetchManagers = createAsyncThunk(
  "managers/fetchManagers",
  async () => {
    try {
      const response = await axiosInstance.get<ResponseDataType>("", {
        params: { __example: "management" },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
