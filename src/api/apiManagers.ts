import { axiosInstance } from "./apiSettings";
import { ResponseDataType } from "./types";

export async function fetchManagers() {
  try {
    const response = await axiosInstance.get<ResponseDataType>("", {
      params: { __example: "management" },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
