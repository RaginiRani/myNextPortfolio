import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className="pt-20"/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact />
      <Footer/>
    </>
  );
}
