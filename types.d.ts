import { StaticImageData } from "next/image";

export interface WhyMeDataI {
  title: string;
  description: string;
  sections: {
    title: string;
    bullets: string[];
    imageSrc: string;
  }[];
}

export interface Testimonial {
  id: number;
  text: string;
  clientName: string;
  clientImage: string;
}

export interface TestimonialsData {
  title: string;
  description: string;
  testimonials: Testimonial[];
}

export interface Program {
  id: number;
  image: string;
  title: string;
  description: string;
  buttonText: string;
  slug: string;
  pageDetails: {
    pageTitle: string;
    bannerImage:StaticImageData
    subheading: string;
    whyMeData: WhyMeDataI;
  };
}
