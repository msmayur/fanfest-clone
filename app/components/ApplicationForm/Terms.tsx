"use client";

export default function Terms() {
  return (
    <section className="mt-16">

      <label className="flex items-start gap-4">

        <input
          type="checkbox"
          className="mt-1 h-5 w-5"
        />

        <span className="text-zinc-400">
          I confirm that all information provided is accurate and I agree
          to the FanFest Creator Terms & Conditions.
        </span>

      </label>

      <button
        className="
          mt-10
          rounded-full
          bg-red-500
          px-10
          py-4
          font-semibold
          transition
          hover:bg-red-600
        "
      >
        Submit Application
      </button>

    </section>
  );
}