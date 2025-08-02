import { QUERIES } from "@/enum";
import {
  getFavouriteTracksAPI,
  getTrackCategoryAPI,
  getTrackDetailsAPI,
  getTracksAPI,
} from "@/services";

import { useQuery } from "@tanstack/react-query";

export const useGetTracks = () => {
  return useQuery({
    queryKey: [QUERIES.TRACKS],
    queryFn: getTracksAPI,
  });
};
export const useGetTrackDetails = (trackId: string) => {
  return useQuery({
    queryKey: [QUERIES.TRACKS, trackId],
    queryFn: () => getTrackDetailsAPI(trackId),
    enabled: !!trackId,
  });
};
export const useGetTrackCategories = () => {
  return useQuery({
    queryKey: [QUERIES.TRACK_CATEGORIES],
    queryFn: getTrackCategoryAPI,
  });
};
export const useGetFavouriteTracks = (studentId: string) => {
  return useQuery({
    queryKey: [QUERIES.FAVOURITE_TRACKS, studentId],
    queryFn: () => getFavouriteTracksAPI(studentId),
    enabled: !!studentId,
  });
};
