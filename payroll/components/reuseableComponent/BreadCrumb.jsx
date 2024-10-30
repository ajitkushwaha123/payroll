"use client";
import Icon from "@/helper/Icon";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { capitalizeWords } from "@/helper/TextFormatter";

export default function Breadcrumb() {
  const pathname = usePathname();

  console.log("pathname" , pathname);
  const pathnames = pathname?.split("/").filter((x) => x);


  return (
    <nav className="flex mx-8" aria-label="Breadcrumb">
      <div className="px-4 bg-white my-4 py-2 rounded-md">
        <ol role="list" className="flex items-center">
          <Link href="/">
            <p className="mr-4 text-sm font-medium">
              {pathnames?.length > 0 ? (
                <span>Home</span>
              ) : (
                <span className="text-primary cursor-pointer hover:text-blue-700">
                  Dashboard
                </span>
              )}
            </p>
          </Link>

          {pathnames?.length > 0 && (
            <Icon
              name="ChevronRight"
              className="flex-shrink-0 h-5 w-5 text-gray-400"
            />
          )}

          {pathnames?.map((page, index) => {
            const href = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            return (
              <li key={href}>
                <div className="flex cursor-pointer items-center">
                  {isLast ? (
                    <span
                      className="mr-4 text-sm font-medium text-primary"
                      aria-current="page"
                    >
                      {capitalizeWords(page)}
                    </span>
                  ) : (
                    <Link href={href}>
                      <p className="mr-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                        {capitalizeWords(page)}
                      </p>
                    </Link>
                  )}
                  {!isLast && (
                    <Icon
                      name="ChevronRight"
                      className="flex-shrink-0 h-5 w-5 text-gray-400"
                    />
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
