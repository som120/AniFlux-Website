// app/page.tsx (SERVER COMPONENT — no "use client")
import AniFluxHero from "./AniFluxHero";

export default function Home() {
  return (
    <main>
      {/* Strong server-rendered brand signal */}
      <h1 className="sr-only">
        AniFlux – Anime Discovery, Tracking & Watchlists
      </h1>

      <section>
        <AniFluxHero />
      </section>
    </main>
  );
}
