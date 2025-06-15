import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { educations, workExperiences } from "@/src/data";
import Link from "next/link";
import { IconLink } from "@tabler/icons-react";

const AboutPage = () => {
  const t = useTranslations("AboutPage");

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>
      <div className="space-y-8">
        <p className="text-justify">{t("description")}</p>
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{t("workExperience")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {workExperiences.map((workExperience, index) => (
                  <li key={`${workExperience.title}-${index}`}>
                    <div className="flex flex-col md:flex-row font-medium md:justify-between">
                      <div>{t(workExperience.title)}</div>
                      <div className="flex gap-1 md:items-end min-w-fit">
                        <span>{t(workExperience.startDate)}</span>
                        <span className="">-</span>
                        <span>{t(workExperience.endDate)}</span>
                      </div>
                    </div>
                    <Link
                      href={workExperience.href}
                      target="/blank"
                      className="flex gap-1 text-muted-foreground items-center w-fit"
                    >
                      {workExperience.company}
                      <IconLink className="h-4 w-4" />
                    </Link>

                    <p className="mt-1">{t(workExperience.description)}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{t("education")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {educations.map((education, index) => (
                  <li key={`${education.title}-${index}`}>
                    <div className="flex flex-col md:flex-row font-medium md:justify-between">
                      <div>{t(education.title)}</div>
                      <div className="flex gap-1 md:items-end min-w-fit">
                        <span>{t(education.startDate)}</span>
                        <span className="">-</span>
                        <span>{t(education.endDate)}</span>
                      </div>
                    </div>
                    <Link
                      href={education.href}
                      target="/blank"
                      className="flex gap-1 text-muted-foreground items-center w-fit"
                    >
                      <div>{t(education.subTitle)}</div>

                      <IconLink className="h-4 w-4" />
                    </Link>
                    <p className="mt-1 text-muted-foreground ">{t(education.description)}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">{t("personalInterestsTitle")}</h3>
          <p className="text-justify">{t("personalInterestsText")}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
