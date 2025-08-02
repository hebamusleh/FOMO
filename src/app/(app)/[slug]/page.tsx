// src/app/[slug]/page.tsx
import ClientArticle from "./ClientArticle";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <>
      <ClientArticle slug={slug} />
    </>
  );
}
