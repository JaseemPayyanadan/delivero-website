"use client";
import { useEffect, useState } from "react";

export default function IosInstallButton({ appUrl }: { appUrl: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const steps = [
    {
      title: "Open Delivero in Safari",
      desc: "Use the Safari browser on your iPhone or iPad and go to the Delivero web app.",
    },
    {
      title: "Tap the Share button",
      desc: "It's the square icon with an upward arrow in Safari's toolbar.",
    },
    {
      title: 'Choose "Add to Home Screen"',
      desc: "Scroll down in the share sheet and select Add to Home Screen.",
    },
    {
      title: 'Tap "Add"',
      desc: "Delivero appears on your home screen and opens full-screen like a native app.",
    },
  ];

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Add Delivero to your iPhone home screen"
        className="inline-flex items-center gap-2.5 rounded-xl bg-black px-4 py-2.5 text-left shadow-sm transition hover:bg-black/90"
      >
        <svg width="22" height="22" viewBox="0 0 384 512" fill="#fff" aria-hidden="true">
          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C61.5 141.3 18.4 167 0 218.6c-33 91.2-7.4 226.5 25.2 295.2 17.9 30.7 35.1 65.5 67.5 64.3 31.5-1.3 43.3-20.7 81.4-20.7 38.1 0 49 20.7 81.5 20.7 33.2-.5 48.5-31.4 66.1-62.1 11.6-19.3 18.1-39 22.2-58.9-58.5-22.2-69.1-104.8-69.1-105.7zM261 89.7c19.6-23.7 30.6-54.8 28.5-86.7-30.5 1.5-58.2 17.8-77.9 41.5-19.6 23.7-30.6 54.8-28.5 86.7 30.4-1.5 58.2-17.8 77.9-41.5z" />
        </svg>
        <span className="flex flex-col leading-tight text-white">
          <span className="text-[10px] font-medium opacity-90">Available on</span>
          <span className="-mt-0.5 text-[15px] font-semibold">iPhone &amp; iPad</span>
        </span>
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="ios-install-title"
          className="fixed inset-0 z-100 flex items-end justify-center p-4 sm:items-center"
        >
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="relative w-full max-w-md rounded-3xl border border-black/10 bg-white p-6 shadow-2xl sm:p-8">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-(--color-secondary) transition-colors hover:bg-black/5"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 6 6 18" />
                <path strokeLinecap="round" strokeLinejoin="round" d="m6 6 12 12" />
              </svg>
            </button>

            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-black text-white">
              <svg width="22" height="22" viewBox="0 0 384 512" fill="#fff" aria-hidden="true">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C61.5 141.3 18.4 167 0 218.6c-33 91.2-7.4 226.5 25.2 295.2 17.9 30.7 35.1 65.5 67.5 64.3 31.5-1.3 43.3-20.7 81.4-20.7 38.1 0 49 20.7 81.5 20.7 33.2-.5 48.5-31.4 66.1-62.1 11.6-19.3 18.1-39 22.2-58.9-58.5-22.2-69.1-104.8-69.1-105.7zM261 89.7c19.6-23.7 30.6-54.8 28.5-86.7-30.5 1.5-58.2 17.8-77.9 41.5-19.6 23.7-30.6 54.8-28.5 86.7 30.4-1.5 58.2-17.8 77.9-41.5z" />
              </svg>
            </div>

            <h3 id="ios-install-title" className="mt-4 text-xl font-bold tracking-[-0.01em] text-(--color-secondary)">
              Install Delivero on iPhone &amp; iPad
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Add Delivero to your home screen to use it like a native app — no App Store download needed.
            </p>

            <ol className="mt-5 space-y-4">
              {steps.map((s, i) => (
                <li key={s.title} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-(--color-primary)/12 text-sm font-semibold text-(--color-primary)">
                    {i + 1}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-(--color-secondary)">{s.title}</div>
                    <div className="mt-0.5 text-sm leading-relaxed text-muted">{s.desc}</div>
                  </div>
                </li>
              ))}
            </ol>

            <a
              href={appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-base font-semibold btn-primary"
            >
              Open Delivero in Safari
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
