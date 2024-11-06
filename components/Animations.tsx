"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Animations = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    // Check if sectionRef is not null before running the animation
    if (sectionRef.current) {
      gsap.to(sectionRef.current, {
        opacity: 0,
        duration: 2,
      });
    }
  }, []); // Run only once on mount

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full bg-black/30 flex items-center justify-center"
    >
      {/* Add any content inside the section if needed */}
    </section>
  );
};

export default Animations;
