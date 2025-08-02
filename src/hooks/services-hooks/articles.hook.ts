import { QUERIES } from "@/enum";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  createArticleAPI,
  deleteArticleAPI,
  getArticleDetailsAPI,
  getArticlesAPI,
  updateArticleAPI,
} from "../../services";

export const useGetArticles = () => {
  return useQuery({
    queryKey: [QUERIES.ARTICLES],
    queryFn: getArticlesAPI,
  });
};

export const useGetArticleDetails = (articleId: string, enabled = true) => {
  return useQuery({
    queryKey: [QUERIES.ARTICLES, articleId],
    queryFn: () => getArticleDetailsAPI(articleId),
    enabled: !!articleId && enabled,
  });
};

export const useCreateArticle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createArticleAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERIES.ARTICLES] });
    },
  });
};

export const useUpdateArticle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ articleId, body }: { articleId: string; body: any }) =>
      updateArticleAPI(articleId, body),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: [QUERIES.ARTICLES, variables.articleId],
      });
      queryClient.invalidateQueries({ queryKey: [QUERIES.ARTICLES] });
    },
  });
};

export const useDeleteArticle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (articleId: string) => deleteArticleAPI(articleId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERIES.ARTICLES] });
    },
  });
};
