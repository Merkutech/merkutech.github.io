'use client'

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { ArrowUpRight, Users } from "lucide-react";
import { projects } from "@/lib/projects";
import { sponsors } from "@/lib/sponsors";
import { applicationTeams } from "@/lib/applications";
import { TeamApplyCard } from "@/components/ui/team-apply-card";
import { AreaAnimation } from "@/components/ui/area-animations";
import { teamMembers } from "@/lib/team";
import { useLanguage } from "@/lib/i18n/language-context";
import { achievementParts } from "@/lib/achievements";

const easeOut = [0.22, 1, 0.36, 1] as const;

/* ═══════════════════════════════════════
   ANA SAYFA
   ═══════════════════════════════════════ */

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">

      {/* Scroll Progress (CSS-only, no scroll listener) */}
      <div
        aria-hidden
        className="fixed top-0 left-0 right-0 h-[2px] bg-foreground/20 z-[100] origin-left pointer-events-none"
      >
        <div
          className="h-full w-full bg-brand origin-left"
          style={{
            transform: 'scaleX(var(--scroll, 0))',
            transition: 'transform 80ms linear',
            willChange: 'transform',
          }}
        />
        <ScrollProgressDriver />
      </div>

      {/* HERO: yalnızca marka ve dereceler; kişi fotoğrafı içermez */}
      <section className="hero-brand">
        <div className="hero-brand-top">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="hero-brand-intro"
          >
            <RecruitingBadge />
            <p className="hero-brand-subtitle">{t.home.subtitle}</p>
            <p className="hero-brand-text">{t.home.description}</p>
            <div className="hero-brand-actions">
              <Link href="/projelerimiz" className="hero-btn hero-btn-primary">
                {t.home.heroCta.projects}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/iletisim" className="hero-btn">
                {t.home.heroCta.contact}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
          <div className="hero-brand-mark" aria-hidden="true">
            <img className="mark-on-light" src="/mark-on-light.svg" alt="" width="540" height="390" />
            <img className="mark-on-dark" src="/mark-on-dark.svg" alt="" width="540" height="390" />
          </div>
        </div>

        <h1 className="hero-wordmark" aria-label={t.home.brand}>
          <span aria-hidden="true">MERKUTECH</span>
        </h1>

        <ul className="hero-stats">
          {t.home.heroStats.map((stat) => (
            <li key={stat.label}>
              <b>{stat.value}</b>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* SPONSORLAR */}
      <SponsorsSection />

      {/* BİZ KİMİZ: Ana Sayfa */}
      <section className="home-section cv-auto">
        <div className="home-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: easeOut }}
                className="eyebrow"
              >
                {t.home.about.label}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
                className="home-title mt-4 mb-8"
              >
                {t.home.about.title}
              </motion.h2>
              <div className="space-y-5 text-neutral-400 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: easeOut, delay: 0.25 }}
                >
                  {t.home.about.p1}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: easeOut, delay: 0.4 }}
                >
                  {t.home.about.p2}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: easeOut, delay: 0.55 }}
                >
                  <p className="mb-4 text-sm font-medium text-foreground">{t.home.about.achievements}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {t.home.about.achievementsList.map((item) => {
                      const { Icon, text } = achievementParts(item);
                      return (
                        <li key={item} className="flex items-start gap-3 rounded-xl bg-foreground/[0.03] px-3.5 py-3 text-sm text-foreground/85">
                          <Icon className="mt-0.5 h-4 w-4 shrink-0 text-foreground/60" />
                          <span className="leading-snug">{text}</span>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: easeOut, delay: 0.2 }}
            >
              <div className="aspect-[4/3] sm:aspect-[4/5] overflow-hidden rounded-2xl bg-foreground/[0.03]">
                <img
                  src="/4.jpg"
                  alt="Merkutech Ekibi"
                  width={800}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EKİBİMİZ: Kayan kartlar */}
      <TeamCarousel />

      {/* PROJELER */}
      <section className="home-section cv-auto">
        <div className="home-wrap">
          <BlurFade className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="eyebrow mb-3">{t.home.projects.label}</p>
              <h2 className="home-title">
                {t.home.projects.title}
              </h2>
            </div>
            <Link
              href="/projelerimiz"
              className="group inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors"
            >
              {t.home.projects.viewAll}
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </BlurFade>

          <div className="mobile-rail flex gap-3 sm:grid sm:grid-cols-2 lg:grid-cols-3 md:gap-4">
            {projects.slice(0, 3).map((project, i) => (
              <MaskCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* NE YAPIYORUZ */}
      <section className="home-section cv-auto">
        <div className="home-wrap">
          <BlurFade className="mb-4">
            <p className="eyebrow mb-3">{t.home.areas.label}</p>
          </BlurFade>
          <BlurFade className="mb-16" delay={0.1}>
            <h2 className="home-title">
              {t.home.areas.title}
            </h2>
          </BlurFade>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {t.home.areas.items.map((item, i) => (
              <AreaCard key={item.num} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* EKİPLERİMİZ: başvuru */}
      <TeamsSection />
    </div>
  );
}

/* Scroll progress: passive listener, writes CSS var without re-render */
function ScrollProgressDriver() {
  useEffect(() => {
    let ticking = false;
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const p = max > 0 ? doc.scrollTop / max : 0;
      doc.style.setProperty('--scroll', String(Math.min(1, Math.max(0, p))));
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return null;
}

/* ═══════════════════════════════════════
   ANİMASYON BİLEŞENLERİ
   ═══════════════════════════════════════ */

function TeamCarousel() {
  const { language } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const paused = useRef(false);
  const dragging = useRef(false);
  const inView = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);
  const rafRef = useRef(0);
  const speed = 0.8;

  const doubled = [...teamMembers, ...teamMembers];

  useEffect(() => {
    const el = scrollRef.current;
    const section = sectionRef.current;
    if (!el || !section) return;

    if (typeof IntersectionObserver !== 'undefined') {
      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            inView.current = entry.isIntersecting;
          }
        },
        { rootMargin: '100px' }
      );
      io.observe(section);
      return () => io.disconnect();
    }
    inView.current = true;
    return undefined;
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let running = false;
    const tick = () => {
      if (el && inView.current && !paused.current && !dragging.current) {
        el.scrollLeft += speed;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft -= el.scrollWidth / 2;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running) return;
      running = true;
      rafRef.current = requestAnimationFrame(tick);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(rafRef.current);
    };

    const visIo = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) start();
          else stop();
        }
      },
      { rootMargin: '200px' }
    );
    visIo.observe(el);

    return () => {
      visIo.disconnect();
      stop();
    };
  }, []);

  const onDown = (clientX: number) => {
    const el = scrollRef.current;
    if (!el) return;
    dragging.current = true;
    startX.current = clientX;
    startScroll.current = el.scrollLeft;
  };

  const onMove = (clientX: number) => {
    const el = scrollRef.current;
    if (!dragging.current || !el) return;
    const dx = startX.current - clientX;
    el.scrollLeft = startScroll.current + dx;
  };

  const onUp = () => {
    dragging.current = false;
  };

  return (
    <section ref={sectionRef} className="home-section overflow-hidden cv-auto">
      <div className="home-wrap mb-10">
        <motion.span
          initial={{ opacity: 0, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="eyebrow"
        >
          {language === "tr" ? "Merkutech" : "Merkutech"}
        </motion.span>
        <div className="flex items-end justify-between gap-4">
          <motion.h2
            initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
            className="home-title mt-4"
          >
            {language === "tr" ? "Ekibimiz" : "Our Team"}
          </motion.h2>
          <Link
            href="/team/"
            className="shrink-0 inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors group pb-1"
          >
            {language === "tr" ? "Tümünü Gör" : "View All"}
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div
        ref={scrollRef}
        className="flex gap-4 px-5 sm:px-8 lg:px-12 overflow-x-auto select-none"
        style={{ scrollbarWidth: "none", cursor: "grab" }}
        onMouseEnter={() => { paused.current = true; }}
        onMouseLeave={() => { paused.current = false; dragging.current = false; }}
        onMouseDown={(e) => onDown(e.clientX)}
        onMouseMove={(e) => onMove(e.clientX)}
        onMouseUp={onUp}
        onTouchStart={(e) => { paused.current = true; onDown(e.touches[0].clientX); }}
        onTouchMove={(e) => onMove(e.touches[0].clientX)}
        onTouchEnd={() => { paused.current = false; onUp(); }}
      >
        {doubled.map((member, i) => (
          <div
            key={`${member.id}-${i}`}
            className="shrink-0 w-40 sm:w-48 rounded-2xl bg-foreground/[0.03] px-4 pt-6 pb-5 flex flex-col items-center text-center gap-4 pointer-events-none"
          >
            <div className="team-avatar w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-border flex items-center justify-center overflow-hidden">
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              ) : (
                <Users className="h-8 w-8 sm:h-10 sm:w-10 text-primary/40" />
              )}
            </div>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-foreground leading-tight">{member.name}</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground mt-1 leading-tight">
                {member.role[language as keyof typeof member.role]}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

/* Marquee: sonsuz, seamless */
/* Recruiting Badge */
function RecruitingBadge() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: easeOut, delay: 0.4 }}
      className="mb-5 self-start"
    >
      <Link
        href="/basvuru/"
        className="group inline-flex items-center gap-2.5 rounded-full bg-foreground/[0.05] py-1.5 pl-2 pr-3.5 text-left transition-colors hover:bg-foreground/[0.09]"
      >
        <span className="relative flex h-6 items-center gap-2 rounded-full bg-foreground px-2.5 text-[11px] font-semibold uppercase tracking-wider text-background">
          {t.home.recruiting.badge}
        </span>
        <span className="hidden sm:inline text-xs text-muted-foreground group-hover:text-foreground transition-colors">
          {t.home.recruiting.teams}
        </span>
        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
      </Link>
    </motion.div>
  );
}

/* Sponsors */
function SponsorsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  return (
      <section
      ref={ref}
      className="home-section overflow-hidden cv-auto"
    >
      <div className="home-wrap">
        <div className="mb-10 md:mb-14">
          <motion.p
            initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
            className="eyebrow mb-3"
          >
            {t.sponsors.label}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 28, filter: "blur(14px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
            className="home-title"
          >
            {t.sponsors.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.35 }}
            className="home-lede"
          >
            {t.sponsors.description}
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } },
          }}
          className="mobile-rail flex gap-3 sm:flex-wrap md:gap-4"
        >
          {sponsors.map((sponsor) => {
            const initials = sponsor.name
              .split(/\s+/)
              .map((w) => w[0])
              .filter(Boolean)
              .slice(0, 2)
              .join("")
              .toUpperCase();

            const inner = (
              <>
                <div className="aspect-[5/3] shrink-0 overflow-hidden flex items-center justify-center">
                  {sponsor.logo ? (
                    <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-white p-3 sm:p-4 [container-type:size] transition-transform duration-500 group-hover:scale-[0.98]">
                      {/* Eşit görsel alan: genişlik oranın kareköküyle ölçeklenir */}
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        loading="lazy"
                        decoding="async"
                        className="h-auto max-h-full max-w-full object-contain"
                        style={{ width: `min(100cqw, ${(Math.sqrt(sponsor.logoRatio ?? 1) * 85).toFixed(1)}cqh)` }}
                      />
                    </div>
                  ) : (
                    <span className="text-2xl md:text-3xl font-mono font-bold text-neutral-600 group-hover:text-neutral-400 transition-colors duration-500 tracking-wider">
                      {initials}
                    </span>
                  )}
                </div>
                <div className="flex items-start justify-between gap-2 px-2 pt-4 pb-1.5">
                  <p className="text-xs md:text-sm font-medium leading-snug text-foreground/80 group-hover:text-foreground transition-colors duration-500">
                    {sponsor.name}
                  </p>
                  {sponsor.url && (
                    <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  )}
                </div>
              </>
            );

            return (
              <motion.div
                key={sponsor.name}
                variants={{
                  hidden: { opacity: 0, y: 24, scale: 0.92, filter: "blur(8px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                    transition: { duration: 0.6, ease: easeOut },
                  },
                }}
                whileHover={{ y: -4, transition: { duration: 0.25, ease: easeOut } }}
                className="w-[44%] shrink-0 snap-start sm:w-[calc((100%-1.5rem)/3)] md:w-[calc((100%-2rem)/3)] lg:w-[calc((100%-4rem)/5)]"
              >
                {sponsor.url ? (
                  <a
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col rounded-2xl bg-foreground/[0.03] hover:bg-foreground/[0.06] p-3 transition-colors duration-500 overflow-hidden h-full"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="group flex flex-col rounded-2xl bg-foreground/[0.03] hover:bg-foreground/[0.06] p-3 transition-colors duration-500 overflow-hidden h-full">
                    {inner}
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* Blur Fade */
function BlurFade({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: "blur(8px)", y: 12 }}
      animate={isInView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Neler Yapıyoruz kartı: başvuru kartlarıyla aynı dil, alana özel animasyon */
function AreaCard({ item, index }: {
  item: { num: string; title: string; desc: string; tags: readonly string[] };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: easeOut }}
      className="group relative flex flex-col p-5 sm:p-6 lg:p-7 rounded-2xl bg-foreground/[0.03] overflow-hidden"
    >
      <span
        aria-hidden
        className="absolute inset-0 bg-foreground origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
      />

      <span className="relative text-sm font-medium tabular-nums text-muted-foreground group-hover:text-background/60 transition-colors duration-500">
        {item.num}
      </span>

      <div className="relative flex h-32 sm:h-40 items-center justify-center">
        <div className="w-full max-w-[12rem] text-foreground/80 group-hover:text-background transition-colors duration-500">
          <AreaAnimation index={index} />
        </div>
      </div>

      <div className="relative">
        <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight text-foreground group-hover:text-background transition-colors duration-500">
          {item.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-background/70 transition-colors duration-500">
          {item.desc}
        </p>
        <p className="mt-5 text-xs font-medium text-muted-foreground/80 group-hover:text-background/60 transition-colors duration-500">
          {item.tags.join(" / ")}
        </p>
      </div>
    </motion.div>
  );
}

/* Öne çıkan proje kartı: Projelerimiz sayfasıyla aynı dil */
function MaskCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { t, language } = useLanguage();
  const tr = project.translations[language];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: easeOut }}
      className="h-full w-[82%] shrink-0 snap-start sm:w-auto"
    >
      <Link
        href={`/projelerimiz/${project.slug}`}
        className="group flex h-full flex-col rounded-2xl bg-foreground/[0.03] p-3 transition-colors duration-500 hover:bg-foreground/[0.06]"
      >
        <motion.div
          initial={{ clipPath: "inset(10% 10% 10% 10% round 14px)", opacity: 0 }}
          animate={isInView ? { clipPath: "inset(0% 0% 0% 0% round 14px)", opacity: 1 } : {}}
          transition={{ duration: 1, delay: index * 0.1 + 0.1, ease: easeOut }}
          className="aspect-[16/10] overflow-hidden rounded-[14px] bg-foreground/[0.04]"
        >
                    <div className="h-full w-full transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]">
            <motion.img
              src={project.image}
              alt={tr.title}
              width={640}
              height={400}
              loading="lazy"
              decoding="async"
              initial={{ scale: 1.15 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 1.3, delay: index * 0.1 + 0.1, ease: easeOut }}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <div className="flex flex-1 flex-col px-3 pt-5 pb-3">
          <span className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
          <h3 className="mt-3 text-xl lg:text-2xl font-semibold tracking-tight text-foreground">{tr.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">{tr.description}</p>
          <span className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground">
            {t.projects.detail}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

/* Ekiplerimiz: her ekipten başvuru sayfasına */
function TeamsSection() {
  const { language } = useLanguage();
  const lang = language as "tr" | "en";
  const c =
    lang === "tr"
      ? { label: "Başvurular açık", title: "Ekiplerimiz", apply: "Başvur" }
      : { label: "Applications open", title: "Our Teams", apply: "Apply" };

  return (
    <section className="home-section cv-auto">
      <div className="home-wrap">
        <BlurFade>
          <p className="eyebrow mb-3">{c.label}</p>
        </BlurFade>
        <BlurFade delay={0.1} className="mb-12">
          <h2 className="home-title">{c.title}</h2>
        </BlurFade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {applicationTeams.map((team, i) => (
            <TeamApplyCard
              key={team.id}
              team={team}
              index={i}
              lang={lang}
              href={`/basvuru/#${team.id}`}
              cta={c.apply}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
