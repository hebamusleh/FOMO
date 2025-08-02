"use client";

import { Hero } from "@/components/sections";
import Card from "@/components/sections/Card";
import { SkeletonCard } from "@/components/skeleton";
import { useGetSections } from "@/hooks/services-hooks";
import { ISection } from "@/models";

export default function HomePage() {
  const { data, isLoading } = useGetSections();
  return (
    <>
      <Hero />
      <section className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="mb-6 text-2xl font-semibold">
          Explore Learning Paths And Tech Resources
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {isLoading
            ? [...Array(6)].map((_, index) => <SkeletonCard key={index} />)
            : data?.docs.map((c: ISection) => (
                <Card
                  key={c.id}
                  title={c.name}
                  description={c.description}
                  image={c.coverImage?.url!}
                  slug={c.id}
                  href={c.name === "Tracks" ? "/tracks" : `/${c.id}`}
                />
              ))}
        </div>
      </section>
    </>
  );
}
