import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";

const footerItems = [
  {
    url: "https://www.linkedin.com/in/tiagopimcosta/",
    icon: IconBrandLinkedin,
  },
  {
    url: "https://github.com/TiagoPimCosta",
    icon: IconBrandGithub,
  },
  {
    url: "/",
    icon: IconMail,
  },
];

export default function Footer() {
  return (
    <footer className="mt-16">
      <ul className="font-sm mt-8 flex text-neutral-600 space-x-4 space-y-0 dark:text-neutral-300">
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
    </footer>
  );
}
