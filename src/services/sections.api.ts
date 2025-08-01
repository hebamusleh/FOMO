import axios from "axios";

export const getSectionsAPI = async () => {
  try {
    const res = await axios.get("/api/sections");
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getSectionDetailsAPI = async (sectionId: string) => {
  try {
    const res = await axios.get(`/api/sections/${sectionId}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
