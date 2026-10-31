import type { ReactNode } from "react";

export function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-8 overflow-hidden bg-ink text-center">
      <h3 className="border-b-2 border-gold px-4 py-3 font-serif text-xl font-bold text-gold">{title}</h3>
      <div className="bg-[#4b4949] p-4">{children}</div>
    </section>
  );
}

const socials = [
  { href: "https://github.com/ajlaroche", img: "GitHubIcon.png", label: "GitHub" },
  { href: "https://linkedin.com/in/antony-laroche-782248121", img: "linkedInIcon.png", label: "LinkedIn" },
  { href: "https://stackoverflow.com/users/8926024/ajtherock", img: "StackOverflowIcon.png", label: "Stack Overflow" },
];

export function Connect() {
  return (
    <Card title="Connect with Me">
      <div className="flex justify-center gap-4">
        {socials.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
            <img src={`/assets/images/${s.img}`} alt="" className="h-12 w-12 transition-transform hover:scale-110" />
          </a>
        ))}
      </div>
    </Card>
  );
}

const tools = [
  ["js.svg", "JavaScript"],
  ["nodejs.svg", "Node.js"],
  ["react-logo.svg", "React"],
  ["mongodb.svg", "MongoDB"],
  ["MySQL.svg", "MySQL"],
  ["express.png", "Express"],
  ["bootstrap-stack.png", "Bootstrap"],
  ["html5.svg", "HTML5"],
];

export function Tools() {
  return (
    <Card title="These Are My Tools">
      <div className="grid grid-cols-4 items-center gap-4">
        {tools.map(([file, name]) => (
          <img key={file} src={`/assets/images/tools/${file}`} alt={name} title={name} className="mx-auto max-h-14" />
        ))}
      </div>
    </Card>
  );
}
