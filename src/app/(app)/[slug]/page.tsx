// src/app/[slug]/page.tsx
import { Tab } from "@/components/sections";
import ClientArticle from "./ClientArticle";

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <>
      <ClientArticle slug={params.slug} />
    </>
  );
}
