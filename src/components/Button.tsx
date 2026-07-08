import { ReactNode, type MouseEventHandler } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
};

export default function Button({ href, children, variant = "primary", className = "", onClick }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all duration-200 ease-out focus-visible:outline-none";
  const styles =
    variant === "primary"
      ? "btn-primary"
      : variant === "secondary"
      ? "btn-secondary"
      : "border border-black/10 bg-white text-foreground hover:bg-black/5";

  if (href) {
    const isExternal = /^https?:\/\//i.test(href);
    return (
      <a
        href={href}
        className={`${base} ${styles} ${className}`}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
  return (
    <button className={`${base} ${styles} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
