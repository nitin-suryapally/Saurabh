"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { Profile_pic } from "@/utils";

const Hero = () => {
  const textRefs = useRef<(HTMLElement | null)[]>([]);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    tl.from(textRefs.current, {
      opacity: 0,
      y: 20,
      stagger: 0.2,
    }).fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1 },
      "-=0.5"
    );
  }, []);

  return (
    <section className="w-full ">
      <div className="section-style flex flex-col-reverse md:flex-row items-center justify-center">
        <div className="flex-1 text-white space-y-6">
          <h1
            ref={(el) => {
              if (el) textRefs.current[0] = el;
            }}
            className={`heading`}
          >
            Progress Partner: Conquering Limits, Creating Opportunities
          </h1>
          <p
            ref={(el) => {
              if (el) textRefs.current[1] = el;
            }}
            className={`text-base md:text-2xl font-semibold font-mono`}
          >
            Getting you desired Personal, Professional and Spiritual Results
          </p>
          <div
            ref={(el) => {
              if (el) textRefs.current[2] = el;
            }}
            className={`space-y-4 paragraph-style text-navText`}
          >
            <p className="text-sm md:text-lg">
              With over 20 years in the corporate world and winning over
              personal challenges, I’ve learned from thousands of individuals in
              professional and social circles globally. These experiences have
              shaped me into a better person - one encounter at a time.
            </p>
            <p className="text-base md:text-lg">
              I’m here to offer the wisdom I’ve gained from my remarkable
              experience. Whether you’re stuck in your career, at a life
              transition, facing societal prejudices, or searching for meaning,
              I can help.
            </p>
          </div>

          <button
            ref={buttonRef}
            className={`mt-4 inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition shadow-md hover:shadow-lg text-base md:text-lg font-sans`}
          >
            FREE 1:1 DISCOVERY SESSION
            <span className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </button>
        </div>

        <div className="flex-1 flex justify-center mb-8 md:mb-0 items-center">
          <div className="w-64 h-64 md:w-96 md:h-96 relative rounded-full overflow-hidden">
            <Image
              src={Profile_pic}
              alt="Profile picture"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
