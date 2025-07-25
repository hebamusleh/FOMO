import axios from "axios";

export const getSectionsAPI = async () => {
  try {
    const res = await axios.get("/sections");
    console.log("sections response : ", res.data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getSectionDetailsAPI = async (sectionId: string) => {
  try {
    const res = await axios.get(`/sections/${sectionId}`);
    console.log("section details response : ", res.data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
