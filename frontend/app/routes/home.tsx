import type { Route } from "./+types/home";
import { Hero } from "~/components/landing/Hero";
import { Cta } from "~/components/landing/CTA";
import { Footer } from "~/components/landing/Footer";
import { Newsletter } from "~/components/landing/EmailForm";
import { Navbar } from "~/components/landing/NavBar";
import { HowItWorks } from "~/components/landing/HowItWorks";
import { TheHurdle } from "~/components/landing/TheHurdle";
import { FAQ } from "~/components/landing/FAQ";
import { ScrollToTop } from "~/components/landing/ScrollToTop";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TheHurdle />
      {/* <About /> */}
      <HowItWorks />
      <Cta />
      <Newsletter />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );

}
