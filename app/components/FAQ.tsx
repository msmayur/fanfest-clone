"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Who can apply for FanFest 2026?",
    answer:
      "Anyone creating consistent content on platforms like YouTube, Instagram, Twitch or TikTok can apply.",
  },
  {
    question: "Is there any registration fee?",
    answer:
      "No. Creator applications are completely free.",
  },
  {
    question: "Will travel and accommodation be covered?",
    answer:
      "Selected creators may receive travel or accommodation support depending on category and availability.",
  },
  {
    question: "When will selected creators be informed?",
    answer:
      "Shortlisted creators will receive confirmation via email after the review process.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-[#0d0d10] py-28">
      <div className="section-container">

        <p className="section-subtitle">
          Frequently Asked Questions
        </p>

        <h2 className="section-title mt-4">
          FAQ
        </h2>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (
            <Accordion key={index} {...faq} />
          ))}

        </div>

      </div>
    </section>
  );
}

function Accordion({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      className="rounded-3xl border border-zinc-800 bg-[#17171b]"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-7 text-left"
      >
        <span className="text-xl font-semibold">
          {question}
        </span>

        <ChevronDown
          className={`transition duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>

        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            className="overflow-hidden"
          >
            <p className="px-7 pb-7 leading-8 text-zinc-400">
              {answer}
            </p>
          </motion.div>
        )}

      </AnimatePresence>
    </motion.div>
  );
}