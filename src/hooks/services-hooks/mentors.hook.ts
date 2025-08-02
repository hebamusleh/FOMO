import { QUERIES } from "@/enum";

import { getMentorDetailsAPI, getMentorsAPI } from "@/services";

import { useQuery } from "@tanstack/react-query";

export const useGetMentors = () => {
  return useQuery({
    queryKey: [QUERIES.MENTORS],
    queryFn: getMentorsAPI,
  });
};

export const useGetMentorDetails = (mentorId: string) => {
  return useQuery({
    queryKey: [QUERIES.MENTORS, mentorId],
    queryFn: () => getMentorDetailsAPI(mentorId),
    enabled: !!mentorId,
  });
};
