import { axiosInstance } from "__config/axios";

export const getHelloWorld = async () => {
  const response = await axiosInstance.get("/");
  return response.data;
};
