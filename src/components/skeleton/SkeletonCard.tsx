"use client";

import { Card as UICard } from "@/components/ui/card";

export default function SkeletonCard() {
  return (
    <div className="m-1 block max-w-sm">
      <UICard className="flex h-full flex-col overflow-hidden rounded-xl border-none bg-white p-2 shadow-sm">
        <div className="relative h-32 w-full animate-pulse bg-gray-200 rounded-md" />

        <div className="flex flex-1 flex-col items-center justify-center p-4 text-center space-y-3">
          <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
          <div className="h-3 w-full animate-pulse rounded bg-gray-200" />
          <div className="h-3 w-5/6 animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-20 animate-pulse rounded bg-gray-300" />
        </div>
      </UICard>
    </div>
  );
}
