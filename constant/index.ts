// navbar
export const navitem = [
  {
    item: "Home",
    href: "/",
  },
  {
    item: "Why Me",
    href: "#whyme",
  },
  {
    item: "Testimonials",
    href: "#testimonials",
  },
  {
    item: "Recent work",
    href: "#recentWork",
  },
  {
    item: "Get In Touch",
    href: "#getintouch",
  },
];

import {
  client_img1,
  client_img2,
  client_img3,
  client_img4,
  help_you_with,
  how,
  programe1_image,
  programe2_image,
  programe_1_banner_image,
  what_i_provide,
} from "@/utils";
import { Program, TestimonialsData, WhyMeDataI } from "@/types";

export const whyMeData: WhyMeDataI = {
  title: "Why Me?",
  description:
    "Solving user & business problems since last 15+ years. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  sections: [
    {
      title: "What I Provide",
      bullets: [
        "Understand You – Dig into You a little bit - old habits, influences, bias, culture, known/unknown gaps, basically uncover The Stuck in You.",
        "Focus on the Now – Be completely aware of what is Really causing you to not move forward in life.",
        "Come up with a Vision and an Executable Plan for the future.",
      ],
      imageSrc: what_i_provide,
    },
    {
      title: "Help You With",
      bullets: [
        "A deeper understanding of how fear is wired in your brain and body, and how you can take control back from fear to stop it from holding you back.",
        "A sense of acceptance and appreciation for who you are, allowing you to relax and fully enjoy your life.",
        "Healing from the past and releasing feelings of guilt, shame, blame, and regret.",
        "To transform difficult workspace relationships.",
      ],
      imageSrc: help_you_with,
    },
    {
      title: "How",
      bullets: [
        "Individual Coaching - 1 on 1 Virtual or In-Person Coaching",
        "Group Coaching",
        "Create a Strong Team",
        "Enable your Associates",
        "Build Confidence",
        "Organizational Goals",
      ],
      imageSrc: how,
    },
  ],
};

export const testimonialsData: TestimonialsData = {
  title: "Testimonials",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  testimonials: [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientName: "Client Name",
      clientImage: client_img1,
    },
    {
      id: 2,
      text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientName: "Client Name",
      clientImage: client_img2,
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientName: "Client Name",
      clientImage: client_img3,
    },
    {
      id: 4,
      text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientName: "Client Name",
      clientImage: client_img4,
    },
  ],
};

export const programsData: Program[] = [
  {
    id: 1,
    image: programe1_image,
    title: "Slow down to pace up! (Intensive)",
    description:
      "This is a short, but foundational, journey for you to start transforming your mindset - because it all starts there!",
    buttonText: "Know more",
    slug: "Slow-down-to-pace-up",
    pageDetails: {
      pageTitle: "Slow down to pace up!",
      bannerImage: programe_1_banner_image,
      subheading:
        "This is a short, but foundational, journey for you to start transforming your mindset - because it all starts there!",
      whyMeData: {
        title: "Why Choose This Program?",
        description:
          "I am a Certified Personal and Executive Coach (fancy way of saying that I am a Life Coach++). A Certified Mindfulness-Based Stress Reduction(MBSR) practitioner which empowers me to help you cope with stress and improve your well-being. And a proud Meditator!",
        sections: [
          {
            title: "I can help You",
            bullets: [
              "understand and control fear to stop it from holding you back",
              "Understand the importance of a balanced approach.",
              "heal from the past and release guilt, shame, and regret",
              "build a supportive network and set healthy boundaries",
            ],
            imageSrc: what_i_provide,
          },
          {
            title: "Simple 3-step Plan",
            bullets: [
              "Understand You - Dig into You a little bit - old habits, influences, bias, culture, known/unknown gaps, basically uncover the Stuck in You.",
              "Focus on the Now - Be completely aware of what is Really causing you to not move forward in life.",
              "Plan the Future - Come up with a Vision and an Executable Plan for the future.",
            ],
            imageSrc: help_you_with,
          },
          {
            title: "Put in Action through",
            bullets: [
              "Individual Coaching - 1 on 1 Virtual or In-Person Coaching",
              "Group Coaching",
              "Create a Strong Team",
              "Enable your Associates",
              "Build Confidence",
            ],
            imageSrc: how,
          },
        ],
      },
    },
  },
  {
    id: 2,
    image: programe2_image,
    title: "Handle life challenges intentionally",
    description:
      "This would significantly shift how you think, how you make decisions, and operate in your business and personal life.",
    buttonText: "Know more",
    slug: "Handle-life-challenges-intentionally",
    pageDetails: {
      pageTitle: "Handle Life Challenges Intentionally",
      bannerImage: programe_1_banner_image,
      subheading:
        "This is a short, but foundational, journey for you to start transforming your mindset - because it all starts there!",
      whyMeData: {
        title: "Why Choose This Program?",
        description:
          "I am a Certified Personal and Executive Coach (fancy way of saying that I am a Life Coach++). A Certified Mindfulness-Based Stress Reduction(MBSR) practitioner which empowers me to help you cope with stress and improve your well-being. And a proud Meditator!",
        sections: [
          {
            title: "I can help You",
            bullets: [
              "understand and control fear to stop it from holding you back",
              "Understand the importance of a balanced approach.",
              "heal from the past and release guilt, shame, and regret",
              "build a supportive network and set healthy boundaries",
            ],
            imageSrc: what_i_provide,
          },
          {
            title: "Simple 3-step Plan",
            bullets: [
              "Understand You - Dig into You a little bit - old habits, influences, bias, culture, known/unknown gaps, basically uncover the Stuck in You.",
              "Focus on the Now - Be completely aware of what is Really causing you to not move forward in life.",
              "Plan the Future - Come up with a Vision and an Executable Plan for the future.",
            ],
            imageSrc: help_you_with,
          },
          {
            title: "Put in Action through",
            bullets: [
              "Individual Coaching - 1 on 1 Virtual or In-Person Coaching",
              "Group Coaching",
              "Create a Strong Team",
              "Enable your Associates",
              "Build Confidence",
            ],
            imageSrc: how,
          },
        ],
      },
    },
  },
  // Add more programs as needed
];
