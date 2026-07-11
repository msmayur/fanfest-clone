export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-16">
      <div className="section-container">

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <div>

            <h2 className="heading-font text-5xl">
              FANFEST
            </h2>

            <p className="mt-3 text-zinc-500">
              Create • Connect • Dominate
            </p>

          </div>

          <button className="rounded-full bg-red-500 px-8 py-4 font-semibold transition hover:bg-red-600">
            Apply Now
          </button>

        </div>

        <div className="mt-12 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500">
          © 2026 FanFest. All rights reserved.
        </div>

      </div>
    </footer>
  );
}