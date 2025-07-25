// 'use client';
import { ArrowRight } from "@/components/icons";
import Link from "next/link";

interface TabProps {
  title?: string;
  article?: { title: string };
}

export default function Tab({ title, article }: TabProps) {
  const displayTitle = title ?? article?.title ?? "";

  return (
    <div className="container mx-auto mb-4 flex items-center px-4 py-8 pl-6 text-sm text-gray-500">
      <Link href="/home" className="hover:underline">
        Home
      </Link>
      <ArrowRight className="mx-2 h-4 w-4 text-gray-400" />
      <span className="text-gray-700">{displayTitle}</span>
    </div>
  );
}
