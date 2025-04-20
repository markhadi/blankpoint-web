import { useActiveHash } from '../hooks/useActiveHash';
import { LanguageSwitcher } from './LanguageSwitcher';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#project', label: 'Project' },
  { href: '#pricing', label: 'Pricing' },
];

const NavLink = ({ href, active, children, variant, onClick }) => {
  const baseClasses = 'transition-all duration-300 max-w-max';

  const variantClasses = {
    primary: `${active ? 'font-bold text-[#23263A]' : 'font-normal text-[#454545]/50 hover:text-[#454545]/80'} font-poppins text-[20px] leading-[1.5em] tracking-[0.02em] px-2 xl:px-4 py-2`,
    footer: 'font-poppins font-normal text-[20px] text-[#373737] hover:text-[#23263A] leading-[1.5em] tracking-[0.02em] px-4 py-2',
    contact: 'font-poppins font-normal text-[20px] text-white bg-[#23263A] rounded-xl px-4 py-2 hover:bg-[#373950]',
    action: 'font-poppins font-semibold text-[20px] text-[#5956E9] leading-[1.5em] flex gap-1 items-center justify-center hover:underline',
    button: 'font-inter font-semibold text-[clamp(1rem,0.975rem+0.125vw,1.125rem)] text-white leading-none bg-[#2B284E] rounded-md py-[clamp(1rem,0.9rem+0.5vw,1.5rem)] px-[clamp(2rem,1.9rem+0.5vw,2.5rem)] shadow hover:bg-[#373671]',
    demo: 'font-poppins font-normal text-[14px] text-white leading-[1.36em] flex items-center justify-center gap-1 bg-[#2B284E] rounded-sm px-4 py-3 hover:bg-[#373671]',
    study: 'font-poppins font-normal text-[14px] text-white leading-[1.36em] flex items-center justify-center gap-1 bg-[#373671] rounded-sm px-4 py-3 hover:bg-[#4a4994]',
    demoSmall: 'font-poppins font-normal text-[14px] text-white leading-[1.36em] flex items-center justify-center gap-1 bg-[#2B284E] rounded-sm px-2 py-1 hover:bg-[#373671]',
    studySmall: 'font-poppins font-normal text-[14px] text-white leading-[1.36em] flex items-center justify-center gap-1 bg-[#373671] rounded-sm px-2 py-1 hover:bg-[#4a4994]',
  };

  return (
    <a
      href={href}
      className={`${baseClasses} ${variantClasses[variant]}`}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

const HeaderNav = ({ onLinkClick, isMobile = false }) => {
  const activeHash = useActiveHash();

  return (
    <nav className={isMobile ? 'flex flex-col gap-2' : 'flex gap-0 2xl:gap-7'}>
      {navItems.map(item => (
        <NavLink
          key={item.href}
          href={item.href}
          active={activeHash === item.href}
          variant="primary"
          onClick={onLinkClick}
        >
          {item.label}
        </NavLink>
      ))}
      <LanguageSwitcher />
      <div className="mr-2 2xl:hidden" />
      <NavLink
        href="#contact"
        variant="contact"
        onClick={onLinkClick}
      >
        Contact us
      </NavLink>
    </nav>
  );
};

const FooterNav = () => {
  return (
    <nav className="flex flex-col gap-2 items-center sm:flex-row sm:gap-7">
      {navItems.map(item => (
        <NavLink
          key={`footer-${item.href}`}
          href={item.href}
          variant="footer"
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};

export { NavLink, HeaderNav, FooterNav };
