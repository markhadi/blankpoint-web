import {
  GetInTouchConst,
  GetInTouchContact,
} from "../../constants/Highlight/Blankpoint/GetInTouch";
import { useLanguage } from "../../contexts/Language";

const dummyLaptop = "/laptop-no-table.png";

const GetInTouch = () => {
  const { language } = useLanguage();
  const getInTouch = GetInTouchConst(language);
  const getInTouchContacts = GetInTouchContact();

  return (
    <section className="bg-[#f7f7fb] py-20 px-4 md:px-0 flex flex-col items-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-12">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {getInTouch[0].title}
          </h2>
          <p className="text-gray-700 mb-8">{getInTouch[0].description}</p>
          <div className="flex flex-col sm:flex-row gap-6">
            {getInTouchContacts.map((gitc) => (
              <div
                className="bg-white rounded-xl shadow p-6 flex-1"
                key={gitc.name}
              >
                <div className="font-bold text-lg mb-1">{gitc.name}</div>
                <div className="text-gray-500 mb-2">{gitc.contact}</div>
                <a
                  href={gitc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6C4EC3] font-semibold"
                >
                  {gitc.linkName} &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src={dummyLaptop}
            alt="Laptop Contact"
            className="max-w-lg w-full"
          />
        </div>
      </div>
    </section>
  );
};
export default GetInTouch;
