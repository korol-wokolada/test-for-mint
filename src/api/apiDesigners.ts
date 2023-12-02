import { axiosInstance } from "./apiSettings";
import { ResponseDataType } from "./types";

export async function fetchDesigners() {
  try {
    const response = await axiosInstance.get<ResponseDataType>("", {
      params: { __example: "design" },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}