const Heading = ({
  level,
  children,
  variant = "default",
  className = "",
  dataAos = "",
  highlight = false,
}) => {
  const variantClasses = {
    hero: "text-[#5B5B5B] text-6xl font-bold font-inter leading-[1.2em]",
    section: `${
      highlight ? "text-[#683BED]" : "text-[#1E293B]"
    } text-[clamp(24px,4vw,40px)] font-semibold font-poppins leading-[1.5em]`,
    subSection:
      "text-[#2D3748] text-[clamp(20px,4vw,28px)] font-semibold font-poppins leading-[1.36em]",
    service: "text-[#2D3748] text-xl font-semibold font-inter leading-[1.24em]",
    project: "text-black text-2xl font-semibold font-poppins leading-[1.5em]",
    contact:
      "text-[#2B2B2B] text-xl font-semibold font-poppins leading-[1.5em]",
    default:
      "text-[#1E293B] text-xl font-semibold font-poppins leading-[1.5em]",
  };

  const TagName = `h${level}`;

  return (
    <TagName
      data-aos={dataAos}
      className={`${variantClasses[variant]} ${className}`}
    >
      {children}
    </TagName>
  );
};

const Paragraph = ({ children, variant = "default", className = "" }) => {
  const variantClasses = {
    hero: "text-[#5B5B5B] text-2xl font-normal font-inter leading-[1.8em]",
    service: "text-[#718096] text-sm font-normal font-inter leading-[1.62em]",
    about:
      "text-[#1E293B] text-[clamp(14px,4vw,20px)] font-normal font-poppins leading-[1.5em]",
    project:
      "text-[#4A5568] text-base font-normal font-poppins leading-[1.62em]",
    projectSmall:
      "text-[#616161] text-xl font-normal font-poppins leading-[1.5em]",
    contact:
      "text-[#4A5568] text-[clamp(14px,4vw,22px)] font-normal font-poppins leading-[1.62em]",
    contactInfo:
      "text-[#8F8F8F] text-lg font-normal font-poppins leading-[1.5em]",
    footer:
      "text-[#373737]/50 text-xl font-normal font-poppins leading-[1.5em] tracking-tight",
    default:
      "text-[#4A5568] text-base font-normal font-poppins leading-[1.5em]",
  };

  return (
    <p className={`${variantClasses[variant]} ${className}`}>{children}</p>
  );
};

export { Heading, Paragraph };
