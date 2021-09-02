import axios from "axios";

export const putStatus = async (data) => {
  const response = await axios.put("/report", data);
  const updatedAt = await response.data.updatedAt;

  return updatedAt;
};
