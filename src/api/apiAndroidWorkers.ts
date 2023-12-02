import { axiosInstance } from "./apiSettings";
import { ResponseDataType } from "./types";

export async function fetchAndroidWorkers() {
  try {
    const response = await axiosInstance.get<ResponseDataType>("", {
      params: { __example: "android" },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
