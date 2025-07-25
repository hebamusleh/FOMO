// src/app/[slug]/page.tsx

import { Tab } from "@/components/sections";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  //   const article: ArticleData | undefined = articles.find(
  //     (a) => a.slug === slug
  //   );
  //   if (!article) {
  //     notFound();
  //   }

  return (
    <>
      <Tab />

      <article className="container mx-auto max-w-4xl flex-grow px-4 py-8">
        {/* Title */}
        <header className="mb-8 text-center">
          <h1 className="mb-4 text-3xl font-bold">{/* {article.title} */}</h1>
          <p className="text-gray-600">{/* {article.description} */}</p>
        </header>

        {/* Full-width main image */}
        <div className="mb-8 w-full">
          {/* <Image
            src={article.image}
            alt={article.title}
            width={1200}
            height={600}
            className="w-full h-auto rounded-lg object-cover"
            priority
          /> */}
        </div>

        {/* Introduction */}
        <section className="prose prose-lg mx-auto mb-8">
          {/* <p>{article.intro}</p> */}
        </section>

        {/* Sections */}
        <section className="prose prose-lg mx-auto space-y-12">
          {/* {article.sections.map((sec, idx) => (
            <div key={idx}>
              <h2>{sec.title}</h2>
              {sec.paragraphs.map((para, pidx) => (
                <p key={pidx}>{para}</p>
              ))}
              {idx === Math.floor(article.sections.length / 2) && (
                <div className="my-6">
                  <Image
                    src={article.secondImage}
                    alt={`${article.title} - image`}
                    width={1000}
                    height={500}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
              )}
            </div>
          ))} */}
        </section>

        {/* Resources */}
        {/* {article.resources && article.resources.length > 0 && (
          <section className="mt-12 mx-auto max-w-2xl">
            <h2 className="text-2xl font-semibold mb-4">
              Resources
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {article.resources.map((res, ridx) => (
                <li key={ridx}>
                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {res.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )} */}
      </article>
    </>
  );
}
