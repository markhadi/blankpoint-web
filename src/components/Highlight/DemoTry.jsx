import { useLanguage } from "../../contexts/Language";
import { DemoTryConst } from "../../constants/Highlight/Blankpoint/DemoTry";

const dummyLaptop = "/laptop-no-table.png";

const DemoTry = () => {
  const { language } = useLanguage();
  const demoTry = DemoTryConst(language);

  return (
    <section className="bg-[#E8E8E8] py-20 flex flex-col items-center px-4">
      <img
        src={dummyLaptop}
        alt="Laptop Demo"
        className="mx-auto mb-8 max-w-3xl w-full"
      />
      <button className="bg-[#23263A] text-white text-lg font-semibold rounded-xl px-8 py-4 shadow hover:bg-[#373950] transition">
        <a href="https://blanksys.netlify.app/" target="_blank">
          {demoTry[0].buttonText}
        </a>
      </button>
    </section>
  );
};
export default DemoTry;
