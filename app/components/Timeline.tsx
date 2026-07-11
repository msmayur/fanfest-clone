"use client";

import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

const timeline = [
  {
    date: "JAN 10",
    title: "Applications Open",
    description:
      "Creator registrations officially begin. Submit your application and showcase your content.",
  },
  {
    date: "FEB 18",
    title: "Creator Selection",
    description:
      "Our team reviews every application and selects creators from different categories.",
  },
  {
    date: "MAR 01",
    title: "Confirmation",
    description:
      "Selected creators receive invitations along with event guidelines and onboarding details.",
  },
  {
    date: "AUG 14–16",
    title: "FanFest 2026",
    description:
      "Meet fans, collaborate with brands, create amazing content and enjoy the biggest creator event.",
  },
];

export default function Timeline() {
  return (
    <section className="bg-[#0d0d0f] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <p className="text-sm uppercase tracking-[0.35em] text-red-500">
          IMPORTANT DATES
        </p>

        <h2 className="mt-4 text-5xl font-black uppercase md:text-6xl">
          Timeline
        </h2>

        <p className="mt-6 max-w-2xl text-zinc-400 leading-8">
          Stay on track with the important milestones leading up to FanFest
          2026.
        </p>

        <div className="relative mt-20">

          {/* Vertical Line */}
          <div className="absolute left-6 top-0 h-full w-px bg-zinc-800 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-14">

            {timeline.map((item, index) => (
              <TimelineCard
                key={index}
                item={item}
                reverse={index % 2 === 1}
              />
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

type TimelineItem = {
  date: string;
  title: string;
  description: string;
};

function TimelineCard({
  item,
  reverse,
}: {
  item: TimelineItem;
  reverse: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`
        relative
        flex
        items-center
        ${reverse ? "md:flex-row-reverse" : ""}
      `}
    >
      {/* Content */}
      <div className="w-full md:w-1/2 md:px-12">

        <div
          className="
          rounded-3xl
          border
          border-zinc-800
          bg-[#151518]
          p-8
        "
        >
          <div className="mb-6 flex items-center gap-3">

            <div className="rounded-xl bg-red-500/10 p-3">
              <CalendarDays className="text-red-500" />
            </div>

            <span className="text-red-400 font-semibold tracking-wider">
              {item.date}
            </span>

          </div>

          <h3 className="text-2xl font-bold">
            {item.title}
          </h3>

          <p className="mt-4 leading-8 text-zinc-400">
            {item.description}
          </p>

        </div>

      </div>

      {/* Center Circle */}
      <div
        className="
        absolute
        left-6
        h-5
        w-5
        rounded-full
        border-4
        border-[#0d0d0f]
        bg-red-500
        md:left-1/2
        md:-translate-x-1/2
      "
      />
    </motion.div>
  );
}