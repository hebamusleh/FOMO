// mentors/page.tsx
"use client";
import MentorCard from "@/components/sections/MentorCard";
import Pagination from "@/components/sections/Pagination";
import { useGetMentors } from "@/hooks/services-hooks";
import { IMAGE_URL } from "@/services/api";
import { useSearchParams } from "next/navigation";

export default function MentorListPage() {
  const { data, isLoading } = useGetMentors();
  const params = useSearchParams();
  const page = parseInt(params.get("page") ?? "1", 10);
  const perPage = 6;
  const totalPages = Math.ceil(data?.docs.length / perPage);

  if (isLoading) return <div>Loading...</div>;
  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      {/* title  */}
      <div className="mb-8 w-full px-4 text-center">
        <h1 className="mb-4 text-2xl font-bold">
          Expert Tech Mentors – Guiding You to Success in the Digital World
        </h1>
        <p className="mx-auto line-clamp-2 max-w-3xl text-sm text-gray-600">
          Connect with top tech mentors who provide expert guidance in software
          development, AI, cybersecurity, and more. Gain industry insights,
          hands‑on advice, and career‑boosting strategies to accelerate your
          growth in the tech world.
        </p>
      </div>

      {/* cards */}
      <section className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {data?.docs.map((m: any) => (
          <MentorCard
            key={m.id}
            slug={m.id}
            name={m.fullName}
            description={m.skills}
            image={`${IMAGE_URL}${m.profilPhoto.url}`}
          />
        ))}
      </section>

      <Pagination pageNumber={page} pages={totalPages} route="/mentors" />
    </main>
  );
}
