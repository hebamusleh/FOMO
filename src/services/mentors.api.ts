import axios from "axios";

export const getMentorsAPI = async () => {
  try {
    const res = await axios.get("/api/mentors");
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getMentorDetailsAPI = async (mentorId: string) => {
  try {
    const res = await axios.get(`/api/mentors/${mentorId}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
