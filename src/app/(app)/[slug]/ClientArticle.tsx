"use client";
import { Tab } from "@/components/sections";
import { useGetSectionDetails } from "@/hooks/services-hooks";
import { ICardContent } from "@/models";
import { IMAGE_URL } from "@/services/api";
import Image from "next/image";

const ClientArticle = ({ slug }: { slug: string }) => {
  const { data, isLoading } = useGetSectionDetails(slug);
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <Tab title={data?.name} />

      <div>
        <article className="container mx-auto max-w-4xl flex-grow px-4 py-8">
          {/* Title */}
          <header className="mb-8 text-center">
            <h1 className="mb-4 text-3xl font-bold"> {data?.name} </h1>
            <p className="text-gray-600"> {data?.description} </p>
          </header>

          {/* Full-width main image */}
          <div className="mb-8 w-full">
            <Image
              src={data.coverImage?.url}
              alt={data.name}
              width={1200}
              height={600}
              className="h-auto w-full rounded-lg object-cover"
              priority
            />
          </div>

          {/* Introduction */}
          <section className="prose prose-lg mx-auto mb-8">
            {/* <p>{article.intro}</p> */}
          </section>

          {/* Sections */}
          <section className="prose prose-lg mx-auto space-y-12">
            {data?.cardContent.map((content: ICardContent) => (
              <div key={content.id}>
                <h2>{content.title}</h2>
                <p>{content.paragraph}</p>
                {content.images.map((img) => (
                  <div className="my-6" key={img.id}>
                    {img.image.url && (
                      <Image
                        src={`${IMAGE_URL}${img.image.url}`}
                        alt={`${content.title} - image`}
                        width={1000}
                        height={500}
                        className="h-auto w-full rounded-lg object-cover"
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </section>

          {/* Book Recomenditions  */}
          {data?.bookRecomndation && data?.bookRecomndation?.length > 0 && (
            <section className="mx-auto mt-12 max-w-2xl">
              <h2 className="mb-4 text-2xl font-semibold">
                Book Recommendition
              </h2>
              <ul className="list-inside list-disc space-y-2">
                {data.bookRecomndation.map(
                  (res: { id: string; book: string }) => (
                    <li key={res.id}>
                      <p className="text-blue-600 hover:underline">
                        {res.book}
                      </p>
                    </li>
                  ),
                )}
              </ul>
            </section>
          )}

          {/* Resources */}
          {data?.resources && data?.resources?.length > 0 && (
            <section className="mx-auto mt-12 max-w-2xl">
              <h2 className="mb-4 text-2xl font-semibold">Resources</h2>
              <ul className="list-inside list-disc space-y-2">
                {data.resources.map(
                  (res: {
                    id: string;
                    resourceName: string;
                    resourcelinks: string;
                  }) => (
                    <li key={res.id}>
                      <a
                        href={res.resourcelinks}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline">
                        {res.resourceName}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </section>
          )}
        </article>
      </div>
    </>
  );
};

export default ClientArticle;
