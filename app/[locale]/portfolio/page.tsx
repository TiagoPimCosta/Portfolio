import React from "react";
import { useTranslations } from "next-intl";

const PortfolioPage = () => {
  const t = useTranslations("PortfolioPage");

  return <div>{t("title")}</div>;
};

export default PortfolioPage;
