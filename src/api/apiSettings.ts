import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users",
  headers: {
    Accept: "application/json, application/xml",
  },
});
