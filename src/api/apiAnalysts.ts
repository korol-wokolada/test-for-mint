import { axiosInstance } from "./apiSettings";
import { ResponseDataType } from "./types";

export async function fetchAnalysts() {
  try {
    const response = await axiosInstance.get<ResponseDataType>("", {
      params: { __example: "analytics" },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
