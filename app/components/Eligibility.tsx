"use client";

import { motion } from "framer-motion";
import {
  Users,
  Camera,
  Sparkles,
  Globe,
} from "lucide-react";

const eligibility = [
  {
    icon: Users,
    title: "Active Content Creators",
    description:
      "You should consistently create content on platforms like YouTube, Instagram, Twitch, TikTok or similar.",
  },
  {
    icon: Camera,
    title: "Passion For Community",
    description:
      "We welcome creators who actively engage with their audience and enjoy building meaningful communities.",
  },
  {
    icon: Sparkles,
    title: "Original Content",
    description:
      "Your content should be authentic, creative and aligned with FanFest's positive community values.",
  },
  {
    icon: Globe,
    title: "Available During Event",
    description:
      "Applicants must be available to participate throughout the official FanFest 2026 event schedule.",
  },
];

export default function Eligibility() {
  return (
    <section className="relative bg-[#0a0a0b] py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Tag */}
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-red-500">
          WHO CAN APPLY?
        </p>

        {/* Heading */}
        <h2 className="max-w-3xl text-5xl font-black uppercase leading-tight text-white md:text-6xl">
          Eligibility
        </h2>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          We welcome creators who actively engage with their audience and enjoy building meaningful communities.
        </p>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {eligibility.map((item, index) => (
            <EligibilityCard key={index} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
}

type CardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
};

function EligibilityCard({
  icon: Icon,
  title,
  description,
}: CardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{ duration: 0.25 }}
      className="
      rounded-3xl
      border
      border-zinc-800
      bg-[#121214]
      p-8
      transition-all
      duration-300
      hover:border-red-500/40
      hover:bg-[#17171b]
      "
    >
      <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10">
        <Icon
          size={30}
          className="text-red-500"
        />
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