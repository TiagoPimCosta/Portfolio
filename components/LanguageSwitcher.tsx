"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleChange = (locale: string) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
    router.push(newPath);
  };

  return (
    <div className="flex gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="outline" size="icon" className="h-10 w-10">
            {currentLocale.toUpperCase()}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center" className="min-w-fit rounded-full">
          {["en", "pt"].map((locale) => (
            <DropdownMenuItem key={locale} onClick={() => handleChange(locale)} className="p-2">
              {locale.toUpperCase()}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
