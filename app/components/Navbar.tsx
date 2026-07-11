"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <Link href="/" className="select-none">
          <h1 className="text-3xl font-black uppercase tracking-tight">
            <span className="text-white">FAN</span>
            <span className="text-[#ff4747]">FEST</span>
            <span className="text-white"> 2026</span>
          </h1>
        </Link>

        {/* Apply Button */}
        <button
          href="#apply"
          className="
          rounded-full
          bg-[#ff4747]
          px-7
          py-3
          text-base
          font-semibold
          text-white
          transition-all
          duration-300
          hover:scale-105
          hover:bg-[#ff5d5d]
          active:scale-95
        "
        >
          Apply Now
        </button>

      </div>
    </motion.header>
  );
}
