import axios from "axios";

export const getMentorsAPI = async () => {
  try {
    const res = await axios.get("/mentors");
    console.log("mentors response : ", res.data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}

export const getMentorDetailsAPI = async (mentorId: string) => {
  try {
    const res = await axios.get(`/mentors/${mentorId}`);
    console.log("mentor details response : ", res.data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}

