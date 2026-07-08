"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const appleLogo = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
  </svg>
);

const safariIcon = (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
    <circle cx="12" cy="12" r="10" fill="#0A84FF" />
    <circle cx="12" cy="12" r="8.2" fill="#F5F5F7" />
    <circle cx="12" cy="12" r="7.1" fill="#34AADC" />
    <path d="M12 5.2 14.35 12 12 18.8 9.65 12Z" fill="#FF3B30" />
    <path d="M12 18.8 14.35 12H9.65Z" fill="#fff" />
    <circle cx="12" cy="12" r="1.35" fill="#1C1C1E" />
  </svg>
);

const shareIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="h-4 w-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v11m0-11L8.5 6.5M12 3l3.5 3.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 11H5.5A1.5 1.5 0 0 0 4 12.5v6A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 18.5 11H17" />
  </svg>
);

const addIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="h-4 w-4">
    <rect x="5" y="5" width="14" height="14" rx="3" />
    <path strokeLinecap="round" d="M12 9v6M9 12h6" />
  </svg>
);

const homeIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="h-4 w-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" />
  </svg>
);

const lockIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="h-3.5 w-3.5">
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path strokeLinecap="round" d="M8 11V8a4 4 0 1 1 8 0v3" />
  </svg>
);

const chevronIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true" className="h-4 w-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="m9 6 6 6-6 6" />
  </svg>
);

const steps = [
  {
    title: "Open Delivero in Safari",
    desc: "Use the Safari browser on your iPhone or iPad and go to the Delivero web app.",
    icon: safariIcon,
    tinted: false,
  },
  {
    title: "Tap the Share button",
    desc: "Find it in Safari's toolbar — the square with an upward arrow.",
    icon: shareIcon,
    tinted: true,
    showShareGlyph: true,
  },
  {
    title: 'Choose "Add to Home Screen"',
    desc: "Scroll down in the share sheet and select Add to Home Screen.",
    icon: addIcon,
    tinted: true,
  },
  {
    title: 'Tap "Add"',
    desc: "Delivero appears on your home screen and opens full-screen like a native app.",
    icon: homeIcon,
    tinted: true,
  },
] as const;

export default function IosInstallButton({ appUrl }: { appUrl: string }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;
    const panel = panelRef.current;
    panel?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || !panel) return;
      const focusable = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      trigger?.focus();
    };
  }, [open]);

  const dialog =
    open && mounted
      ? createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="ios-install-title"
            aria-describedby="ios-install-desc"
            className="fixed inset-0 z-9999 flex items-center justify-center p-4"
          >
            <div
              className="absolute inset-0 bg-black/45 backdrop-blur-[2px] animate-modal-backdrop"
              onClick={() => setOpen(false)}
            />

            <div
              ref={panelRef}
              tabIndex={-1}
              className="animate-modal-panel relative flex max-h-[90dvh] w-full max-w-[380px] flex-col overflow-hidden rounded-[22px] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.24)] outline-none"
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute right-3.5 top-3.5 z-10 grid h-7 w-7 place-items-center rounded-full bg-black/4 text-muted transition-colors hover:bg-black/8"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 6 6 18" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="m6 6 12 12" />
                </svg>
              </button>

              <div className="no-scrollbar overflow-y-auto">
                <div className="relative px-5 pb-1 pt-5">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-(--color-primary) shadow-sm shadow-(--color-primary)/30">
                    <span className="text-[22px] font-bold leading-none tracking-tight text-white">D</span>
                  </div>

                  <div className="pointer-events-none absolute -right-1 top-2 h-[130px] w-[112px]">
                    <Image
                      src="/ios-download.png"
                      alt=""
                      fill
                      sizes="120px"
                      className="object-contain object-top"
                      priority
                    />
                  </div>

                  <h3
                    id="ios-install-title"
                    className="mt-3.5 max-w-[200px] text-[19px] font-bold leading-[1.2] tracking-[-0.02em] text-foreground"
                  >
                    Install <span className="text-(--color-primary)">Delivero</span> on iPhone &amp; iPad
                  </h3>
                  <p
                    id="ios-install-desc"
                    className="mt-1.5 max-w-[220px] text-[12.5px] leading-snug text-muted"
                  >
                    Add Delivero to your home screen to use it like a native app — no App Store download needed.
                  </p>
                </div>

                <ol className="space-y-3 px-5 py-3.5">
                  {steps.map((step, i) => (
                    <li key={step.title} className="flex items-start gap-2.5">
                      <span
                        className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-(--color-primary)/10 ${
                          step.tinted ? "text-(--color-primary)" : ""
                        }`}
                      >
                        {step.icon}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-start gap-1.5">
                          <span className="mt-0.5 grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-(--color-primary) text-[10px] font-bold text-white">
                            {i + 1}
                          </span>
                          <div className="text-[13px] font-semibold leading-snug text-foreground">
                            {step.title}
                          </div>
                        </div>
                        <p className="mt-0.5 pl-6 text-[12px] leading-snug text-muted">
                          {step.desc}
                          {"showShareGlyph" in step && step.showShareGlyph ? (
                            <span className="ml-0.5 inline-flex translate-y-0.5 text-(--color-primary)">{shareIcon}</span>
                          ) : null}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="rounded-t-[18px] bg-section px-5 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3.5">
                  <a
                    href={appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-[14px] font-semibold"
                  >
                    <span className="grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-white">
                      {safariIcon}
                    </span>
                    Open Delivero in Safari
                    <span className="ml-auto opacity-90">{chevronIcon}</span>
                  </a>
                  <div className="mt-2.5 flex items-center justify-center gap-1 text-[11px] font-medium text-muted">
                    {lockIcon}
                    <span>Safe &amp; Secure</span>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Add Delivero to your iPhone home screen"
        aria-haspopup="dialog"
        className="inline-flex items-center gap-2.5 rounded-xl bg-black px-4 py-2.5 text-left shadow-sm transition hover:bg-black/90"
      >
        <span className="h-6 w-6 text-white">{appleLogo}</span>
        <span className="flex flex-col leading-tight text-white">
          <span className="text-[10px] font-medium opacity-90">Available on</span>
          <span className="-mt-0.5 text-[15px] font-semibold">iPhone &amp; iPad</span>
        </span>
      </button>

      {dialog}
    </>
  );
}
