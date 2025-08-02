import ClientArticle from "./ClientArticle";

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = params as { slug: string }; 
  return <ClientArticle slug={slug} />;
}
