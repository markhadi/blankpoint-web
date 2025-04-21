import { ContactConst, contactInfo } from '../constants/Contact';
import { useLanguage } from '../contexts/Language';
import { ArrowRightUp } from './icons/ContactIcons';
import { NavLink } from './Navigation';
import { Heading, Paragraph } from './Text';

const ContactCard = ({ icon: Icon, title, info, linkHref, linkText }) => {
  return (
    <div className="p-5 w-full xl:max-w-[330px] bg-white rounded-[20px] shadow flex flex-col justify-start items-start gap-3 transition-all duration-300 hover:shadow-md hover:bg-gray-50 hover:-translate-y-2">
      <div className="p-2 max-w-max flex bg-white rounded-lg shadow-md outline-2 outline-offset-[-2px] outline-[#DADADA]">
        <Icon />
      </div>

      <div>
        <Heading
          level={3}
          variant="contact"
        >
          {title}
        </Heading>
        <Paragraph variant="contactInfo">{info}</Paragraph>
      </div>
      <NavLink
        href={linkHref}
        variant="action"
      >
        {linkText}
        <ArrowRightUp />
      </NavLink>
    </div>
  );
};

export const Contact = () => {
  const { language } = useLanguage();
  const contact = ContactConst(language);

  return (
    <section
      id="contact"
      className="bg-[#F9F9FF] py-20 xl:py-[200px] flex justify-center items-center relative overflow-hidden"
    >
      <div className="flex gap-4 px-4 lg:px-10 w-full max-w-[1600px] flex-col xl:flex-row">
        <div
          data-aos="fade-right"
          className="w-full xl:max-w-[707px] flex flex-col items-center justify-center xl:justify-start xl:items-start"
        >
          <Heading
            level={2}
            variant="section"
          >
            {contact[0].title}
          </Heading>
          <Paragraph
            variant="contact"
            className="mt-3 mb-3 xl:mb-20 text-center xl:text-left"
          >
            {contact[0].description}
          </Paragraph>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-2 gap-[clamp(0.75rem,0.3rem+2.25vw,3rem)]">
            {contactInfo.map(info => (
              <ContactCard
                key={info.id}
                icon={info.icon}
                title={info.title}
                info={info.info}
                linkHref={info.linkHref}
                linkText={info.linkText}
              />
            ))}
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="flex items-center justify-center"
        >
          <img
            src="/mockup.png"
            alt="mockup"
            className="2xl:opacity-0 w-full max-w-[clamp(18.75rem,7.0875rem+58.3125vw,77.0625rem)] object-contain"
          />
        </div>
      </div>
      <img
        data-aos="fade-left"
        src="/mockup.png"
        alt="mockup"
        className="w-[clamp(18.75rem,7.0875rem+58.3125vw,77.0625rem)] object-contain absolute top-[60px] right-[-260px] hidden 2xl:block"
      />
    </section>
  );
};
