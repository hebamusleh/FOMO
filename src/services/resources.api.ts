import axios from "axios";

export const getResourcesAPI = async () => {
  try {
    const res = await axios.get("/resources");
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const addResourceAPI = async (body: any) => {
  try {
    const res = await axios.post("/resources", body);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
