
import { Program } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";



interface ProgramCardProps {
  program: Program;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  return (
    <div className="bg-whiteBackground rounded-lg shadow-lg mt-2 w-full h-full">
      <Image
        width={500}
        height={388}
        src={program.image}
        alt={program.title}
        className="rounded-md mb-4 w-full object-cover h-48 md:h-56 lg:h-72"
      />
      <div className="flex flex-col px-4 space-y-3 items-start py-4">
        <h3
          className={`font-bold text-lg md:text-xl text-left font-sans `}
        >
          {program.title}
        </h3>
        <p
          className={`text-paratext text-sm md:text-base mb-4 text-justify font-normal font-mono `}
        >
          {program.description}
        </p>
        <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 font-sans">
          <Link href={`programe/${program.slug}`}>{program.buttonText}</Link>
        </button>
      </div>
    </div>
  );
};

export default ProgramCard;
