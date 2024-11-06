import { programsData } from "@/constants";
import ProgramSlideshow from "./ProgramSlideshow";

const programes = () => {
  return (
    <section className="py-8 bg-whiteBackground w-full" id="recentWork">
        
      <ProgramSlideshow programs={programsData} />
    </section>
  );
};

export default programes;
