import clsx from 'clsx';
import { useLanguage } from '../contexts/Language';

export const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="cursor-pointer w-max p-1 relative bg-[#eaeaea] rounded-full shadow-[inset_0px_0px_4px_0px_rgba(0,0,0,0.21)] flex justify-start items-start overflow-hidden transition-all"
    >
      <div className={clsx('w-10 h-10 absolute bg-[#2d2d2d] rounded-full transition-all duration-300', language === 'en' ? 'left-[4px]' : 'left-[44px]')} />

      <div className="z-10 w-10 h-10 flex flex-col justify-center items-center overflow-hidden">
        <div className={clsx('self-stretch text-center justify-center text-xl font-normal font-inter leading-normal transition-colors duration-300', language === 'en' ? 'text-white' : 'text-neutral-400')}>en</div>
      </div>
      <div className="z-10 w-10 h-10 flex flex-col justify-center items-center overflow-hidden">
        <div className={clsx('self-stretch text-center justify-center text-xl font-normal font-inter leading-normal transition-colors duration-300', language === 'id' ? 'text-white' : 'text-neutral-400')}>id</div>
      </div>
    </button>
  );
};
