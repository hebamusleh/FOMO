import { ICreatePost } from "@/models/posts.model";
import axios from "axios";

export const getPostsAPI = async () => {
  try {
    const res = await axios.get("/posts");
    console.log("posts response : ", res.data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getPostDetailsAPI = async (postId: string) => {
  try {
    const res = await axios.get(`/posts/${postId}`);
    console.log("post details response : ", res.data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const createPostAPI = async (body: ICreatePost) => {
  try {
    const res = await axios.post("/posts", body);
    console.log("create post response : ", res.data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const updatePostAPI = async (postId: string, body: ICreatePost) => {
  try {
    const res = await axios.put(`/posts/${postId}`, body);
    console.log("update post response : ", res.data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const deletePostAPI = async (postId: string) => {
  try {
    const res = await axios.delete(`/posts/${postId}`);
    console.log("delete post response : ", res.data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getSavedPostsAPI = async (studentId: string) => {
  try {
    const res = await axios.get(`/saved-posts/${studentId}`);
    console.log("saved posts response : ", res.data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
