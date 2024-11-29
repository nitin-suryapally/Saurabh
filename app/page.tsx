import ContactForm from "./_components/contact/ContactForm";
import Hero from "./_components/hero/Hero";
import Programes from "./_components/programes/Programes";
import Testimonials from "./_components/testimonials/Testimonials";
import Whyme from "./_components/wheme/WhyMe";
import { whyMeData } from "@/constant";

export default function Home() {
  return (
    <main className="flex flex-col items-center mx-auto">
      <Hero />
      <Whyme data={whyMeData} />
      <Testimonials />
      <Programes />
      <ContactForm />
    </main>
  );
}
