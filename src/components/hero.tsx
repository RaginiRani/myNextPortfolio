"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/Spotlight";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white px-20 pt-20 overflow-hidden">
      {/* Background glow */}
      <Spotlight />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2">
        
        {/* LEFT: Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-start"
        >
          <div className="relative h-64 w-64 rounded-full border-4 border-[#617a39]/80 overflow-hidden shadow-[0_0_40px_rgba(97,122,57,0.35)] transition-transform duration-300 hover:scale-105">
            <Image
              src="/portfolio_pic.png"
              alt="Profile photo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* RIGHT: Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="pt-6"
        >
          <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#617a39] to-[#8fae5d] bg-clip-text text-transparent">
            Ragini Rani
          </h1>

          <p className="mt-3 text-lg font-medium text-gray-700">
            Frontend Developer • UI Engineer
          </p>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-600">
            I build clean, responsive, and user-focused web interfaces using
            modern frontend technologies.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex gap-4">
  {/* View Projects Button */}
  <button
    onClick={() => {
      const projectsSection = document.querySelector("#projects");
      projectsSection?.scrollIntoView({ behavior: "smooth" });
    }}
    className="rounded-xl bg-[#617a39] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#51652f]"
  >
    View Projects
  </button>

  {/* Contact Me Button */}
  <button
    onClick={() => {
      const contactSection = document.querySelector("#contact");
      contactSection?.scrollIntoView({ behavior: "smooth" });
    }}
    className="rounded-xl border border-[#617a39] px-6 py-3 text-sm font-semibold text-[#617a39] transition hover:bg-[#617a39]/10"
  >
    Contact Me
  </button>
</div>

        </motion.div>
      </div>
    </section>
  );
}
