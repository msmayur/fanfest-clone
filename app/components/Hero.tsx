"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#090909] pt-32">
      {/* Top Red Glow */}
      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-red-700/20 blur-[180px]" />

      {/* Bottom Orange Glow */}
      <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-orange-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">

        {/* Small Badge */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 text-xs uppercase tracking-[0.35em] text-[#ff5a5a] md:text-sm"
        >
          🎬 OPEN APPLICATIONS — LIMITED SPOTS
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-black uppercase leading-none"
        >
          <span className="block text-white text-6xl sm:text-7xl md:text-8xl lg:text-[8rem]">
            CREATE.
          </span>

          <span className="block text-[#ff4747] text-6xl sm:text-7xl md:text-8xl lg:text-[8rem]">
            CONNECT.
          </span>

          <span className="block text-white text-6xl sm:text-7xl md:text-8xl lg:text-[8rem]">
            DOMINATE.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 max-w-3xl text-lg leading-9 text-zinc-400 md:text-xl"
        >
          FanFest 2026 is calling on creators like you to be part of the
          biggest fan-powered event of the year. Share your world, grow your
          audience, and make history.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-col gap-5 sm:flex-row"
        >
          <button className="rounded-full bg-[#ff4747] px-10 py-4 text-lg font-semibold text-white transition hover:scale-105 hover:bg-[#ff5959]">
            Apply as a Creator
          </button>

          <button className="rounded-full border border-zinc-700 px-10 py-4 text-lg text-white transition hover:border-zinc-500 hover:bg-white/5">
            Learn More
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-24 grid w-full max-w-5xl grid-cols-2 gap-10 md:grid-cols-4"
        >
          <Stat number="AUG 14–16" label="EVENT DATES" />
          <Stat number="2026" label="EDITION" />
          <Stat number="50K+" label="EXPECTED FANS" />
          <Stat number="200+" label="CREATOR SPOTS" />
        </motion.div>

      </div>
    </section>
  );
}

function Stat({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-black text-orange-400 md:text-4xl">
        {number}
      </h2>

      <p className="mt-2 text-xs tracking-[0.3em] text-zinc-500">
        {label}
      </p>
    </div>
  );
}