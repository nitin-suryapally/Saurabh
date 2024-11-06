"use client";
import React, { useEffect, useRef, useState } from "react";
import ProgramCard from "./ProgramCard";
import { IBM, ralway } from "@/app/fonts";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Program } from "@/types";

gsap.registerPlugin(ScrollTrigger);



interface ProgramSlideshowProps {
  programs: Program[];
}

const ProgramSlideshow: React.FC<ProgramSlideshowProps> = ({ programs }) => {
  const [current, setCurrent] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(1);

  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ulRef = useRef<HTMLUListElement>(null); // Ref for the ul element
  const prevButtonRef = useRef<HTMLButtonElement>(null); // Ref for the previous button
  const nextButtonRef = useRef<HTMLButtonElement>(null); // Ref for the next button
  const sectionItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const length = programs.length;
  const maxIndex = Math.ceil(length / cardsPerPage) - 1;

  useEffect(() => {
    // Update cardsPerPage based on screen width
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerPage(2); // Large screens
      } else {
        setCardsPerPage(1); // Small and medium screens
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const description = descriptionRef.current;
    const ul = ulRef.current;
    const prevButton = prevButtonRef.current;
    const nextButton = nextButtonRef.current;

    if (section && title && description && ul && prevButton && nextButton) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play pause resume reset",
        },
      });

      // Animate title and description
      tl.fromTo(
        title,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      ).fromTo(
        description,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.5"
      );

      // Animate ul element
      tl.fromTo(
        ul,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.5"
      );

      // Animate navigation buttons
      tl.fromTo(
        prevButton,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        "-=0.3"
      ).fromTo(
        nextButton,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        "-=0.3"
      );

      // Animate section items
      sectionItemsRef.current.forEach((item, index) => {
        if (item) {
          tl.fromTo(
            item,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
            `-=${0.5 - index * 0.1}`
          );
        }
      });
    }
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  return (
    <section
      ref={sectionRef}
      className="container mx-auto text-center px-4 sm:px-6 lg:px-8 text-black relative"
    >
      <h2
        ref={titleRef}
        className={`text-2xl md:text-4xl font-bold mb-6 text-center ${ralway.className}`}
      >
        Program in Execution
      </h2>
      <div className="flex flex-col w-full max-w-5xl mx-auto mb-6">
        <p
          ref={descriptionRef}
          className={`${IBM.className} font-bold text-base md:text-lg text-left mb-2`}
        >
          I offer Programs for you if you are:
        </p>
        <ul
          ref={ulRef}
          className={`list-disc list-inside text-left max-w-6xl ${IBM.className} font-normal text-base md:text-lg text-paratext`}
        >
          <li>
            Stressed at work, relationships, or struggling with work/life
            balance.
          </li>
          <li>
            Women who are stressed due to societal prejudices, home/work
            balance, unreasonable expectations, or workplace bias.
          </li>
          <li>
            Teens seeking clarity in their personal relationships or
            professional careers.
          </li>
        </ul>
      </div>
      <div className="overflow-hidden relative max-w-5xl mx-auto">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-4 px-2"
          style={{
            transform: `translateX(-${current * (100 / cardsPerPage)}%)`,
          }}
        >
          {programs.map((program, index) => (
            <div
              key={index}
              ref={(el) => {
                sectionItemsRef.current[index] = el;
              }}
              className="w-full  flex-shrink-0"
              style={{ maxWidth: `${100 / cardsPerPage}%` }}
            >
              <ProgramCard program={program} />
            </div>
          ))}
        </div>
      </div>
      {/* Navigation Buttons */}
      <div className="mt-8 flex space-x-4 justify-center items-center">
        <button
          ref={prevButtonRef}
          onClick={prevSlide}
          className="bg-gray-300 p-2 rounded-full shadow-md hover:bg-gray-400"
        >
          <svg
            className="h-6 w-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          ref={nextButtonRef}
          onClick={nextSlide}
          className="bg-gray-300 p-2 rounded-full shadow-md hover:bg-gray-400"
        >
          <svg
            className="h-6 w-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ProgramSlideshow;
