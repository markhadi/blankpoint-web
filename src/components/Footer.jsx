import { socialLinks } from '../constants/SocialLinks';
import { FooterNav } from './Navigation';
import { Paragraph } from './Text';

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="w-full bg-[radial-gradient(ellipse_124%_320%_at_76%_100%,_#CAE6FF_0%,_#EBF4FB_100%)] flex justify-center items-center overflow-hidden"
    >
      <div
        data-aos="fade-up"
        className="w-full max-w-[1600px] px-4 lg:px-10 pt-12 pb-6 flex flex-col justify-start items-start gap-[60px]"
      >
        <div className="w-full flex flex-col justify-start items-center gap-7">
          <img
            src="/logo.png"
            alt="Blankpoint"
            className="max-w-[260px] h-auto object-contain"
          />
          <FooterNav />
        </div>
        <div className="w-full flex flex-col gap-3 sm:flex-row items-center justify-between sm:items-start">
          <Paragraph variant="footer">Copyright 2025, by blankpoint.net</Paragraph>
          <div className="opacity-80 flex justify-start items-center gap-3">
            {socialLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                <link.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
