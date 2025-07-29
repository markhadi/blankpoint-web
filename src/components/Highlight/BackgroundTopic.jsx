import {
  BackgroundTopicConst,
  BackgroundTopicList,
} from "../../constants/Highlight/Blankpoint/BackgroundTopic";
import { useLanguage } from "../../contexts/Language";

const highlight = "/highlight.png";

const BackgroundTopic = () => {
  const { language } = useLanguage();
  const backgroundTopic = BackgroundTopicConst(language);
  const backgroundTopicList = BackgroundTopicList(language);

  return (
    <>
      <section className="w-full pt-20 xl:pt-24 xl:pb-[120px] flex justify-center items-center overflow-hidden bg-white px-4">
        <div className="w-full max-w-6xl flex flex-col xl:flex-row gap-5 justify-between items-center">
          <div
            data-aos="fade-right"
            className="w-full xl:max-w-[clamp(300px,13rem+21.56vw,570px)] max-h-[400px] xl:max-h-[clamp(300px,17.15rem+8vw,428px)] relative rounded-xl overflow-hidden"
          >
            <img
              src={highlight}
              alt="A group of people working together using a laptop"
              className="object-cover w-full"
            />
          </div>

          <div
            data-aos="fade-left"
            className="w-full xl:max-w-[677px] flex flex-1 flex-col items-center justify-center xl:justify-start xl:items-start gap-5"
          >
            <h2 className="text-[#6C4EC3] text-3xl md:text-4xl font-bold">
              {backgroundTopic[0].title}
            </h2>
            <p className="text-gray-700">{backgroundTopic[0].description}</p>
          </div>
        </div>
      </section>

      <section className="w-full pt-20 xl:pt-24 xl:pb-[120px] flex justify-center items-center overflow-hidden bg-white px-4">
        <div className="w-full max-w-6xl flex flex-col xl:flex-row gap-5 justify-between items-center">
          <div
            data-aos="fade-left"
            className="w-full xl:max-w-[677px] flex flex-1 flex-col items-center justify-center xl:justify-start xl:items-start gap-5"
          >
            <h2 className="text-[#6C4EC3] text-3xl md:text-4xl font-bold">
              {backgroundTopic[1].title}
            </h2>
            <p className="text-gray-700">{backgroundTopic[1].description}</p>
          </div>
        </div>
      </section>

      <section className="w-full pt-20 xl:pt-24 xl:pb-[120px] flex justify-center items-center overflow-hidden bg-white px-4">
        <div className="w-full max-w-6xl flex flex-col xl:flex-row gap-5 justify-between items-center">
          <div
            data-aos="fade-left"
            className="w-full xl:max-w-[677px] flex flex-1 flex-col items-center justify-center xl:justify-start xl:items-start gap-5"
          >
            <h2 className="text-[#6C4EC3] text-3xl md:text-4xl font-bold">
              {backgroundTopic[2].title}
            </h2>
            <p className="text-gray-700 mr-auto">
              {backgroundTopic[2].descriptionList}
            </p>
            <ul className="list-disc text-gray-700 ml-4 mr-auto">
              {backgroundTopicList.map((btl) => (
                <li key={btl}>{btl}</li>
              ))}
            </ul>
            <p className="text-gray-700">{backgroundTopic[2].description}</p>
          </div>
        </div>
      </section>
    </>
  );
};
export default BackgroundTopic;
