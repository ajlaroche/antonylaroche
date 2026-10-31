import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="bg-ink py-24 text-center">
      <h1 className="mb-4 font-serif text-5xl text-gold">404 Page Not Found</h1>
      <p className="mb-8 text-5xl" role="img" aria-label="Face with rolling eyes">
        🙄
      </p>
      <Link to="/" className="text-gold underline hover:text-white">
        Back home
      </Link>
    </div>
  );
}
