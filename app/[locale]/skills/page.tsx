import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import { backendSkills, frontendSkills, otherSkills } from "@/src/data";

const SkillsPage = () => {
  const t = useTranslations("SkillsPage");

  return (
    <div>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">{t("frontendDevelopmentCardTitle")}</CardTitle>
            </CardHeader>

            <CardContent>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">{t("backendDevelopmentCardTitle")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-full mb-10">
            <CardHeader>
              <CardTitle className="text-xl">{t("otherTools&TechnologiesCardTitle")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {otherSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">{t("developmentPhilosophyTitle")}</h2>
          <p className="text-lg mb-4">
            I believe in writing clean, maintainable code that solves real problems. My approach
            focuses on:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Building applications with a user-first mindset</li>
            <li>Writing self-documenting code with appropriate comments</li>
            <li>Following test-driven development when appropriate</li>
            <li>Continuous learning and adaptation to new technologies</li>
            <li>Collaborating effectively with cross-functional teams</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
