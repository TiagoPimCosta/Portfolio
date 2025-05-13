import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/navigation";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <section>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tighter">{`Hey, I'm Tiago`}</h1>
        <p>{`Front End Developer based in Porto, Portugal`}</p>
      </div>
      <h1>{t("title")}</h1>
      <Link href="/about">{t("about")}</Link>
      <p className="mb-4">
        {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </p>
    </section>
  );
}
