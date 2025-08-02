// src/components/mentors/Pagination.tsx
import ChevronLeftIcon from "@/components/icons/arrow-left";
import ChevronRightIcon from "@/components/icons/arrow-right";
import Link from "next/link";

export default function Pagination({
  pageNumber,
  pages,
  route,
}: {
  pageNumber: number;
  pages: number;
  route: string;
}) {
  const pagesArray = Array.from({ length: pages }, (_, i) => i + 1);
  const prev = pageNumber - 1;
  const next = pageNumber + 1;

  return (
    <nav
      aria-label="Pagination"
      className="mt-8 flex items-center justify-end space-x-2">
      {/* Previous button */}
      {pageNumber > 1 ? (
        <Link
          href={`${route}${route.includes("?") ? "&" : "?"}pageNumber=${prev}`}
          className="flex h-7 w-7 items-center justify-center rounded-md bg-gray-200 text-gray-600 transition hover:bg-gray-300">
          <ChevronLeftIcon className="h-3 w-3" />
        </Link>
      ) : (
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gray-100 text-gray-300">
          <ChevronLeftIcon className="h-3 w-3" />
        </div>
      )}

      {/* Page numbers */}
      {pagesArray.map((p) => {
        const isActive = p === pageNumber;
        return isActive ? (
          <span
            key={p}
            className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-600 text-xs font-medium text-white">
            {p}
          </span>
        ) : (
          <Link
            key={p}
            href={`${route}${route.includes("?") ? "&" : "?"}pageNumber=${p}`}
            className="flex h-7 w-7 items-center justify-center rounded-md bg-gray-200 text-xs text-gray-600 transition hover:bg-gray-300">
            {p}
          </Link>
        );
      })}

      {/* Next button */}
      {pageNumber < pages ? (
        <Link
          href={`${route}${route.includes("?") ? "&" : "?"}pageNumber=${next}`}
          className="flex h-7 w-7 items-center justify-center rounded-md bg-gray-200 text-gray-600 transition hover:bg-gray-300">
          <ChevronRightIcon className="h-3 w-3" />
        </Link>
      ) : (
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gray-100 text-gray-300">
          <ChevronRightIcon className="h-3 w-3" />
        </div>
      )}
    </nav>
  );
}
