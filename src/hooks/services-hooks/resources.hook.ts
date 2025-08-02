import { QUERIES } from "@/enum";

import { addResourceAPI, getResourcesAPI } from "@/services";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetResources = () => {
  return useQuery({
    queryKey: [QUERIES.RESOURCES],
    queryFn: getResourcesAPI,
  });
};

export const useAddResource = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: any) => addResourceAPI(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERIES.RESOURCES] });
    },
  });
};
