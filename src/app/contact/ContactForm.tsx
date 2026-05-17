"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted">("idle");
  const supportEmail = "support@delivero.app";

  if (status === "submitted") {
    return (
      <div className="rounded-2xl border border-black/8 bg-surface p-6 text-center text-sm shadow-sm">
        <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300">
          ✓
        </div>
        <div className="mt-3 font-semibold text-(--color-secondary)">Request received</div>
        <div className="mt-1 text-muted">Thanks! We&apos;ll get back to you shortly.</div>
      </div>
    );
  }
  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const formData = new FormData(form);
        const honeypot = formData.get("company_website");
        if (honeypot) return; // spam trap
        setStatus("submitting");
        setTimeout(() => setStatus("submitted"), 900);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-muted">Name</label>
          <input
            name="name"
            required
            placeholder="Your full name"
            className="w-full rounded-xl border border-black/10 bg-white px-3 py-2.5 text-sm text-(--color-secondary) placeholder:text-black/40 outline-none transition focus:border-(--color-primary)/60"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-muted">Business name</label>
          <input
            name="business_name"
            required
            placeholder="Your business name"
            className="w-full rounded-xl border border-black/10 bg-white px-3 py-2.5 text-sm text-(--color-secondary) placeholder:text-black/40 outline-none transition focus:border-(--color-primary)/60"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-muted">Phone number</label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="+91 9xxxx xxxxx"
            className="w-full rounded-xl border border-black/10 bg-white px-3 py-2.5 text-sm text-(--color-secondary) placeholder:text-black/40 outline-none transition focus:border-(--color-primary)/60"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-muted">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="you@company.com"
            className="w-full rounded-xl border border-black/10 bg-white px-3 py-2.5 text-sm text-(--color-secondary) placeholder:text-black/40 outline-none transition focus:border-(--color-primary)/60"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1 block text-sm font-medium text-muted">Business type</label>
          <select
            name="business_type"
            required
            className="w-full rounded-xl border border-black/10 bg-white px-3 py-2.5 text-sm text-(--color-secondary) outline-none transition focus:border-(--color-primary)/60"
            defaultValue=""
          >
            <option value="" disabled>
              Select a type
            </option>
            <option value="bakery">Bakery</option>
            <option value="milk">Milk delivery</option>
            <option value="meals">Meals</option>
            <option value="water">Water supply</option>
            <option value="grocery">Groceries</option>
            <option value="distribution">Local distribution</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-muted">Message</label>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Tell us about your routes, drivers, and daily orders…"
          className="w-full rounded-xl border border-black/10 bg-white px-3 py-2.5 text-sm text-(--color-secondary) placeholder:text-black/40 outline-none transition focus:border-(--color-primary)/60"
        />
      </div>
      {/* Honeypot */}
      <input type="text" name="company_website" className="hidden" tabIndex={-1} autoComplete="off" />
      <button
        disabled={status === "submitting"}
        className="btn-primary rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-200 ease-out disabled:opacity-70"
      >
        {status === "submitting" ? "Sending…" : "Send"}
      </button>
      <p className="text-xs text-muted">
        Or email us:{" "}
        <a className="font-semibold text-(--color-primary) hover:underline" href={`mailto:${supportEmail}`}>
          {supportEmail}
        </a>
      </p>
    </form>
  );
}
