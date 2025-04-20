import { HeaderNav } from './Navigation';
import { Menu, X } from 'lucide-react';
import { useNavbar } from '../hooks/useNavbar';

export const Navbar = () => {
  const { isSticky, isMenuOpen, setIsMenuOpen, menuRef, buttonRef } = useNavbar();

  return (
    <section className={`fixed top-0 z-50 w-full bg-transparent flex items-center justify-center transition-all duration-300 ${isSticky ? 'shadow-md bg-white' : 'top-5'}`}>
      <div className="w-full max-w-[1600px] px-4 lg:px-10">
        <div
          data-aos="fade-down"
          className="w-full px-5 py-4 rounded-[20px] bg-white flex gap-5 justify-between"
        >
          <a href="#home">
            <img
              src="/logo.png"
              alt="Blankpoint"
              className="hidden sm:block max-w-[200px] lg:max-w-[260px] h-auto object-contain"
            />
            <span className="sm:hidden flex font-poppins font-bold text-[28px] leading-none tracking-[0.02em] text-[#5E62FF]">
              BLANK<span className="text-[#454545]">POINT</span>
            </span>
          </a>
          <div className="flex items-center justify-center">
            <div className="hidden lg:flex">
              <HeaderNav />
            </div>

            <div className="lg:hidden flex items-center">
              <button
                ref={buttonRef}
                className="cursor-pointer"
                onClick={() => setIsMenuOpen(prev => !prev)}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        <div
          ref={menuRef}
          className={`lg:hidden absolute right-4 mt-2 bg-white rounded-[20px] shadow p-4 w-max transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'z-0 opacity-0 -translate-y-6 pointer-events-none'
          }`}
        >
          <HeaderNav
            onLinkClick={() => setIsMenuOpen(false)}
            isMobile
          />
        </div>
      </div>
    </section>
  );
};
