'use client'

import Link from "next/link";
import { ArrowUpRight, Plus, Users } from "lucide-react";
import { achievementParts } from "@/lib/achievements";
import { applicationTeams } from "@/lib/applications";
import { useLanguage } from "@/lib/i18n/language-context";
import { featuredProjects } from "@/lib/projects";
import { sponsors } from "@/lib/sponsors";
import { teamMembers } from "@/lib/team";

/* Ana sayfanın telefon sürümü (md altı). Masaüstü düzeninden bağımsızdır:
   içerik giriş animasyonu beklemez, tek elle kaydırmaya göre kurulmuştur. */

const VISIBLE_ACHIEVEMENTS = 3;

function SectionHead({ label, title, href, linkText }: { label: string; title: string; href?: string; linkText?: string }) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4">
      <div className="min-w-0">
        <p className="eyebrow">{label}</p>
        <h2 className="mt-2 text-[2rem] font-bold leading-[1.05] tracking-[-0.04em] text-foreground">{title}</h2>
      </div>
      {href && linkText && (
        <Link href={href} className="inline-flex shrink-0 items-center gap-1 py-2 text-sm font-medium text-foreground/70">
          {linkText}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}

function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hm-hero relative flex min-h-[max(100svh,600px)] flex-col justify-end overflow-hidden">
      <div className="hm-robot absolute inset-x-0 top-14 h-[calc(max(100svh,600px)-20.5rem)]" aria-hidden="true">
        <div className="hero-poster">
          <img className="hero-poster-dark" src="/robot-dark.webp" alt="" width={1100} height={1224} fetchPriority="high" decoding="async" draggable={false} />
          <img className="hero-poster-light" src="/robot-light.webp" alt="" width={1100} height={1224} fetchPriority="high" decoding="async" draggable={false} />
        </div>
      </div>
      <div className="hm-fade absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background via-background/90 to-transparent" aria-hidden="true" />

      <div className="hm-text relative px-5 pb-7">
        <Link href="/basvuru/" className="inline-flex items-center gap-2 py-2 text-[13px] font-semibold text-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
          {t.home.recruiting.badge}
          <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
        </Link>
        <h1 className="mt-1 text-[3.25rem] font-bold leading-[0.98] tracking-[-0.05em] text-foreground">{t.home.brand}</h1>
        <p className="mt-3 text-[15px] leading-snug text-foreground/75">{t.home.subtitle}</p>

        <div className="mt-6 grid grid-cols-2 gap-2.5">
          <Link href="/projelerimiz" className="flex h-[3.25rem] items-center justify-center rounded-full bg-foreground text-[15px] font-semibold text-background active:opacity-80">
            {t.home.heroCta.projects}
          </Link>
          <Link href="/iletisim" className="flex h-[3.25rem] items-center justify-center rounded-full bg-foreground/[0.08] text-[15px] font-semibold text-foreground active:opacity-80">
            {t.home.heroCta.contact}
          </Link>
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  const { t, language } = useLanguage();
  const items = t.home.about.achievementsList.map(achievementParts);

  const row = ({ Icon, text }: (typeof items)[number]) => (
    <li key={text} className="flex items-center gap-3.5 py-3.5 text-[15px] leading-snug text-foreground">
      <Icon className="h-5 w-5 shrink-0 text-foreground/60" />
      <span>{text}</span>
    </li>
  );

  return (
    <section className="px-5 pt-4">
      <ul className="divide-y divide-border border-y border-border">
        {items.slice(0, VISIBLE_ACHIEVEMENTS).map(row)}
      </ul>
      <details className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between py-3.5 text-sm font-medium text-foreground/70 [&::-webkit-details-marker]:hidden">
          {language === "tr" ? "Tüm başarılar" : "All achievements"}
          <Plus className="h-4 w-4 transition-transform group-open:rotate-45" />
        </summary>
        <ul className="divide-y divide-border border-t border-border">
          {items.slice(VISIBLE_ACHIEVEMENTS).map(row)}
        </ul>
      </details>
    </section>
  );
}

function Projects() {
  const { t, language } = useLanguage();

  return (
    <section className="px-5 pt-12">
      <SectionHead label={t.home.projects.label} title={t.home.projects.title} href="/projelerimiz" linkText={t.home.projects.viewAll} />
      <div className="grid gap-3 sm:grid-cols-2">
        {featuredProjects.map((project) => {
          const tr = project.translations[language];
          return (
            <Link key={project.slug} href={`/projelerimiz/${project.slug}`} className="relative block aspect-[16/11] overflow-hidden rounded-2xl bg-foreground/[0.05] active:opacity-90">
              <img src={project.image} alt={tr.title} width={640} height={440} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 from-15% via-black/70 via-40% to-transparent to-75%" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold tracking-tight text-[#fff]">{tr.title}</h3>
                  <p className="mt-1 line-clamp-2 text-[13px] leading-snug text-[#fff]/75">{tr.description}</p>
                </div>
                <ArrowUpRight className="mb-0.5 h-5 w-5 shrink-0 text-[#fff]" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function About() {
  const { t } = useLanguage();

  return (
    <section className="pt-12">
      <div className="px-5">
        <SectionHead label={t.home.about.label} title={t.home.about.title} />
      </div>
      <img src="/4.jpg" alt="Merkutech Ekibi" width={800} height={600} loading="lazy" decoding="async" className="aspect-[3/2] w-full object-cover" />
      <div className="space-y-3 px-5 pt-5 text-[15px] leading-relaxed text-foreground/75">
        <p>{t.home.about.p1}</p>
        <p>{t.home.about.p2}</p>
      </div>
    </section>
  );
}

function Areas() {
  const { t } = useLanguage();

  return (
    <section className="px-5 pt-12">
      <SectionHead label={t.home.areas.label} title={t.home.areas.title} />
      <div className="divide-y divide-border border-y border-border">
        {t.home.areas.items.map((item) => (
          <details key={item.num} className="group">
            <summary className="flex cursor-pointer list-none items-center gap-3 py-4 [&::-webkit-details-marker]:hidden">
              <span className="font-mono text-xs text-muted-foreground">{item.num}</span>
              <span className="flex-1 text-lg font-semibold tracking-tight text-foreground">{item.title}</span>
              <Plus className="h-5 w-5 shrink-0 text-foreground/60 transition-transform group-open:rotate-45" />
            </summary>
            <div className="pb-4 pl-8 pr-8">
              <p className="text-[15px] leading-relaxed text-foreground/75">{item.desc}</p>
              <p className="mt-2 text-[13px] text-muted-foreground">{item.tags.join(" / ")}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

function Team() {
  const { language } = useLanguage();
  const tr = language === "tr";

  return (
    <section className="pt-12">
      <div className="px-5">
        <SectionHead label="Merkutech" title={tr ? "Ekibimiz" : "Our Team"} href="/team/" linkText={tr ? "Tümünü Gör" : "View All"} />
      </div>
      <ul className="flex snap-x snap-mandatory scroll-pl-5 gap-3 overflow-x-auto px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {teamMembers.map((member) => (
          <li key={member.id} className="flex w-36 shrink-0 snap-start flex-col items-center rounded-2xl bg-foreground/[0.04] px-3 pb-4 pt-5 text-center">
            <div className="team-avatar flex h-[5.5rem] w-[5.5rem] items-center justify-center overflow-hidden rounded-full">
              {member.image ? (
                <img src={member.image} alt={member.name} width={88} height={88} loading="lazy" decoding="async" className="h-full w-full object-cover" />
              ) : (
                <Users className="h-8 w-8 text-foreground/40" />
              )}
            </div>
            <p className="mt-3 text-[13px] font-semibold leading-tight text-foreground">{member.name}</p>
            <p className="mt-1 text-xs leading-tight text-muted-foreground">{member.role[language as keyof typeof member.role]}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Apply() {
  const { language } = useLanguage();
  const lang = language as "tr" | "en";

  return (
    <section className="px-5 pt-12">
      <SectionHead label={lang === "tr" ? "Başvurular açık" : "Applications open"} title={lang === "tr" ? "Ekiplerimiz" : "Our Teams"} />
      <div className="grid grid-cols-2 gap-2.5">
        {applicationTeams.map((team) => (
          <Link key={team.id} href={`/basvuru/#${team.id}`} className="flex min-h-[7rem] flex-col justify-between rounded-2xl bg-foreground/[0.04] p-4 active:opacity-80">
            <ArrowUpRight className="h-5 w-5 self-end text-foreground/60" />
            <span className="text-[17px] font-semibold leading-tight tracking-tight text-foreground">{team.title[lang]}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Sponsors() {
  const { t } = useLanguage();

  return (
    <section className="px-5 pt-12">
      <SectionHead label={t.sponsors.label} title={t.sponsors.title} />
      <div className="grid grid-cols-2 gap-2.5">
        {sponsors.map((sponsor, i) => (
          <a
            key={sponsor.name}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={sponsor.name}
            className={`flex h-24 items-center justify-center rounded-2xl bg-[#fff] p-5 [container-type:size] ${i === sponsors.length - 1 && sponsors.length % 2 === 1 ? "col-span-2" : ""}`}
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              loading="lazy"
              decoding="async"
              className="h-auto max-h-full max-w-full object-contain"
              style={{ width: `min(100cqw, ${(Math.sqrt(sponsor.logoRatio ?? 1) * 85).toFixed(1)}cqh)` }}
            />
          </a>
        ))}
      </div>
    </section>
  );
}

export function HomeMobile() {
  return (
    <div className="flex flex-col pb-4 md:hidden">
      <Hero />
      <Achievements />
      <Projects />
      <About />
      <Areas />
      <Team />
      <Apply />
      <Sponsors />
    </div>
  );
}
