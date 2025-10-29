"use client";
import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  if (submitted) {
    return (
      <div className="mx-auto max-w-xl rounded-2xl border border-black/10 bg-surface p-6 text-center text-sm dark:border-white/10">
        Thank you! We'll get back to you shortly.
      </div>
    );
  }
  return (
    <form
      className="mx-auto max-w-xl space-y-4 rounded-2xl border border-black/10 bg-surface p-6 dark:border-white/10"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const formData = new FormData(form);
        const honeypot = formData.get("company_website");
        if (honeypot) return; // spam trap
        setSubmitted(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium">Name</label>
          <input name="name" required className="w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm dark:border-white/10 dark:bg-[#0f1112]" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Email</label>
          <input type="email" name="email" required className="w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm dark:border-white/10 dark:bg-[#0f1112]" />
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium">Message</label>
        <textarea name="message" rows={4} required className="w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm dark:border-white/10 dark:bg-[#0f1112]" />
      </div>
      {/* Honeypot */}
      <input type="text" name="company_website" className="hidden" tabIndex={-1} autoComplete="off" />
      <button className="btn-primary rounded-full px-5 py-3 text-sm font-medium">Request a Demo</button>
      <p className="text-xs text-muted">Or email us: support@fooddistribution.app</p>
    </form>
  );
}


