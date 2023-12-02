import { axiosInstance } from "./apiSettings";
import { ResponseDataType } from "./types";

export async function fetchAllWorker() {
  try {
    const response = await axiosInstance.get<ResponseDataType>("", {
      params: { __example: "all" },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
