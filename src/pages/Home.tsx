import type { CSSProperties } from "react";
import { Link } from "react-router";

const buttons = [
  { to: "/about", label: "About Me" },
  { to: "/portfolio", label: "My Portfolio" },
  { to: "/contact", label: "Contact Me" },
];

const name = "My name is Antony Laroche";
const tagline = "I'm a developer";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-8 px-4 text-center">
      <img
        src="/assets/images/formal-me.jpg"
        alt="Antony Laroche"
        className="aspect-square w-48 rounded-full object-cover border-4 border-gold shadow-xl sm:w-56"
      />

      <div className="flex flex-col items-center gap-3 text-muted">
        <h1
          className="typewriter font-mono text-2xl sm:text-4xl"
          style={{ "--chars": `${name.length}ch` } as CSSProperties}
        >
          {name}
        </h1>
        <p
          className="typewriter typewriter-delayed font-mono text-xl sm:text-3xl"
          style={{ "--chars": `${tagline.length}ch` } as CSSProperties}
        >
          {tagline}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {buttons.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className="min-w-36 rounded border-2 border-gold bg-gold px-5 py-2 font-bold text-ink transition-colors hover:bg-ink hover:text-gold"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
