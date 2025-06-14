"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/src/i18n/navigation";

export function Navbar() {
  const pathname = usePathname();
  const t = useTranslations("Navbar");
  const locale = useLocale();

  const navItems = {
    "/": {
      name: t("home"),
    },
    "/about": {
      name: t("about"),
    },
    "/skills": {
      name: t("skills"),
    },
    "/portfolio": {
      name: t("portfolio"),
    },
  };

  const currentPath = pathname.replace(`/${locale}`, "") || "/";

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-2">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className={cn(
                    "relative transition-colors duration-300 hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle py-1 px-2 m-1 border-b",
                    currentPath === path
                      ? "border-orange-500 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-orange-500 after:blur-sm"
                      : "border-gray-300 dark:border-neutral-700"
                  )}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
