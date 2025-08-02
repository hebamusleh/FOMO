"use client";
import { Card as UICard } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function MentorCard({
  slug,
  name,
  description,
  image,
}: {
  slug: string;
  name: string;
  description: string;
  image: string;
}) {
  return (
    <Link
      href={`/mentors/${slug}`}
      className="mx-auto block w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
      <UICard className="flex aspect-[3/2] w-full flex-col items-center rounded-2xl border-none bg-white p-4 text-center shadow-md transition-shadow hover:shadow-lg sm:p-6">
        {/* Avatar */}
        <div className="mt-4">
          <div className="mx-auto h-24 w-24 overflow-hidden rounded-full sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-44 lg:w-44">
            <Image
              src={image}
              alt={name}
              width={176}
              height={176}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Name & Description */}
        <div className="mt-6 flex-1 space-y-2 px-3 sm:px-4">
          <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">
            {name}
          </h3>
          <p className="line-clamp-2 text-sm text-gray-600 sm:text-base">
            {description}
          </p>
        </div>

        {/* View Profile */}
        <span className="mb-4 mt-auto text-sm font-medium text-blue-600 hover:underline sm:text-base">
          View Profile
        </span>
      </UICard>
    </Link>
  );
}
