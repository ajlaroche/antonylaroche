# Antony Laroche — Portfolio

Personal portfolio site: landing page, about, project portfolio and a contact form that emails me.

**Stack:** React 19 · TypeScript · Vite · React Router · Tailwind CSS v4 · Express 5 · Nodemailer

## Run it locally

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

The site runs at <http://localhost:5173>. Vite proxies `/api` requests to the Express server on port 3001.

## Production

```bash
npm run build
npm start
```

`npm start` serves the built site from `dist/` and the API from one Express server on `PORT` (default 3001).

## Contact form

Copy `.env.example` to `.env` and fill in your SMTP settings. Without them, the form shows a friendly "not configured" message instead of sending email.
