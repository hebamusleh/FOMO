// src/app/track/TrackList.tsx
"use client";

import TrackCard from "@/components/sections/TrackCard";
import { IMAGE_URL } from "@/services/api";

interface TrackListProps {
  initialTracks: any[];
}

export default function TrackList({ initialTracks }: TrackListProps) {
  return (
    <div className="flex flex-col">
      {initialTracks.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {initialTracks.map((track) => (
            <TrackCard
              key={track.id}
              href={`/tracks/${track.id}`}
              slug={track.id}
              title={track.trackName}
              description={track.trackDescription}
              image={`${IMAGE_URL}${track.trackImage?.url}`}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No results found</p>
      )}
    </div>
  );
}
