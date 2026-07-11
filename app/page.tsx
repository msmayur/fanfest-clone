import About from "./components/About";
import ApplicationForm from "@/app/components/ApplicationForm";

import Benefits from "./components/Benefits";
import Eligibility from "./components/Eligibility";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline";


export default function Home() {
  return (
    <main className="bg-[#090909] text-white">
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <Eligibility/>
      <Timeline/>
      <ApplicationForm/>
      <FAQ/>
      <Footer/>
    </main>
  );
}