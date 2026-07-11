"use client";

import CreatorProfile from "./CreatorProfile";
import Participation from "./Participation";
import PersonalInfo from "./PersonalInfo";
import SocialLinks from "./SocialLinks";
import Terms from "./Terms";



export default function ApplicationForm() {
  return (
    <section id="apply" className="bg-[#090909] py-28">

      <div className="section-container max-w-5xl">

        <p className="section-subtitle">
          APPLY NOW
        </p>

        <h2 className="section-title mt-4">
          Creator Application
        </h2>

        <p className="mt-5 text-zinc-400">
          Complete the form below to apply as a creator for FanFest 2026.
        </p>

        <form className="mt-16 rounded-3xl border border-zinc-800 bg-[#111114] p-8 md:p-12">

          <PersonalInfo />

          <CreatorProfile />

          <SocialLinks />

          <Participation />

          <Terms />

        </form>

      </div>

    </section>
  );
}
