import { Router } from "express";
import nodemailer from "nodemailer";

const { SMTP_HOST, SMTP_PORT = "587", SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;

const transporter =
  SMTP_HOST && SMTP_USER && SMTP_PASS
    ? nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        secure: Number(SMTP_PORT) === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      })
    : null;

const escapeHtml = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

const router = Router();

router.post("/", async (req, res) => {
  const name = String(req.body?.name ?? "").trim();
  const email = String(req.body?.email ?? "").trim();
  const message = String(req.body?.message ?? "").trim();

  if (!name || !/\S+@\S+\.\S+/.test(email) || !message) {
    return res.status(400).json({ error: "Name, a valid email and a message are required." });
  }
  if (!transporter) {
    return res.status(503).json({ error: "The contact form isn't configured yet. Please reach out on LinkedIn." });
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${SMTP_USER}>`,
      to: CONTACT_TO || SMTP_USER,
      replyTo: { name, address: email },
      subject: `New contact request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p>You have a new contact request</p>
        <h3>Contact Details</h3>
        <ul><li>Name: ${escapeHtml(name)}</li><li>Email: ${escapeHtml(email)}</li></ul>
        <h3>Message</h3><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
    });
    res.sendStatus(204);
  } catch (err) {
    console.error("Failed to send contact email:", err);
    res.status(502).json({ error: "Sorry, the message couldn't be sent. Please try again later." });
  }
});

export default router;
