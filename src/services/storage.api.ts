import axios from "axios";

export const uploadMedia = async (formData: FormData) => {
  try {
    const res = await axios.post("/api/media", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  } catch (e) {
    console.error("Upload failed:", e);
    throw e;
  }
};
