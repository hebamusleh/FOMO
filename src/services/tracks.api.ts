import axios from "axios";

export const getTracksAPI = async () => {
  try {
    const res = await axios.get("/api/tracks");
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
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getFavouriteTracksAPI = async (studentId: string) => {
  try {
    const res = await axios.get(`/api/favourite-tracks/${studentId}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
