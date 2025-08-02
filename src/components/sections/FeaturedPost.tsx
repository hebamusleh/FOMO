"use client";

import SaveIcon from "@/components/icons/save-2";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export function FeaturedPost({ post }: any) {
  const [saved, setSaved] = React.useState(false);

  React.useEffect(() => {
    const isSaved = Boolean(localStorage.getItem(`saved_${post?.id}`));
    setSaved(isSaved);
  }, [post?.id]);

  const handleSave = () => {
    if (saved) {
      localStorage.removeItem(`saved_${post?.id}`);
    } else {
      localStorage.setItem(
        `saved_${post.id}`,
        JSON.stringify({
          id: post.id,
          authorName: post.mentorId.fullName,
          authorRole: post.mentorId.role,
          authorAvatarUrl: post.mentorId.profilPhoto.url,
          title: post.post,
          excerpt: post.post.slice(0, 100) + "...",
        }),
      );
    }
    setSaved(!saved);
  };

  return (
    <div className="relative mb-16 rounded-2xl bg-gray-50 p-6 shadow-sm">
      <Button
        variant="ghost"
        size="icon"
        onClick={handleSave}
        aria-label={saved ? "Unsave excerpt" : "Save excerpt"}
        className="absolute right-4 top-4 p-0 focus:ring-0">
        <SaveIcon
          //   fillOpacity={saved}
          className={`h-5 w-5 ${saved ? "text-black" : "text-gray-500 hover:text-gray-700"}`}
        />
      </Button>

      <div className="mb-4 flex items-center space-x-4">
        <div className="relative h-10 w-10 overflow-hidden rounded-full">
          <Image
            src={post?.mentorId.profilPhoto.url}
            alt={post?.mentorId.fullName}
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-900">
            {post?.mentorId.fullName}
          </span>
          <span className="text-xs text-gray-500">{post?.mentorId.role}</span>
        </div>
      </div>

      <h2 className="mb-2 text-lg font-semibold text-gray-900">
        {post?.postCategory}
      </h2>
      <p className="mb-4 text-sm text-gray-700">
        {post?.post.slice(0, 100) + "..."}
      </p>

      <Link
        href={`/mentors-blog/${post.id}`}
        className="text-sm font-medium text-blue-600 hover:underline">
        read more
      </Link>
    </div>
  );
}
