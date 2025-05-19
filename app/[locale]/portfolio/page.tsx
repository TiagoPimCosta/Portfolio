import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with product management, cart functionality, user authentication, and payment processing.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team workspaces, and progress tracking.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    technologies: ["TypeScript", "React", "Firebase", "Redux"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    title: "Health & Fitness Tracker",
    description:
      "A mobile-responsive application for tracking workouts, nutrition, and wellness goals with detailed analytics.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    technologies: ["React Native", "GraphQL", "PostgreSQL", "Chart.js"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    title: "Real Estate Marketplace",
    description:
      "A platform connecting property buyers, sellers, and agents with search functionality and virtual tours.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    technologies: ["Next.js", "Express", "MongoDB", "Google Maps API"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
];

const PortfolioPage = () => {
  const t = useTranslations("PortfolioPage");

  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>
        <p className="text-lg mb-8">
          Here are some of the projects Ive worked on. Each demonstrates different skills and
          technologies from my development toolkit.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              {/* <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" className="flex items-center gap-1" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" /> Code
                  </a>
                </Button>
                <Button size="sm" className="flex items-center gap-1" asChild>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </Button>
              </CardFooter> */}
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Client Work</h2>
          <p className="text-lg mb-6">
            {`In addition to personal projects, I've worked with various clients across different
            industries. Due to confidentiality agreements, detailed information about these projects
            cannot be shared publicly. However, Im happy to discuss my experience and contributions
            during interviews.`}
          </p>

          <h3 className="text-xl font-medium mb-2">{`Industries I've worked with:`}</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Financial Services</li>
            <li>Healthcare</li>
            <li>Education</li>
            <li>E-commerce</li>
            <li>Travel and Hospitality</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
