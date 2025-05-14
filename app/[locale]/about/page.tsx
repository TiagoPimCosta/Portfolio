import React from "react";
import { useTranslations } from "next-intl";

const AboutPage = () => {
  const t = useTranslations("AboutPage");

  return <div>{t("title")}</div>;
};

export default AboutPage;
