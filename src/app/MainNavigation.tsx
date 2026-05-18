"use client";

import { cn } from "@/lib/utils";
import { collections } from "@wix/stores";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainNavigationProps {
  collections: collections.Collection[];
  className?: string;
}

export default function MainNavigation({
  collections,
  className,
}: MainNavigationProps) {
  const pathname = usePathname();

  return (
    <nav className={cn("flex items-center gap-8 overflow-x-auto whitespace-nowrap py-4 no-scrollbar", className)}>
      <Link
        href="/shop"
        className={cn(
          "text-sm font-bold uppercase tracking-wider hover:text-[#1350a2] dark:hover:text-blue-400 transition-colors",
          pathname === "/shop" ? "text-[#1350a2] dark:text-blue-400" : "text-gray-700 dark:text-white"
        )}
      >
        Shop All
      </Link>
      
      {collections.map((collection) => {
        const href = `/collections/${collection.slug}`;
        const isActive = pathname === href;
        return (
          <Link
            key={collection._id}
            href={href}
            className={cn(
              "text-sm font-bold uppercase tracking-wider hover:text-[#1350a2] dark:hover:text-blue-400 transition-colors",
              isActive ? "text-[#1350a2] dark:text-blue-400" : "text-gray-700 dark:text-white"
            )}
          >
            {collection.name}
          </Link>
        );
      })}
    </nav>
  );
}
