import { axiosInstance } from "./apiSettings";
import { ResponseDataType } from "./types";

export async function fetchIosWorkers() {
  try {
    const response = await axiosInstance.get<ResponseDataType>("", {
      params: { __example: "ios" },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
