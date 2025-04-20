import { HeroConst } from '../constants/Hero';
import { useLanguage } from '../contexts/Language';
import { NavLink } from './Navigation';
import { Heading, Paragraph } from './Text';

export const Hero = () => {
  const { language } = useLanguage();
  const hero = HeroConst(language);

  return (
    <section
      id="home"
      className="py-24 lg:py-40 bg-[radial-gradient(ellipse_126%_640%_at_0.00%_0.00%,_#CAE6FF_0%,_#EBF4FB_100%)] overflow-hidden"
    >
      <div className="px-4 lg:px-10 flex flex-col lg:flex-row justify-center items-center">
        <div
          data-aos="fade-right"
          className="w-full max-w-[700px] flex flex-col justify-center items-center lg:justify-start lg:items-start"
        >
          <Heading
            level={1}
            variant="hero"
            className="text-center lg:text-left text-[clamp(24px,4vw,60px)] w-full"
          >
            Blankpoint Software <br className="hidden sm:block" />
            Developer & Designer
          </Heading>
          <Paragraph
            variant="hero"
            className="mt-4 lg:mt-5 mb-6 lg:mb-10 text-[clamp(14px,4vw,24px)] text-center lg:text-left w-full"
          >
            {hero[0].description}
          </Paragraph>
          <NavLink
            href="#project"
            variant="button"
            className="text-[clamp(16px,4vw,18px)]"
          >
            Check Our Project
          </NavLink>
        </div>

        <div
          data-aos="fade-left"
          className="w-full max-w-[816px] flex justify-center items-center"
        >
          <img
            src="/Software-Development-Illustration.png"
            alt="Software Development Illustration"
            className="w-full max-w-[500px] xl:max-w-none xl:w-[clamp(300px,40vw,675px)] h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};
