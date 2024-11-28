"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);

const ContactForm: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          from_name: form.name,
          to_name: "Nitin Suryapally",
          from_email: form.email,
          to_email: "suryapally04@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you for your message 😃");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("I didn't receive your message 😢");
        }
      );
  };

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const description = descriptionRef.current;
    const button = buttonRef.current;
    const form = formRef.current;

    if (section && title && description && button && form) {
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
      )
        .fromTo(
          description,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          form,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          button,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
          "-=0.5"
        );
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      id="getintouch"
      className="text-white p-6 flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8 max-w-6xl w-full mx-auto h-full"
    >
      <div className="flex-1 pr-4 md:pr-8 h-full">
        <div className="w-full flex flex-col justify-between space-y-6 md:space-y-8 h-full">
          <h2
            ref={titleRef}
            className={`text-2xl md:text-4xl font-bold text-left mb-6 font-sans text-white`}
          >
            Let’s unleash your potential and conquer your barriers.
          </h2>
          <p
            ref={descriptionRef}
            className={`text-left mb-8 text-white leading-loose paragraph-style max-w-lg`}
          >
            Kudos! You have taken the first step towards life empowerment. I am
            here to guide you at EVERY STEP. Do not hesitate to just set up your
            FREE CONSULTATION below or send me a private message for any
            clarifications.
          </p>
          <button
            ref={buttonRef}
            className="bg-green-600 hover:bg-green-700 text-white py-3 font-sans px-6 rounded-lg font-semibold shadow-md transition duration-300"
          >
            FREE 1:1 DISCOVERY SESSION &gt;
          </button>
        </div>
      </div>
      <form
        ref={formRef}
        className="flex-1 space-y-4 w-full"
        onSubmit={handleSubmit}
      >
        <div className="text-white">
          <label className={`block text-sm font-medium mb-1 font-sans `} htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={form.name}
            onChange={handleInputChange}
            className={`w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600 font-mono `}
            placeholder="Please enter your name"
          />
        </div>
        <div>
          <label className={`block text-sm font-medium mb-1 font-sans `} htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={form.email}
            onChange={handleInputChange}
            className={`w-full p-2 border font-mono border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600 `}
            placeholder="Please enter your email"
          />
        </div>
        <div>
          <label className={`block text-sm font-medium mb-1 font-sans`} htmlFor="phone">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            className={`w-full p-2 border font-mono border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600 `}
            placeholder="Enter mobile"
          />
        </div>
        <div>
          <label
            className={`block text-sm font-medium mb-1 font-sans `}
            htmlFor="message"
          >
            Private Message
          </label>
          <textarea
            id="message"
            value={form.message}
            onChange={handleInputChange}
            className={`w-full p-2 border font-mono border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600`}
            placeholder="Enter your message"
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 font-sans text-white py-3 px-6 rounded-lg font-semibold shadow-md transition duration-300"
        >
          {loading ? "Sending..." : "Submit >"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
