import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workshop",
  description: "Descipr | Workshop",
};

export default function programe({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex flex-col space-y-8 md:space-y-16 mx-auto w-full">
      {children}
      <ContactForm />
      <Footer />
    </section>
  );
}
