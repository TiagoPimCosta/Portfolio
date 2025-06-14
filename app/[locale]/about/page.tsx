import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";

const workExperiences = [
  {
    title: "Frontend Developer",
    company: "Bridge In",
    date: "Sep 2024 - Present",
    description: "",
  },
  {
    title: "Fullstack Developer",
    company: "Capgemini Engineering • SPMS",
    date: "Feb 2024 - Sep 2024",
    description: "",
  },
  {
    title: "Backend Developer",
    company: "Capgemini Engineering • Farfetch",
    date: "Jan 2023 - Jan 2024",
    description: "",
  },
  {
    title: "Frontend Developer",
    company: "Capgemini Engineering • Farfetch ",
    date: "Jan 2022 - Dec 2022",
    description: "",
  },
];

const educations = [
  {
    title: "Master in Engineering and Management of Information System",
    subTitle: "University of Minho",
    date: "Sep 2016 - Oct 2021",
    description: "",
  },
];

const AboutPage = () => {
  const t = useTranslations("AboutPage");

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>
      <div className="space-y-8">
        <p className="text-lg">
          With over 5 years of experience in software development, Ive worked on a diverse range of
          projects from small business websites to complex enterprise applications. My journey began
          with a degree in Computer Science, followed by continuous self-learning and professional
          growth.
        </p>

        <div className="flex flex-col gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Work Experience</h3>
              <ul className="space-y-4">
                {workExperiences.map((workExperience, index) => (
                  <li key={`${workExperience.title}-${index}`}>
                    <div className="font-medium">{workExperience.title}</div>
                    <div className="flex text-muted-foreground justify-between">
                      <div>{workExperience.company}</div>
                      <div>{workExperience.date}</div>
                    </div>
                    <p className="mt-1">{workExperience.description}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <ul className="space-y-4">
                {educations.map((education, index) => (
                  <li key={`${education.title}-${index}`}>
                    <div className="font-medium">{education.title}</div>
                    <div className="flex text-muted-foreground justify-between">
                      <div>{education.subTitle}</div>
                      <div>{education.date}</div>
                    </div>
                    <p className="mt-1">{education.description}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Personal Interests</h3>
          <p className="text-lg">
            Beyond coding, I enjoy hiking in the mountains, reading science fiction novels, and
            experimenting with home automation projects. Im also an active contributor to
            open-source projects and regularly attend local tech meetups and conferences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
