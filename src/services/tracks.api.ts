import axios from "axios";

export const getTracksAPI = async () => {
  try {
    const res = await axios.get("/api/tracks");
    console.log("tracks response : ", res.data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getTrackDetailsAPI = async (trackId: string) => {
  try {
    const res = await axios.get(`/api/tracks/${trackId}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getTrackCategoryAPI = async () => {
  try {
    const res = await axios.get("/api/track-categories");
    console.log("track categories response : ", res.data);
    return res.data;
  } catch (e) {
    console.log(e);
    // Handle error
  }
};

export const getFavouriteTracksAPI = async (studentId: string) => {
  try {
    const res = await axios.get(`/api/favourite-tracks/${studentId}`);
    console.log("favourite tracks response : ", res.data);
    return res.data;
  } catch (e) {
    console.log(e);
    // Handle error
  }
};
