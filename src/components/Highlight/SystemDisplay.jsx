import { SystemDisplayConst } from "../../constants/Highlight/Blankpoint/SystemDisplay";
import { useLanguage } from "../../contexts/Language";

const dummySystem = "https://placehold.co/600x300";

const SystemDisplay = () => {
  const { language } = useLanguage();
  const systemDisplay = SystemDisplayConst(language);

  return (
    <section className="bg-white py-20 px-4 md:px-0 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        <h2 className="text-[#6C4EC3] text-3xl md:text-4xl font-bold mb-12">
          {systemDisplay[0].title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-400 rounded-xl h-64 flex items-center justify-center"
            >
              <img
                src={dummySystem}
                alt={`System Screenshot ${i + 1}`}
                className="object-cover w-full h-full rounded-xl opacity-60"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SystemDisplay;
