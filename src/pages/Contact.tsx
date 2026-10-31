import { useState, type FormEvent } from "react";
import { Connect } from "../components/Sidebar";

type Status = { kind: "idle" | "sending" | "sent" | "error"; message?: string };

const fieldClass =
  "w-full rounded border border-transparent bg-[#8d8b8b] px-3 py-2 text-ink placeholder:text-white/40 focus:border-gold focus:outline-none";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const valid = form.name.trim() && /\S+@\S+\.\S+/.test(form.email) && form.message.trim();

  function update(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!valid) return;
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? `Request failed (${res.status})`);
      }
      setForm({ name: "", email: "", message: "" });
      setStatus({ kind: "sent", message: "Message successfully sent" });
    } catch (err) {
      setStatus({ kind: "error", message: err instanceof Error ? err.message : "Something went wrong" });
    }
  }

  return (
    <div className="grid gap-8 md:grid-cols-3">
      <section className="bg-ink p-6 md:col-span-2">
        <h2>Contact</h2>
        <form onSubmit={submit} className="flex flex-col gap-4">
          <label className="flex flex-col gap-1">
            Name
            <input name="name" value={form.name} onChange={update} placeholder="John Smith" className={fieldClass} />
          </label>
          <label className="flex flex-col gap-1">
            Email
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={update}
              placeholder="example@gmail.com"
              className={fieldClass}
            />
          </label>
          <label className="flex flex-col gap-1">
            Message
            <textarea name="message" rows={8} value={form.message} onChange={update} className={fieldClass} />
          </label>
          <button
            type="submit"
            disabled={!valid || status.kind === "sending"}
            className="self-end rounded border-2 border-gold bg-gold px-6 py-2 font-bold text-ink transition-colors hover:bg-ink hover:text-gold disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gold disabled:hover:text-ink"
          >
            {status.kind === "sending" ? "Sending…" : "Submit"}
          </button>
        </form>
        {status.message && (
          <p role="status" className={`mt-4 text-lg ${status.kind === "error" ? "text-red-400" : "text-gold"}`}>
            {status.message}
          </p>
        )}
      </section>
      <aside>
        <Connect />
      </aside>
    </div>
  );
}
