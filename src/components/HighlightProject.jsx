import { highlightProjectsData, titleProject } from '../constants/Projects';
import { useLanguage } from '../contexts/Language';
import { BadgeItem } from './Badge';
import { NavLink } from './Navigation';
import { Heading, Paragraph } from './Text';

const HighlightProjectItem = ({ project }) => {
  const { title, imageSrc, imageAlt, backgroundColor, badges, description, links } = project;

  return (
    <article
      data-aos="fade-up"
      className={`w-full rounded-[20px] flex flex-col xl:flex-row justify-start items-center xl:items-start overflow-hidden shadow-xl ${backgroundColor}`}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full max-h-[400px] xl:max-w-[clamp(31.25rem,30rem+6.25vw,37.5rem)] rounded-[20px] flex flex-col justify-center items-center overflow-hidden object-cover object-top"
      />

      <div className="p-3 xl:p-10 flex flex-1 flex-col justify-start items-start gap-3 overflow-hidden">
        <Heading
          level={3}
          variant="subSection"
        >
          {title}
        </Heading>

        <div className="flex flex-wrap justify-start items-start gap-2">
          {badges.map(badge => (
            <BadgeItem
              key={badge.text}
              text={badge.text}
              type={badge.type}
            />
          ))}
        </div>

        <Paragraph variant="project">{description}</Paragraph>

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
    </article>
  );
};

export const HighlightProject = () => {
  const { language } = useLanguage();
  const title = titleProject(language);
  const highlightProjects = highlightProjectsData(language);

  return (
    <div className="w-full max-w-[1600px] px-4 lg:px-10 flex flex-col justify-start items-start">
      <div className="w-full flex flex-col justify-start items-center gap-5 xl:gap-20">
        <Heading
          level={2}
          variant="section"
          dataAos="fade-up"
        >
          {title[0].title}
        </Heading>

        {highlightProjects.map(project => (
          <HighlightProjectItem
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </div>
  );
};
