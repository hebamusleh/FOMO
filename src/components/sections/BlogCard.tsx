// src/components/mentors/BlogCard.tsx
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export function BlogCard({ post }: any) {
  console.log("single post : ", post);
  return (
    <Card className="w-full overflow-hidden rounded-2xl border-none shadow-sm transition hover:shadow-md">
      <div className="flex flex-row">
        <div className="flex w-[110px] flex-shrink-0 flex-col items-center p-4">
          <Image
            src={post?.mentorId?.profilPhoto?.url}
            alt={post?.mentorId?.fullName}
            width={110}
            height={110}
            className="rounded-full object-cover"
          />
          <div className="mt-2 flex space-x-1">
            <span className="whitespace-nowrap text-sm font-medium text-gray-900">
              {post?.mentorId?.fullName}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-between p-4">
          <div>
            <span className="block text-lg font-semibold text-gray-900">
              {post?.postCategory}
            </span>
            <p className="mt-2 text-sm text-gray-700">{post?.post}</p>
          </div>

          {/* 'read more' link at the bottom */}
          <div className="mt-4">
            <Link
              href={`/mentors-blog/${post.id}`}
              className="text-sm font-medium text-blue-600 hover:underline">
              read more
            </Link>
          </div>
        </div>
      </div>  
    </Card>
  );
}
