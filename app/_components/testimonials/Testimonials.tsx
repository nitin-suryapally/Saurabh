"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TestimonialCard from "./TestimonialCard";
import { testimonialsData } from "@/constant";

gsap.registerPlugin(ScrollTrigger);

const Testimonials: React.FC = () => {
  const { title, description, testimonials } = testimonialsData;

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
    <section
      ref={sectionRef}
      className="text-white section-style"
      id="testimonials"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`heading mb-4`} ref={titleRef}>
          {title}
        </h2>
        <p
          className={`paragraph-style text-navText mb-12 `}
          ref={descriptionRef}
        >
          {description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              ref={(el) => {
                sectionItemsRef.current[index] = el;
              }}
            >
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
