import { QUERIES } from "@/enum";
import { getSectionDetailsAPI, getSectionsAPI } from "@/services";

import { useQuery } from "@tanstack/react-query";

export const useGetSections = () => {
  return useQuery({
    queryKey: [QUERIES.SECTIONS],
    queryFn: getSectionsAPI,
  });
};
export const useGetSectionDetails = (sectionId: string) => {
  return useQuery({
    queryKey: [QUERIES.SECTIONS, sectionId],
    queryFn: () => getSectionDetailsAPI(sectionId),
    enabled: !!sectionId,
  });
};
