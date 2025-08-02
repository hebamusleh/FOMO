// src/app/tracks/page.tsx
"use client";

// (no SSG/SSP prerender)
export const dynamic = "force-dynamic";

import { Tab } from "@/components/sections";
import { useGetSections, useGetTracks } from "@/hooks/services-hooks";
import { IMAGE_URL } from "@/services/api";
import Image from "next/image";
import TrackList from "./TrackList";

export default function TrackPage() {
  const { data, isLoading } = useGetSections();
  const track = data?.docs.find((section: any) => section.name === "Tracks");
  const { data: tracksData, isLoading: isTracksLoading } = useGetTracks();

  console.log("track data", tracksData?.docs);

  if (isLoading || isTracksLoading) return <div>Loading...</div>;

  return (
    <>
      {/* Breadcrumb */}
      <Tab article={{ title: "Tracks" }} />

      <main className="container mx-auto flex min-h-screen flex-col px-4 py-8">
        {/* Banner */}
        <section className="w-full">
          <div className="w-full overflow-hidden">
            <Image
              src={`${IMAGE_URL}${track?.coverImage?.url}`}
              alt="Tech Tracks Banner"
              width={1400}
              height={500}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          <div className="mt-6 px-4 text-center">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
              Explore The Future Of Tech With Our Specialized Tracks!
            </h1>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-600 sm:text-base">
              Stay ahead in the tech industry with our expertly curated learning
              tracks, designed to equip you with cutting-edge skills. Whether
              you're passionate about software development, AI, cybersecurity,
              cloud computing, or UX/UI design, we have the perfect track for
              you!
            </p>
          </div>
        </section>

        {/* TrackList */}
        <section className="flex-grow bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <TrackList
              initialTracks={tracksData?.docs}
            />
          </div>
        </section>
      </main>
    </>
  );
}
