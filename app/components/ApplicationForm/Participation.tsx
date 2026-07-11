"use client";

export default function Participation() {
  return (
    <section className="mt-16 space-y-8">

      <h3 className="heading-font text-3xl">
        Participation
      </h3>

      <div>

        <label className="mb-3 block">
          Why do you want to join FanFest?
        </label>

        <textarea
          rows={6}
          className="
            w-full
            rounded-2xl
            border
            border-zinc-700
            bg-[#18181c]
            p-5
            resize-none
          "
        />

      </div>

    </section>
  );
}