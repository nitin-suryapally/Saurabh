"use client";
import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HeroCardProps {
  title: string;
  subheading: string;
  image: StaticImageData;
}

const HeroCard: React.FC<HeroCardProps> = ({ title, subheading, image }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

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
    }
  }, []);
  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center h-[60vh] md:h-[80vh] "
    >
      {/* Background Image using next/image */}
      <Image
        src={image}
        alt={title}
        layout="fill" // Fill the entire container
        objectFit="cover" // Cover the entire container area
        objectPosition="center" // Center the image
        className="-z-10" // Make sure the image is behind the overlay and text
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 -z-10"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-10">
        <h1
          ref={titleRef}
          className={`text-3xl md:text-5xl font-bold text-white mb-4 font-sans`}
        >
          {title}
        </h1>
        <p
          ref={descriptionRef}
          className={`text-lg md:text-xl text-white max-w-2xl mx-auto font-normal font-mono`}
        >
          {subheading}
        </p>
      </div>
    </section>
  );
};

export default HeroCard;
