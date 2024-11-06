
import React from "react";
import Image from "next/image";
import { Testimonial } from "@/types";
import { BsQuote } from "react-icons/bs";


interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-black p-8 rounded-lg border border-[#9C9C9C] space-y-4 flex flex-col justify-between relative w-full h-full">
      {/* Quote Icon */}
      <BsQuote className="h-10 w-10 text-white absolute -inset-4 left-2" />

      {/* Testimonial Text */}
      <p className="text-gray-300 text-lg leading-relaxed text-justify">
        {testimonial.text}
      </p>

      {/* Client Info */}
      <div className="flex items-center space-x-4">
        <Image
          src={testimonial.clientImage}
          alt={testimonial.clientName}
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="font-semibold text-white">
          {testimonial.clientName}
        </span>
      </div>
    </div>
  );
};

export default TestimonialCard;
