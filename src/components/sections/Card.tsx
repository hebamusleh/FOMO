"use client";

import { ArrowRight } from "@/components/icons";
import { Card as UICard } from "@/components/ui/card";
import { CardType } from "@/models";
import { IMAGE_URL } from "@/services/api";
import Image from "next/image";
import Link from "next/link";

export default function Card({
  slug,
  title,
  description,
  image,
  href,
}: CardType) {
  const linkHref = href ?? `/${slug}`;
  return (
    <Link href={linkHref} className="m-1 block max-w-sm">
      <UICard className="flex h-full flex-col overflow-hidden rounded-xl border-none bg-white p-2 shadow-sm transition-shadow duration-200 hover:shadow-md">
        <div className="relative h-32 w-full">
          <Image
            src={`${IMAGE_URL}${image}`}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center p-4 text-center">
          <h3 className="mb-1 text-base font-semibold text-gray-900">
            {title}
          </h3>
          <p className="mb-3 line-clamp-2 text-xs text-gray-600">
            {description}
          </p>
          <button className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline">
            <span>Explore</span>
            <ArrowRight className="ml-1 h-3 w-3" />
          </button>
        </div>
      </UICard>
    </Link>
  );
}
