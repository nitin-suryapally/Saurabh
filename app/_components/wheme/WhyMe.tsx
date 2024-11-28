"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface WhyMeSection {
  title: string;
  bullets: string[];
  imageSrc: string;
}

interface WhyMeDataI {
  title: string;
  description: string;
  sections: WhyMeSection[];
}

interface WhymeProps {
  data: WhyMeDataI;
}

const Whyme: React.FC<WhymeProps> = ({ data }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const sectionItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const description = descriptionRef.current;

    if (section && title && description) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play pause resume reset",
        },
      });

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

  return (
    <section ref={sectionRef} className="bg-white w-full" id="whyme">
      <div className="section-style">
        <div className="max-w-6xl mx-auto">
          <h1
            ref={titleRef}
            className={` heading font-extrabold text-center mb-6 text-black`}
          >
            {data.title}
          </h1>
          <p
            ref={descriptionRef}
            className={`text-center mb-8 text-paratext font-normal paragraph-style mx-auto`}
          >
            {data.description}
          </p>

          {data.sections.map((section, index) => (
            <div
              key={index}
              ref={(el) => {
                sectionItemsRef.current[index] = el;
              }}
              className={`mb-12 flex flex-col-reverse gap-4 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center align-top`}
            >
              <div className="md:w-1/2 px-4">
                <h2
                  className={`text-xl md:text-3xl font-extrabold mb-4 font-sans text-black`}
                >
                  {section.title}
                </h2>
                <ul
                  className={`list-disc ml-5 space-y-2 text-paratext font-mono text-base font-medium md:text-lg`}
                >
                  {section.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>

              <div className="md:w-1/2 px-4 mt-6 md:mt-0">
                <Image
                  width={575}
                  height={388}
                  src={section.imageSrc}
                  alt={section.title}
                  className="w-full rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whyme;
