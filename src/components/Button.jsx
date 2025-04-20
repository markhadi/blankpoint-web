export const Button = ({ children, onClick, className }) => {
  return (
    <button
      role="button"
      onClick={onClick}
      className={`cursor-pointer max-w-max font-inter font-semibold text-[clamp(1rem,0.975rem+0.125vw,1.125rem)] text-white leading-none flex items-center justify-center bg-[#2B284E] rounded-md py-[clamp(1rem,0.9rem+0.5vw,1.5rem)] px-[clamp(2rem,1.9rem+0.5vw,2.5rem)] shadow transition-all duration-300 hover:bg-[#373671] ${className}`}
    >
      {children}
    </button>
  );
};
