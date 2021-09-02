import axios from "axios";

export const getLogHistory = async ({ serviceName }) => {
  const response = await axios.get(`/history?name=${serviceName}&limit&offset`);
  const logHistory = await response.data;

  console.log("logHistory", logHistory);
  console.log("logHistory.json", logHistory.json());

  return logHistory;
};
