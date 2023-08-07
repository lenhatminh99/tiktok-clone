import axios from "axios";

const httpRequests = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, options = {}) => {
  const response = await httpRequests.get(path, options);
  return response.data;
};
export default httpRequests;
