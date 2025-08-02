// src/app/tracks/[slug]/page.tsx
"use client";
import { useGetTrackDetails } from "@/hooks/services-hooks";
import Image from "next/image";
import Link from "next/link";

export default function TrackDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const { data: track, isLoading } = useGetTrackDetails(slug);

  console.log("Track details data:", track);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div className="container mx-auto mb-4 flex items-center px-4 py-8 pl-6 text-sm text-gray-500">
        <Link href="/home" className="text-gray-600 hover:text-gray-900">
          Home
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link href="/tracks" className="text-gray-600 hover:text-gray-900">
          Tracks
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="font-medium text-gray-900">{track?.trackName}</span>
      </div>

      <article className="mx-auto max-w-4xl px-4 py-12">
        {/* Breadcrumb */}

        {/* Title */}
        <section className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold">{track?.trackName}</h1>
          <p className="text-gray-600">{track?.trackDescription}</p>
        </section>

        {/* Image */}
        <div className="mb-8 w-full">
          <Image
            src={track?.trackImage?.url}
            alt={track?.trackName}
            width={1200}
            height={600}
            className="h-auto w-full rounded-lg object-cover"
            priority
          />
        </div>

        {/* Details */}
        <section className="prose prose-lg mx-auto space-y-6">
          <p>
            In the <strong>{track?.trackName}</strong> track, you will learn the
            essential skills and tools to get started hands‑on.
          </p>
          <h2>What You Will Learn</h2>
          <ul className="list-inside list-disc">
            <li>Introduction to {track.title}</li>
            <li>Key tools and techniques</li>
            <li>Hands‑on projects to deepen your experience</li>
            <li>
              Tips for building your portfolio and pushing your project to
              GitHub
            </li>
          </ul>
          <h2>Prerequisites</h2>
          <p>{track?.paragraph}</p>
        </section>

        {/* articles  */}
        <section>
          {track?.articles?.length > 0 && (
            <div>
              {track.articles.map((article: any) => (
                <div key={article.id} className="mb-4">
                  <h3 className="text-xl font-semibold">{article.title}</h3>
                  <p>{article.paragraphs}</p>
                  <div>
                    mentor info
                    <div>
                      {article.mentorId.fullName}
                      {/* {article.mentorId.profilPhoto} */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* resources  */}
        <section>
          {track.resources.map((resource: any) => (
            <div>
              {resource.link}
              {resource.linkName}
            </div>
          ))}
        </section>
      </article>
    </>
  );
}
