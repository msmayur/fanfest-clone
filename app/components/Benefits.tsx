"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    number: "01",
    title: "VIP Creator Pass",
    description:
      "Enjoy full access to exclusive lounges, creator-only networking events, and premium experiences throughout FanFest 2026.",
  },
  {
    number: "02",
    title: "Brand Partnership Opportunities",
    description:
      "Meet leading brands looking to collaborate with creators through campaigns, sponsorships, and long-term partnerships.",
  },
  {
    number: "03",
    title: "Massive Exposure",
    description:
      "Your content reaches thousands at the venue and millions more through official live streams and social media coverage.",
  },
  {
    number: "04",
    title: "Exclusive Merchandise",
    description:
      "Receive limited-edition creator merchandise, backstage gifts, and event-exclusive collectibles.",
  },
  {
    number: "05",
    title: "Networking Sessions",
    description:
      "Connect with fellow creators, agencies, production teams, and industry professionals to grow your network.",
  },
  {
    number: "06",
    title: "Creator Awards",
    description:
      "Stand a chance to be featured and recognized during the closing ceremony for outstanding community impact.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-[#0b0b0d] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#ff4d4d]">
          WHY JOIN?
        </p>

        <h2 className="max-w-3xl text-5xl font-black uppercase leading-tight md:text-6xl">
          WHAT YOU GET
        </h2>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => (
            <BenefitCard key={index} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
}

function BenefitCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-zinc-800
        bg-gradient-to-br
        from-[#17171b]
        to-[#101012]
        p-8
        transition
        hover:border-red-500/40
      "
    >
      {/* Number */}
      <div className="absolute right-8 top-8 text-5xl font-black text-red-500/20">
        {number}
      </div>

      <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/15 text-xl font-bold text-red-400">
        {number}
      </div>

      <h3 className="mb-4 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="leading-8 text-zinc-400">
        {description}
      </p>

      {/* Glow */}
      <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-red-500/10 blur-3xl" />
    </motion.div>
  );
}