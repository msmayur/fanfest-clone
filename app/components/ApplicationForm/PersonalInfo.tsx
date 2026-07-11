"use client";

export default function PersonalInfo() {
  return (
    <section className="space-y-8">

      <div>
        <h3 className="text-3xl heading-font">
          Personal Information
        </h3>

        <p className="mt-2 text-zinc-400">
          Tell us a little about yourself.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <Input
          label="Full Name"
          placeholder="John Doe"
        />

        <Input
          label="Email Address"
          type="email"
          placeholder="john@example.com"
        />

        <Input
          label="Phone Number"
          placeholder="+91 9876543210"
        />

        <Input
          label="City"
          placeholder="Bangalore"
        />

      </div>

    </section>
  );
}

type InputProps = {
  label: string;
  placeholder: string;
  type?: string;
};

function Input({
  label,
  placeholder,
  type = "text",
}: InputProps) {
  return (
    <div>

      <label className="mb-3 block text-sm font-medium text-zinc-300">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="
          w-full
          rounded-2xl
          border
          border-zinc-700
          bg-[#18181c]
          px-5
          py-4
          outline-none
          transition
          focus:border-red-500
          focus:ring-2
          focus:ring-red-500/20
        "
      />

    </div>
  );
}