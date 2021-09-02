import axios from "axios";

export const getStatus = async () => {
  const response = await axios.get("/status");
  const status = await response.data;

  console.log("status", status);
  console.log("status.json", status.json());

  return status;
};
