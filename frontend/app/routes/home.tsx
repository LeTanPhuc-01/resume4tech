import type { Route } from "./+types/home";
import { Hero } from "~/components/landing/Hero";
import { Cta } from "~/components/landing/CTA";
import { Footer } from "~/components/landing/Footer";
import { EmailForm } from "~/components/landing/EmailForm";
import { HowItWorks } from "~/components/landing/HowItWorks";
import { TheHurdle } from "~/components/landing/TheHurdle";
import { FAQ } from "~/components/landing/FAQ";
import { ScrollToTop } from "~/components/landing/ScrollToTop";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Resume4Tech - Make dreams come true" },
    { name: "description", content: "Welcome to the first resume evaluation service for Junior devs!" },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <TheHurdle />
      {/* <About /> */}
      <HowItWorks />
      <Cta />
      <EmailForm />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );

}

