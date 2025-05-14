import React from "react";
import { useTranslations } from "next-intl";

const SkillsPage = () => {
  const t = useTranslations("SkillsPage");

  return <div>{t("title")}</div>;
};

export default SkillsPage;
