"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

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
      {["en", "pt"].map((locale) => (
        <button
          key={locale}
          onClick={() => handleChange(locale)}
          className={`px-3 py-1 rounded ${
            currentLocale === locale ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
