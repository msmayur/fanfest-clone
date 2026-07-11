"use client";

import { motion } from "framer-motion";

const features = [
  {
    emoji: "🎤",
    title: "Live Panels & Talks",
    description:
      "Host your own stage session, Q&A, or join a creator roundtable. Real conversations with your real fans.",
  },
  {
    emoji: "📸",
    title: "Meet & Greet Booths",
    description:
      "Dedicated creator booths where fans can interact, take photos, and grab exclusive merchandise.",
  },
  {
    emoji: "🤝",
    title: "Brand Collaborations",
    description:
      "Connect with top-tier sponsors looking for authentic creator partnerships during the event.",
  },
  {
    emoji: "🎮",
    title: "Live Content Challenges",
    description:
      "Compete in cross-creator content battles, streamed live for the audience and judged by fans.",
  },
  {
    emoji: "🌐",
    title: "Global Streaming Reach",
    description:
      "The entire event is live-streamed to millions worldwide — your content extends far beyond the venue.",
  },
  {
    emoji: "🎉",
    title: "Creator After-Party",
    description:
      "An exclusive closing night celebration — network, celebrate, and create memories off-camera too.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[#111113] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#ff4b4b]">
          What is FanFest 2026
        </p>

        <h2 className="max-w-2xl text-5xl font-black uppercase leading-tight text-white md:text-6xl">
          Where Creators
          <br />
          Meet Their Fans
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-9 text-zinc-400">
          Three days of panels, activations, live streams, brand
          collaborations, and unforgettable fan moments — all under one roof.
        </p>

        <div className="mt-20 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

      </div>
    </section>
  );
}

function FeatureCard({
  emoji,
  title,
  description,
}: {
  emoji: string;
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
        rounded-3xl
        border
        border-zinc-800
        bg-[#1a1a1f]
        p-8
        transition
        hover:border-[#ff4b4b]/40
      "
    >
      <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#3a1d23] text-3xl">
        {emoji}
      </div>

      <h3 className="mb-4 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="leading-8 text-zinc-400">
        {description}
      </p>
    </motion.div>
  );
}
