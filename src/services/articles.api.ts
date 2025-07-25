import axios from "axios";

export const getArticlesAPI = async () => {
  try {
    const res = await axios.get("/articles");
    console.log("articles response : ", res.data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getArticleDetailsAPI = async (articleId: string) => {
  try {
    const res = await axios.get(`/articles/${articleId}`);
    console.log("article details response : ", res.data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const createArticleAPI = async (body: any) => {
  try {
    const res = await axios.post("/articles", body);
    console.log("create article response : ", res.data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const updateArticleAPI = async (articleId: string, body: any) => {
  try {
    const res = await axios.put(`/articles/${articleId}`, body);
    console.log("update article response : ", res.data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteArticleAPI = async (articleId: string) => {
  try {
    const res = await axios.delete(`/articles/${articleId}`);
    console.log("delete article response : ", res.data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
