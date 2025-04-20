import { AboutConst } from '../constants/About';
import { useLanguage } from '../contexts/Language';
import { Heading, Paragraph } from './Text';

export const AboutUs = () => {
  const { language } = useLanguage();
  const about = AboutConst(language);

  return (
    <section
      id="about"
      className="w-full pt-20 xl:pt-24 xl:pb-[120px] bg-[#F9F9FF] flex justify-center items-center overflow-hidden"
    >
      <div className="w-full max-w-[1600px] px-4 lg:px-10 flex flex-col xl:flex-row gap-5 justify-between items-center">
        <div
          data-aos="fade-right"
          className="w-full xl:max-w-[677px] flex flex-1 flex-col items-center justify-center xl:justify-start xl:items-start gap-5"
        >
          <Heading
            level={2}
            variant="section"
          >
            {about[0].title}
          </Heading>
          <Paragraph
            variant="about"
            className="text-center xl:text-left"
          >
            {about[0].descriptionFirst}
          </Paragraph>
          <Paragraph
            variant="about"
            className="text-center xl:text-left"
          >
            {about[0].descriptionSecond}
          </Paragraph>
        </div>

        <div
          data-aos="fade-left"
          className="w-full xl:max-w-[clamp(300px,13rem+28.75vw,760px)] max-h-[400px] xl:max-h-[clamp(300px,17.15rem+8vw,428px)] relative rounded-xl overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="A group of people working together using a laptop"
            className="object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
};
