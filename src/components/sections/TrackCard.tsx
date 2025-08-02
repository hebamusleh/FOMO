// // src/components/TrackCard.tsx
"use client";

import { Card as UICard } from "@/components/ui/card";
import { CardType } from "@/models";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Heart } from "../icons";

const FAV_KEY = "favouriteTracks";

export default function TrackCard({
  href,
  slug,
  title,
  description,
  image,
}: CardType) {
  // Favorite state based on localStorage
  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem(FAV_KEY) || "[]") as string[];
    setFavorited(favs.includes(slug));
  }, [slug]);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    const favs = new Set(
      JSON.parse(localStorage.getItem(FAV_KEY) || "[]") as string[],
    );
    if (favs.has(slug)) favs.delete(slug);
    else favs.add(slug);
    localStorage.setItem(FAV_KEY, JSON.stringify(Array.from(favs)));
    setFavorited(favs.has(slug));
  };

  const linkHref = href ?? `/${slug}`;

  return (
    <Link href={linkHref} className="m-1 block max-w-sm">
      <UICard className="flex h-full flex-col overflow-hidden rounded-xl border-none bg-white p-2 shadow-sm transition-shadow duration-200 hover:shadow-md">
        {/* Image */}
        <div className="relative h-32 w-full overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        <div className="flex flex-1 flex-col items-start justify-center p-4 text-left">
          {/* Title and heart icon row */}
          <div className="mb-2 flex w-full items-center justify-between">
            <h3 className="text-base font-semibold text-gray-900">{title}</h3>
            <button
              onClick={toggleFavorite}
              aria-label={favorited ? "Unfavorite" : "Favorite"}
              className="rounded-full bg-white p-1 transition hover:bg-gray-100">
              <Heart
                // fill={favorited}
                className={`h-5 w-5 ${
                  favorited
                    ? "text-red-500"
                    : "text-gray-400 hover:text-red-500"
                }`}
              />
            </button>
          </div>

          {/* Description */}
          <p className="mb-3 line-clamp-2 text-xs text-gray-600">
            {description}
          </p>
        </div>
      </UICard>
    </Link>
  );
}
