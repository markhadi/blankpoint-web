import { servicesConst } from '../constants/Services';
import { useLanguage } from '../contexts/Language';
import { Heading, Paragraph } from './Text';

const ServiceItem = ({ icon, heading, paragraph }) => {
  return (
    <div data-aos="fade-up">
      <div className="w-full xl:max-w-[333px] px-4 py-4 xl:py-10 bg-white rounded-lg shadow flex flex-col justify-start items-start gap-3 xl:gap-5 transition-all duration-300 hover:-translate-y-2 hover:bg-gray-50">
        {icon}
        <Heading
          level={3}
          variant="service"
        >
          {heading}
        </Heading>
        <Paragraph variant="service">{paragraph}</Paragraph>
      </div>
    </div>
  );
};

export const Service = () => {
  const { language } = useLanguage();
  const services = servicesConst(language);

  return (
    <section
      id="serivces"
      className="w-full flex justify-center items-center relative bg-[#F9F9FF] xl:mb-[224px]"
    >
      <div className="w-full max-w-[1600px] px-4 lg:px-10 py-10 pb-0 xl:py-0 gap-3 xl:gap-5 grid grid-cols-1 md:grid-cols-2 justify-items-center xl:absolute xl:top-[50%] xl:left-[50%] xl:-translate-x-1/2 xl:-translate-y-1/2 xl:flex xl:justify-between">
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            icon={service.icon}
            heading={service.heading}
            paragraph={service.paragraph}
          />
        ))}
      </div>
    </section>
  );
};
