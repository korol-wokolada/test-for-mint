import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/apiSettings";
import { ResponseDataType } from "../../api/types";

export const fetchDesigners = createAsyncThunk(
  "designers/fetchDesigners",
  async () => {
    try {
      const response = await axiosInstance.get<ResponseDataType>("", {
        params: { __example: "design" },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
