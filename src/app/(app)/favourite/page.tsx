"use client";

import FavouriteCard from "@/components/sections/FavouriteCard";
import { useGetTracks } from "@/hooks/services-hooks";
import { useEffect, useState } from "react";

const FAV_KEY = "favouriteTracks";

export default function FavouritePage() {
  const [favs, setFavs] = useState<string[]>([]);

  useEffect(() => {
    const stored = JSON.parse(
      localStorage.getItem(FAV_KEY) || "[]",
    ) as string[];
    setFavs(stored);
  }, []);

  const handleRemove = (slug: string) => {
    const next = favs.filter((s) => s !== slug);
    setFavs(next);
    localStorage.setItem(FAV_KEY, JSON.stringify(next));
  };
  const { data, isLoading } = useGetTracks();

  const favTracks: any[] = data?.docs.filter((t: any) => favs.includes(t.id));

  if (isLoading) return <div>loading...</div>;
  if (favTracks.length === 0) {
    return (
      <div className="py-12 text-center text-gray-600">
        No favourite items yet.
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-7xl flex-grow space-y-4 px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold">All Favourite</h1>
      {favTracks.map((track) => (
        <FavouriteCard key={track.id} {...track}  onRemove={handleRemove} />
      ))}
    </div>
  );
}
