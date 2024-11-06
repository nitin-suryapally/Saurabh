import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Programes from "@/components/Programes";
import Testimonials from "@/components/Testimonials";
import Whyme from "@/components/Whyme";
import { whyMeData } from "@/constants";

export default function Home() {
  return (
    <main className="flex flex-col space-y-8 md:space-y-16 mx-auto">
      <Hero />
      <Whyme data={whyMeData} />
      <Testimonials />
      <Programes />
      <ContactForm />
      <Footer />
    </main>
  );
}
