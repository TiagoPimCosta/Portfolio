import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

const footerItems = [
  {
    url: "https://www.linkedin.com/in/tiagopimcosta/",
    icon: IconBrandLinkedin,
  },
  {
    url: "https://github.com/TiagoPimCosta",
    icon: IconBrandGithub,
  },
];

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="flex flex-col gap-3 mt-16 mb-16">
      <span>{t("findMeOn")}</span>
      <ul className="font-sm flex text-neutral-600 space-x-4 space-y-0 dark:text-neutral-300">
        {footerItems.map((item, index) => (
          <li key={`footer-${index}-element`}>
            <a
              className="flex items-center h-7 gap-1 transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href={item.url}
            >
              <item.icon className="h-7 w-7" />
            </a>
          </li>
        ))}
      </ul>
      <span>{t("emailMeAt")} tiagopimcosta@gmail.com</span>
    </footer>
  );
}
