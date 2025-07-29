import { BlankpointHeroConst } from "../../constants/Highlight/Blankpoint/Hero";
import { useLanguage } from "../../contexts/Language";

const dummyImg = "/laptop-screen.png";

const Hero = () => {
  const { language } = useLanguage();
  const hero = BlankpointHeroConst(language);

  return (
    <section className="bg-[#6C4EC3] pt-20 text-center">
      <div className="pt-20">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
          Blanksys - Hardware PoS
        </h1>
        <p className="text-white text-lg md:text-xl max-w-[50ch] mx-auto mb-5">
          {hero[0].description}
        </p>
      </div>
      <div className="flex justify-center">
        <img
          src={dummyImg}
          alt="Hero Highlight"
          className="rounded-2xl max-w-full w-[1200px] h-[611px] object-cover"
        />
      </div>
    </section>
  );
};
export default Hero;
