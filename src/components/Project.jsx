import { AnotherProject } from './AnotherProject';
import { HighlightProject } from './HighlightProject';

export const Project = () => {
  return (
    <section
      id="project"
      className="w-full pt-20 pb-20 xl:pb-40 bg-white flex gap-5 xl:gap-20 flex-col justify-start items-center overflow-hidden"
    >
      <HighlightProject />
      <AnotherProject />
    </section>
  );
};
