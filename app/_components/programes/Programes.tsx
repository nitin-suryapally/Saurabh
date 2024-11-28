import { programsData } from "@/constant";
import ProgramSlideshow from "./ProgramSlideshow";

const Programes = () => {
  return (
    <section className="bg-white w-full" id="recentWork">
      <ProgramSlideshow programs={programsData} />
    </section>
  );
};

export default Programes;
