import { BadgeItem } from './Badge';
import { NavLink } from './Navigation';
import { Heading, Paragraph } from './Text';
import { anotherProjectsData, titleProject } from '../constants/Projects';
import { useLanguage } from '../contexts/Language';

const ProjectCard = ({ project }) => {
  const { imageSrc, imageAlt, badges, title, description, links } = project;

  return (
    <div data-aos="fade-up">
      <div className="w-full p-3 bg-white rounded-2xl shadow-xl flex flex-col justify-start items-start gap-3 transition-transform duration-300 hover:-translate-y-2">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full max-h-[400px] xl:max-w-[clamp(31.25rem,27.5rem+18.75vw,50rem)] rounded-[20px] flex flex-col justify-center items-center overflow-hidden object-cover object-top"
        />

        <div className="flex flex-wrap justify-start items-center gap-3">
          {badges.map((badge, index) => (
            <BadgeItem
              key={index}
              text={badge.text}
              type={badge.type}
            />
          ))}
        </div>

        <div>
          <Heading
            level={3}
            variant="subSection"
          >
            {title}
          </Heading>
          <Paragraph variant="project">{description}</Paragraph>
        </div>

        <div className="w-full flex justify-center xl:justify-start items-start gap-3">
          {links.map((link, index) => (
            <NavLink
              key={index}
              href={link.href}
              variant={link.variant}
            >
              <link.icon />
              {link.text}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export const AnotherProject = () => {
  const { language } = useLanguage();
  const title = titleProject(language);
  const anotherProjects = anotherProjectsData(language);

  return (
    <div className="w-full max-w-[1600px] px-4 lg:px-10 flex flex-col justify-start items-start">
      <div className="w-full flex flex-col justify-start items-center gap-5 xl:gap-20">
        <Heading
          level={2}
          variant="section"
          dataAos="fade-up"
          className="mt-4"
        >
          {title[1].title}
        </Heading>
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-5 xl:gap-10">
          {anotherProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
        <div data-aos="fade-up">
          <NavLink
            href="#project"
            variant="button"
            className="text-[clamp(16px,4vw,18px)]"
          >
            Load More
          </NavLink>
        </div>
      </div>
    </div>
  );
};
