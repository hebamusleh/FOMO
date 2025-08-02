import MentorDetailsClient from "./MentorDetailsClient";

export default async function MentorProfile({
  params,
}: {
  params: { slug: string };
}) {
  return <MentorDetailsClient slug={params.slug} />;
}
