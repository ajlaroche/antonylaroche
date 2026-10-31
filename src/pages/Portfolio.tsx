import { Connect } from "../components/Sidebar";

type Project = {
  title: string;
  image: string;
  repo: string;
  /** Live demo; omitted for apps that were hosted on Heroku's retired free tier. */
  demo?: string;
};

const gh = "https://github.com/ajlaroche";
const pages = "https://ajlaroche.github.io";

const projects: Project[] = [
  { title: "Hangman", image: "hangingOn.jpeg", repo: `${gh}/Hangman-Game`, demo: `${pages}/Hangman-Game/` },
  { title: "RPG Game", image: "got_chair.jpg", repo: `${gh}/GOT-RolePlayingGame`, demo: `${pages}/GOT-RolePlayingGame/` },
  { title: "Trivia Game", image: "Bookworm.jpeg", repo: `${gh}/TriviaGame`, demo: `${pages}/TriviaGame/` },
  { title: "Local Ink", image: "SeeItAll.jpeg", repo: `${gh}/Local-Ink` },
  { title: "Rock Paper Scissors", image: "DataDriven.jpeg", repo: `${gh}/RPS-Multiplayer`, demo: `${pages}/RPS-Multiplayer/` },
  { title: "Gif Theater", image: "cat_closeup.jpeg", repo: `${gh}/GifTheater`, demo: `${pages}/GifTheater/` },
  { title: "Friend Finder", image: "twoFriends.jpg", repo: `${gh}/FriendFinder` },
  { title: "News Scraper", image: "handspaper.jpg", repo: `${gh}/news-scraper` },
  { title: "Clicky Game", image: "card_shuffle.jpg", repo: `${gh}/clicky-game`, demo: `${pages}/clicky-game/` },
  { title: "NY Times Archives", image: "nytimes.jpeg", repo: `${gh}/nytreact` },
];

function GitHubIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

export default function Portfolio() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      <section className="bg-ink p-6 md:col-span-2">
        <h2>Portfolio</h2>
        <ul className="grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <li key={p.title} className="group overflow-hidden border-2 border-gold bg-ink shadow-lg">
              <a href={p.demo ?? p.repo} target="_blank" rel="noopener noreferrer" className="block overflow-hidden">
                <img
                  src={`/assets/images/${p.image}`}
                  alt={p.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </a>
              <div className="flex items-center justify-between gap-2 bg-[#4aaaa5] px-4 py-2 font-serif text-lg text-white">
                <a href={p.demo ?? p.repo} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {p.title}
                </a>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.title} source on GitHub`}
                  className="text-gold hover:text-white"
                >
                  <GitHubIcon />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <aside>
        <Connect />
      </aside>
    </div>
  );
}
