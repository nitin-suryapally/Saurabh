import { IBM_Plex_Mono, Raleway } from "next/font/google";

export const ibmPlexMono = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibmPlexMono",
});

export const raleway = Raleway({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-raleway",
});
