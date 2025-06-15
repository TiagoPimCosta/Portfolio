import { Badge } from "@/components/ui/badge";
import { workExperiences } from "@/src/data";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-semibold tracking-tighter">{t("title")}</h1>
      </div>
      <div className="flex flex-col gap-1.5">
        <p className="flex items-center gap-2">
          Currently working at
          <Link href={workExperiences[0].href} target="/blank">
            <Badge variant="secondary">{workExperiences[0].company}</Badge>
          </Link>
        </p>
      </div>
      <div className="flex flex-col gap-2 text-left md:text-justify">
        <p className="indent-3">{t("firstParagraph")}</p>
        <p className="indent-3">{t("secondParagraph")}</p>
      </div>
    </section>
  );
}
