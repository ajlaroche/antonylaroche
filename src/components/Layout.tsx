import { NavLink, Outlet } from "react-router";

const links = [
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

export default function Layout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="bg-ink">
        <nav className="mx-auto flex max-w-6xl flex-col items-center gap-2 sm:flex-row sm:justify-between">
          <NavLink
            to="/"
            className="w-full bg-gold px-4 py-1 text-center font-script text-4xl font-bold text-ink sm:w-auto"
          >
            Antony Laroche
          </NavLink>
          <ul className="flex gap-6 px-4 pb-2 sm:pb-0">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `transition-colors hover:text-white ${isActive ? "text-white" : "text-gold"}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10">
        <Outlet />
      </main>

      <footer className="border-t-4 border-gold bg-ink py-6 text-center text-gold">
        © {new Date().getFullYear()} Antony Laroche
      </footer>
    </div>
  );
}
