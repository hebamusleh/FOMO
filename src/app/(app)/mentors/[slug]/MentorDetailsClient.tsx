"use client";

import { Tab } from "@/components/sections";
import { Button } from "@/components/ui/button";
import { useGetMentorDetails } from "@/hooks/services-hooks";
import { IMAGE_URL } from "@/services/api";
import Image from "next/image";

const MentorDetailsClient = ({ slug }: { slug: string }) => {
  const { data, isLoading } = useGetMentorDetails(slug);
  if (isLoading) return <div>Loading...</div>;
  return (
    <main className="container mx-auto p-8">
      <Tab title={data?.fullName} />

      <div className="mt-6 flex flex-col-reverse items-start gap-8 lg:flex-row">
        {/* Left: Info */}
        <div className="flex-1 space-y-8 p-8">
          <div className="space-y-4">
            <div className="leading-relaxed">
              <span className="font-bold">Name:</span>{" "}
              <span className="text-gray-700">{data?.fullName}</span>
            </div>
            <div className="leading-relaxed">
              <span className="font-bold">Major:</span>{" "}
              <span className="text-gray-700">{data?.major}</span>
            </div>
            <div className="leading-relaxed">
              {data?.welcome && (
                <>
                  <span className="font-bold">Welcome Statement:</span>{" "}
                  <span className="text-gray-700">{data?.welcome}</span>
                </>
              )}
            </div>
            <div className="leading-relaxed">
              <span className="font-bold">Skills:</span>{" "}
              <span className="text-gray-700">{data?.skills}</span>
            </div>
            <div className="leading-relaxed">
              <span className="font-bold">Years of Experience:</span>{" "}
              <span className="text-gray-700">{data?.yearOfExpe} years</span>
            </div>
            <div className="leading-relaxed">
              <span className="font-bold">Bio:</span>{" "}
              <span className="text-gray-700">{data?.bio}</span>
            </div>
          </div>

          {/* Action Buttons using shadcn/ui */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button className="w-48 rounded-lg bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700">
              Book session
            </Button>
            {data?.linkedin && (
              <Button
                variant="outline"
                className="w-48 rounded-lg border border-blue-600 px-6 py-2 text-blue-600 transition hover:bg-blue-50"
                asChild>
                <a
                  href={data?.linkedin}
                  target="_blank"
                  rel="noopener noreferrer">
                  LinkedIn
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Right: Portrait */}
        <div className="w-full flex-shrink-0 lg:w-[300px]">
          <Image
            src={`${IMAGE_URL}${data?.profilPhoto?.url}`}
            alt={data.fullName}
            width={300}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </main>
  );
};

export default MentorDetailsClient;
