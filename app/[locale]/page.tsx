import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <section>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tighter">{t("title")}</h1>
        <p>{t("subTitle")}</p>
      </div>
      <h1></h1>
      <div className="flex flex-col gap-3">
        <span>
          {`I'm a passionate developer with expertise in modern web technologies. I enjoy building efficient, user-friendly applications with a focus on clean code and best practices. With a strong foundation in both frontend and backend development, I create seamless experiences that solve real-world problems.`}
        </span>
        <span>
          {`My approach combines technical expertise with a deep understanding of user needs, resulting in solutions that are not only technically sound but also intuitive and enjoyable to use. I'm constantly learning new technologies and methodologies to stay at the forefront of the rapidly evolving tech landscape.`}
        </span>
      </div>
    </section>
  );
}
