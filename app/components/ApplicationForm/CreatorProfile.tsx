"use client";

export default function CreatorProfile() {
  return (
    <section className="mt-16 space-y-8">

      <div>
        <h3 className="heading-font text-3xl">
          Creator Profile
        </h3>

        <p className="mt-2 text-zinc-400">
          Help us understand your content.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <Select
          label="Primary Platform"
          options={[
            "YouTube",
            "Instagram",
            "TikTok",
            "Twitch",
            "Other",
          ]}
        />

        <Select
          label="Content Category"
          options={[
            "Gaming",
            "Tech",
            "Lifestyle",
            "Education",
            "Comedy",
          ]}
        />

        <Input
          label="Followers"
          placeholder="250000"
        />

        <Input
          label="Years Creating"
          placeholder="3"
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

      <label className="mb-3 block text-sm">
        {label}
      </label>

      <input
        placeholder={placeholder}
        className="w-full rounded-2xl border border-zinc-700 bg-[#18181c] px-5 py-4"
      />

    </div>
  );
}

function Select({
  label,
  options,
}: {
  label: string;
  options: string[];
}) {
  return (
    <div>

      <label className="mb-3 block text-sm">
        {label}
      </label>

      <select
        className="
          w-full
          rounded-2xl
          border
          border-zinc-700
          bg-[#18181c]
          px-5
          py-4
        "
      >
        <option>Select...</option>

        {options.map((item) => (
          <option key={item}>
            {item}
          </option>
        ))}

      </select>

    </div>
  );
}