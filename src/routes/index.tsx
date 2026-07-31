import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Star, Leaf, Axe, TreeDeciduous, Sprout, Truck, ShieldAlert } from "lucide-react";
import heroImg from "@/assets/hero-tree.jpg";
import landscapingImg from "@/assets/landscaping.jpg";
import treeRemovalImg from "@/assets/tree-removal.jpg";
import stumpGrindingImg from "@/assets/stump-grinding.jpg";
import stormCleanupImg from "@/assets/storm-cleanup.jpg";
import { LangProvider, useLang } from "@/lib/i18n";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import photo1 from "@/assets/img_8076.jpeg.asset.json";
import photo2 from "@/assets/img_8375.jpeg.asset.json";
import photo3 from "@/assets/img_7732.jpeg.asset.json";
import photo4 from "@/assets/e7a1fd93-d60f-4989-8325-113c35a80396.jpg.asset.json";
import photo5 from "@/assets/img_5870.jpg.asset.json";
import photo6 from "@/assets/img_8272.jpg.asset.json";

const galleryPhotos = [photo1, photo2, photo3, photo4, photo5, photo6];

const PHONE = "(317) 529-6350";
const PHONE_HREF = "tel:+13175296350";
const ADDRESS = "278 N East St, Plainfield, IN 46168";
const MAPS = "https://www.google.com/maps/search/?api=1&query=278+N+East+St+Plainfield+IN+46168";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Olivos Tree Services Plus Landscaping | Plainfield, IN" },
      {
        name: "description",
        content:
          "Tree trimming, removal, stump grinding and landscaping in Plainfield, Indiana. 5.0 stars, free estimates. Se habla español. Call (317) 529-6350.",
      },
      { property: "og:title", content: "Olivos Tree Services Plus Landscaping | Plainfield, IN" },
      {
        property: "og:description",
        content:
          "Servicios de árboles y jardinería en Plainfield, Indiana. Presupuestos gratis. Tree care & landscaping, free estimates.",
      },
    ],
  }),
  component: () => (
    <LangProvider>
      <Home />
    </LangProvider>
  ),
});

const serviceIcons = [Leaf, Axe, TreeDeciduous, ShieldAlert, Sprout, Truck];

function Header() {
  const { t, lang, setLang } = useLang();
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-5">
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <TreeDeciduous className="h-7 w-7 shrink-0 text-primary" />
          <span className="min-w-0 font-display text-lg leading-none tracking-wide text-foreground sm:text-xl">
            Olivos Tree Services
            <span className="block font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Plus Landscaping LLC
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground lg:flex">
          <a href="#services" className="transition-colors hover:text-primary">{t.nav.services}</a>
          <a href="#about" className="transition-colors hover:text-primary">{t.nav.about}</a>
          <a href="#gallery" className="transition-colors hover:text-primary">{t.nav.gallery}</a>
          <a href="#contact" className="transition-colors hover:text-primary">{t.nav.contact}</a>
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="shrink-0 rounded-sm border border-border px-3 py-2 text-xs font-semibold uppercase tracking-wider text-foreground transition-colors hover:bg-secondary"
          >
            {t.langLabel}
          </button>
          <a
            href={PHONE_HREF}
            className="hidden shrink-0 items-center gap-2 rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            <Phone className="h-4 w-4" /> {t.callNow}
          </a>
        </div>
      </div>
    </header>
  );
}

function Home() {
  const { t } = useLang();
  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />

      <section className="relative">
        <img
          src={heroImg}
          alt="Arborista profesional podando un árbol con arnés y motosierra"
          width={1600}
          height={1104}
          className="h-[70vh] min-h-[440px] w-full object-cover sm:h-[78vh] sm:min-h-[520px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,oklch(0.18_0.04_150/0.92)_0%,oklch(0.18_0.04_150/0.6)_55%,transparent_100%)]" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-5">
            <div className="max-w-2xl">
              <p className="mb-4 inline-flex items-center gap-2 border-l-2 border-accent pl-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/80 sm:text-xs">
                {t.hero.eyebrow}
              </p>
              <h1 className="font-display text-4xl leading-[0.95] text-primary-foreground sm:text-7xl">
                {t.hero.title}
              </h1>
              <p className="mt-4 max-w-xl text-sm text-primary-foreground/85 sm:mt-5 sm:text-lg">{t.hero.sub}</p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 rounded-sm bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5 sm:px-6 sm:text-base"
                >
                  <Phone className="h-4 w-4" /> {t.hero.cta}
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center rounded-sm border border-primary-foreground/40 px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10 sm:px-6 sm:text-base"
                >
                  {t.hero.cta2}
                </a>
              </div>
              <p className="mt-6 flex flex-wrap items-center gap-2 text-xs text-primary-foreground/80 sm:text-sm">
                <span className="flex">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </span>
                {t.hero.rating}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground/70">{t.welcomeEyebrow}</p>
        <div className="mt-3 max-w-3xl">
          <div>
            <h2 className="font-display text-3xl text-foreground sm:text-5xl">{t.welcomeTitle}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{t.welcomeBody}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{t.welcomeBody2}</p>
            <a
              href={PHONE_HREF}
              className="mt-6 inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-20">
        <h2 className="font-display text-3xl text-foreground sm:text-5xl">{t.servicesTitle}</h2>
        <p className="mt-2 max-w-xl text-muted-foreground">{t.servicesSub}</p>
        <div className="mt-10 grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 lg:grid-cols-3">
          {t.services.map((s, i) => {
            const Icon = serviceIcons[i];
            return (
              <article key={s.t} className="bg-card p-7">
                <Icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-display text-2xl text-foreground">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-20">
        <h2 className="font-display text-3xl text-foreground sm:text-5xl">{t.galleryTitle}</h2>
        <p className="mt-2 max-w-xl text-muted-foreground">{t.gallerySub}</p>
        <Carousel opts={{ loop: true }} className="mt-8">
          <CarouselContent>
            {galleryPhotos.map((p, i) => (
              <CarouselItem key={p.url} className="sm:basis-1/2 lg:basis-1/3">
                <figure className="overflow-hidden rounded-sm bg-card shadow-[var(--shadow-card)]">
                  <img
                    src={p.url}
                    alt={t.galleryCaptions[i]}
                    loading="lazy"
                    className="h-64 w-full object-cover sm:h-72"
                  />
                  <figcaption className="px-4 py-3 text-sm font-medium text-muted-foreground">
                    {t.galleryCaptions[i]}
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </section>

      <section style={{ backgroundImage: "var(--gradient-forest)" }}>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-16">
          <h2 className="font-display text-3xl text-primary-foreground sm:text-4xl">{t.whyTitle}</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.why.map((w) => (
              <div key={w.t} className="border-t-2 border-accent pt-4">
                <h3 className="font-display text-2xl text-primary-foreground">{w.t}</h3>
                <p className="mt-2 text-sm text-primary-foreground/75">{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-5 sm:py-20 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl text-foreground sm:text-5xl">{t.aboutTitle}</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">{t.aboutBody}</p>
          <a
            href={PHONE_HREF}
            className="mt-6 inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
        </div>
        <div>
          <img
            src={treeRemovalImg}
            alt="Jardín residencial con mantillo fresco, arbustos podados y bordes de piedra"
            width={1200}
            height={900}
            loading="lazy"
            className="w-full rounded-sm object-cover shadow-[var(--shadow-card)]"
          />
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-6xl px-4 pb-14 sm:px-5 sm:pb-20">
        <h2 className="font-display text-3xl text-foreground sm:text-5xl">{t.galleryTitle}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[treeRemovalImg, stumpGrindingImg, stormCleanupImg, landscapingImg].map((src, i) => (
            <figure key={src} className="overflow-hidden rounded-sm bg-card shadow-[var(--shadow-card)]">
              <img
                src={src}
                alt={t.galleryCaptions[i]}
                width={1200}
                height={900}
                loading="lazy"
                className="h-48 w-full object-cover sm:h-56"
              />
              <figcaption className="px-4 py-3 text-sm font-medium text-muted-foreground">
                {t.galleryCaptions[i]}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-20">
          <h2 className="font-display text-3xl text-foreground sm:text-5xl">{t.contactTitle}</h2>
          <p className="mt-2 text-muted-foreground">{t.contactSub}</p>
          <div className="mt-8 grid gap-8 sm:mt-10 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{t.phoneLabel}</p>
              <a href={PHONE_HREF} className="mt-2 flex items-center gap-2 font-display text-2xl text-primary">
                <Phone className="h-5 w-5" /> {PHONE}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{t.addressLabel}</p>
              <p className="mt-2 flex items-start gap-2 text-foreground">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" /> {ADDRESS}
              </p>
              <a href={MAPS} target="_blank" rel="noreferrer" className="mt-1 inline-block text-sm font-semibold text-primary underline">
                {t.directions}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{t.hoursLabel}</p>
              <p className="mt-2 flex items-start gap-2 text-foreground">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" /> {t.hours}
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-forest-deep">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-8 text-sm text-primary-foreground/70 sm:px-5">
          <p className="font-display text-lg tracking-wide text-primary-foreground">
            Olivos Tree Services Plus Landscaping LLC
          </p>
          <p>
            © {new Date().getFullYear()} · {t.rights}
          </p>
        </div>
      </footer>
    </div>
  );
}
