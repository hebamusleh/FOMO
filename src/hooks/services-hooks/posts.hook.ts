import { QUERIES } from "@/enum";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  createPostAPI,
  deletePostAPI,
  getPostDetailsAPI,
  getPostsAPI,
  updatePostAPI,
} from "../../services";

export const useGetPosts = () => {
  return useQuery({
    queryKey: [QUERIES.POSTS],
    queryFn: getPostsAPI,
  });
};

export const useGetPostDetails = (postId: string, enabled = true) => {
  return useQuery({
    queryKey: [QUERIES.POSTS, postId],
    queryFn: () => getPostDetailsAPI(postId),
    enabled: !!postId && enabled,
  });
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPostAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERIES.POSTS] });
    },
  });
};

export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, body }: { postId: string; body: any }) =>
      updatePostAPI(postId, body),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: [QUERIES.POSTS, variables.postId],
      });
      queryClient.invalidateQueries({ queryKey: [QUERIES.POSTS] });
    },
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postId: string) => deletePostAPI(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERIES.POSTS] });
    },
  });
};

export const useSavedPosts = () => {
  return useQuery({
    queryKey: [QUERIES.SAVED_POSTS, "saved"],
    queryFn: () => getPostsAPI(),
  });
};
