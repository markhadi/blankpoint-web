import { FeatureConst } from "../../constants/Highlight/Blankpoint/Feature";
import { useLanguage } from "../../contexts/Language";

const Feature = () => {
  const { language } = useLanguage();
  const featureConst = FeatureConst(language);

  return (
    <section className="bg-white py-20 px-4 md:px-0 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        <h2 className="text-[#6C4EC3] text-3xl md:text-4xl font-bold mb-12">
          Feature
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featureConst.map((feature) => (
            <div
              className="flex flex-col items-start text-left"
              key={feature.title}
            >
              <div className="bg-[#6C4EC3] text-white text-4xl rounded-xl w-16 h-16 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Feature;
