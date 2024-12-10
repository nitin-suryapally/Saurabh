"use client"; // Ensures the component is rendered on the client side
import { useParams } from "next/navigation";
import React from "react";

import { Program } from "@/types";
import { programsData } from "@/constant";
import Whyme from "../_components/wheme/WhyMe";
import HeroCard from "../_components/progamesPage/HeroCard";

const ProgramePage: React.FC = () => {
  // Using the `useParams` hook to get the slug from the URL
  const { slug } = useParams();

  // Find the program that matches the slug
  const program = programsData.find((p: Program) => p.slug === slug);

  // If no program is found, display a message
  if (!program) {
    return <div className="text-center mt-20">Program not found</div>;
  }

  return (
    <div className="flex flex-col space-y-8 md:space-y-16 mx-auto w-full">
      {/* Pass the program details to the HeroCard component */}
      <HeroCard
        title={program.pageDetails.pageTitle}
        subheading={program.pageDetails.subheading}
        image={program.pageDetails.bannerImage}
      />
      <Whyme data={program.pageDetails.whyMeData} />
    </div>
  );
};

export default ProgramePage;
