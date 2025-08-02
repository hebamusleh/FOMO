// src/components/FavouriteCard.tsx
"use client";

import Bag from "@/components/icons/bag";
import { IMAGE_URL } from "@/services/api";
import Image from "next/image";

export default function FavouriteCard({
  slug,
  trackName,
  trackDescription,
  trackImage,
  onRemove,
}: any) {
  return (
    <div className="relative flex items-center space-x-4 rounded-2xl bg-gray-50 p-4 shadow-sm">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200">
        {trackImage ? (
          <Image
            src={`${IMAGE_URL}${trackImage?.url}`}
            alt={trackName}
            width={96}
            height={96}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-gray-200" />
        )}
      </div>

      <div className="flex-1">
        <h3 className="text-base font-semibold text-gray-900">{trackName}</h3>
        <p className="line-clamp-2 text-sm text-gray-600">{trackDescription}</p>
      </div>

      <button
        onClick={() => onRemove(slug)}
        aria-label="Remove from favourites"
        className="rounded-full p-2 text-gray-400 transition hover:text-red-500">
        <Bag className="h-5 w-5" />
      </button>
    </div>
  );
}
