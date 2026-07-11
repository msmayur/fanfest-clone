"use client";

export default function SocialLinks() {
  return (
    <section className="mt-16 space-y-8">

      <h3 className="heading-font text-3xl">
        Social Links
      </h3>

      <div className="space-y-6">

        <Input
          label="Instagram"
          placeholder="https://instagram.com/..."
        />

        <Input
          label="YouTube"
          placeholder="https://youtube.com/..."
        />

        <Input
          label="TikTok"
          placeholder="https://tiktok.com/..."
        />

      </div>

    </section>
  );
}

function Input({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div>

      <label className="mb-3 block">
        {label}
      </label>

      <input
        placeholder={placeholder}
        className="w-full rounded-2xl border border-zinc-700 bg-[#18181c] px-5 py-4"
      />

    </div>
  );
}