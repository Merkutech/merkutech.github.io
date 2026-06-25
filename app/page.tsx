'use client'

import { SplineScene } from "@/components/ui/splite";
import { motion, useScroll, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import {
  ArrowUpRight, Bot, Cpu, CircuitBoard, Radio,
  Layers, Zap, Users
} from "lucide-react";
import { projects } from "@/lib/projects";
import { sponsors } from "@/lib/sponsors";
import { teamMembers } from "@/lib/team";
import { useLanguage } from "@/lib/i18n/language-context";

const easeOut = [0.22, 1, 0.36, 1] as const;

/* ═══════════════════════════════════════
   ANA SAYFA
   ═══════════════════════════════════════ */

export default function Home() {
  const { scrollYProgress } = useScroll();
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">

      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-foreground/30 z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* HERO */}
      <section className="home-hero relative w-full min-h-screen overflow-hidden bg-background">
        <div className="relative z-10 mx-auto px-5 sm:px-8 lg:px-12 min-h-screen grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-6 lg:gap-6 items-center py-20 sm:py-24 lg:py-0">
          {/* Sol — Başlık ve açıklama */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: easeOut }}
            className="order-2 lg:order-1 flex flex-col items-start max-w-xl text-center sm:text-left mx-auto lg:mx-0"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter">
              {t.home.brand}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-neutral-400 mt-3 sm:mt-4 max-w-md">
              {t.home.subtitle}
            </p>
            <p className="text-sm md:text-base text-neutral-500 mt-5 sm:mt-6 leading-relaxed max-w-md">
              {t.home.description}
            </p>

            {/* Mobil — Hızlı erişim butonları */}
            <div className="flex sm:hidden items-center gap-3 mt-8 w-full">
              <Link
                href="/projelerimiz"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-colors"
              >
                {t.home.heroCta.projects}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/iletisim"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-white/15 bg-white/[0.04] text-white text-sm font-semibold hover:bg-white/[0.08] transition-colors"
              >
                {t.home.heroCta.contact}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Sağ — Robot */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="order-1 lg:order-2 relative h-[38vh] sm:h-[55vh] lg:h-screen"
          >
            <div className="absolute inset-0 rounded-3xl sm:rounded-none overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none z-[1] sm:hidden" />
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
      </section>

      {/* MARQUEE */}
      <MarqueeSection />

      {/* SPONSORLAR */}
      <SponsorsSection />

      {/* BİZ KİMİZ — Ana Sayfa */}
      <section className="relative py-24 md:py-32 border-y border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: easeOut }}
                className="text-xs font-mono text-neutral-600 tracking-[0.3em] uppercase block"
              >
                {t.home.about.label}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold text-white tracking-tighter mt-4 mb-8"
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
                  className="text-neutral-300"
                >
                  <p className="mb-3">{t.home.about.achievements}</p>
                  <ul className="space-y-2 list-disc list-inside">
                    {t.home.about.achievementsList.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
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
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-white/[0.02]">
                <img
                  src="/4.jpg"
                  alt="Merkutech Ekibi"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EKİBİMİZ — Kayan kartlar */}
      <TeamCarousel />

      {/* PROJELER */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <BlurFade className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-600 mb-3">{t.home.projects.label}</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.slice(0, 3).map((project, i) => (
              <MaskCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* NE YAPIYORUZ */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <BlurFade className="mb-4">
            <p className="text-xs uppercase tracking-widest text-neutral-600 mb-3">{t.home.areas.label}</p>
          </BlurFade>
          <BlurFade className="mb-16" delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              {t.home.areas.title}
            </h2>
          </BlurFade>

          <div className="border-t border-white/[0.08]">
            {t.home.areas.items.map((item, i) => {
              const icons = [<Bot className="h-5 w-5" key="bot"/>, <Cpu className="h-5 w-5" key="cpu"/>, <Radio className="h-5 w-5" key="radio"/>, <CircuitBoard className="h-5 w-5" key="cb"/>, <Layers className="h-5 w-5" key="layers"/>, <Zap className="h-5 w-5" key="zap"/>];
              return (
                <StaggerRow
                  key={item.num}
                  num={item.num}
                  title={item.title}
                  desc={item.desc}
                  tags={item.tags}
                  icon={icons[i]}
                  index={i}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* SÜREÇ — nasıl katılınır */}
      <ProcessSection />
    </div>
  );
}

/* ═══════════════════════════════════════
   ANİMASYON BİLEŞENLERİ
   ═══════════════════════════════════════ */

function TeamCarousel() {
  const { language } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const dragging = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);
  const rafRef = useRef(0);
  const speed = 0.8;

  const doubled = [...teamMembers, ...teamMembers];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const tick = () => {
      if (el && !paused.current && !dragging.current) {
        el.scrollLeft += speed;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft -= el.scrollWidth / 2;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafRef.current);
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
    <section className="relative py-20 md:py-28 overflow-hidden border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-10">
        <motion.span
          initial={{ opacity: 0, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-xs font-mono text-neutral-600 tracking-[0.3em] uppercase block"
        >
          {language === "tr" ? "Merkutech" : "Merkutech"}
        </motion.span>
        <div className="flex items-end justify-between gap-4">
          <motion.h2
            initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tighter mt-4"
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
            className="shrink-0 w-40 sm:w-48 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 flex flex-col items-center text-center gap-3 pointer-events-none"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/[0.04] border border-primary/10 flex items-center justify-center overflow-hidden">
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Users className="h-8 w-8 sm:h-10 sm:w-10 text-primary/40" />
              )}
            </div>
            <div>
              <p className="text-xs sm:text-sm font-medium text-white leading-tight">{member.name}</p>
              <p className="text-[10px] sm:text-xs text-neutral-500 mt-1 leading-tight">
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

/* Marquee — sonsuz, seamless */
function MarqueeSection() {
  const { t } = useLanguage();
  const achievements = t.home.marquee;

  // Tek satırda ekranı dolduracak kadar tekrarla
  const row = Array.from({ length: 4 }, () => achievements).flat();

  return (
    <section className="relative py-8 md:py-10 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap w-max will-change-transform">
        {/* İki aynı satır — CSS -50% animasyonu seamless döngü sağlar */}
        {[0, 1].map((si) => (
          <div key={si} className="flex items-center shrink-0">
            {row.map((text, i) => (
              <span key={`${si}-${i}`} className="flex items-center shrink-0">
                <span className="text-base md:text-lg lg:text-xl font-medium text-neutral-400 tracking-tight whitespace-nowrap px-4 md:px-6">
                  {text}
                </span>
                <span className="text-neutral-700 select-none">·</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
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
      className="relative py-20 md:py-24 border-b border-white/[0.06] overflow-hidden"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[60rem] h-[20rem] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in srgb, var(--foreground) 6%, transparent), transparent 70%)",
        }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.4, ease: easeOut }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-10 md:mb-14 overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
            className="text-xs font-mono text-neutral-600 tracking-[0.3em] uppercase mb-3"
          >
            {t.sponsors.label}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 28, filter: "blur(14px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-white tracking-tight"
          >
            {t.sponsors.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.35 }}
            className="text-sm text-neutral-500 mt-4 max-w-md mx-auto leading-relaxed"
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
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
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
                <div className="aspect-[5/3] flex items-center justify-center p-2 sm:p-3 md:p-4">
                  {sponsor.logo ? (
                    <div className="flex h-full w-full items-center justify-center rounded-lg bg-white p-2 sm:p-2.5 md:p-3">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  ) : (
                    <span className="text-2xl md:text-3xl font-mono font-bold text-neutral-600 group-hover:text-neutral-400 transition-colors duration-500 tracking-wider">
                      {initials}
                    </span>
                  )}
                </div>
                <div className="border-t border-white/[0.06] group-hover:border-white/[0.12] transition-colors duration-500 px-4 py-3">
                  <p className="text-[11px] md:text-xs text-neutral-500 group-hover:text-neutral-300 text-center font-medium transition-colors duration-500 truncate">
                    {sponsor.name}
                  </p>
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
              >
                {sponsor.url ? (
                  <a
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden h-full"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="group flex flex-col rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden h-full">
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

/* Stagger Row */
function StaggerRow({ num, title, desc, tags, icon, index }: {
  num: string; title: string; desc: string; tags: readonly string[]; icon: React.ReactNode; index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -15 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06, ease: easeOut }}
      className="border-b border-white/[0.08] cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center justify-between py-6 md:py-8">
        <div className="flex items-center gap-6 md:gap-10">
          <span className="text-sm font-mono text-neutral-700 w-8">{num}</span>
          <h3 className={`text-xl md:text-2xl font-semibold transition-colors duration-300 ${hovered ? 'text-neutral-300' : 'text-white'}`}>{title}</h3>
        </div>
        <motion.div animate={{ rotate: hovered ? 45 : 0 }} transition={{ duration: 0.25 }} className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center text-neutral-500">
          <ArrowUpRight className="h-4 w-4" />
        </motion.div>
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: easeOut }} className="overflow-hidden">
            <div className="pb-8 pl-14 md:pl-[4.5rem] flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-lg">
                <p className="text-sm text-neutral-500 leading-relaxed mb-4">{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => <span key={tag} className="px-2.5 py-1 bg-white/[0.04] rounded-md text-[11px] font-mono text-neutral-500">{tag}</span>)}
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] flex items-center justify-center text-neutral-400 shrink-0">{icon}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* Mask Card */
function MaskCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { language } = useLanguage();
  const tr = project.translations[language];

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.1, ease: easeOut }}>
      <Link href={`/projelerimiz/${project.slug}`} className="group block rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden hover:border-white/[0.12] transition-all duration-500">
        <div className="aspect-[16/10] overflow-hidden relative">
          <motion.img
            src={project.image}
            alt={tr.title}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
            transition={{ duration: 0.7, delay: index * 0.1 + 0.15, ease: easeOut }}
          />
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-neutral-200 transition-colors duration-300">{tr.title}</h3>
          <p className="text-sm text-neutral-500 leading-relaxed line-clamp-2">{tr.description}</p>
        </div>
      </Link>
    </motion.div>
  );
}

/* Süreç — bağlantılı yol (path/steps) */
function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  const steps = t.home.process.steps;

  return (
    <section ref={ref} className="relative py-32 md:py-40 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-20">
          <BlurFade>
            <p className="text-xs uppercase tracking-widest text-neutral-600 mb-3">{t.home.process.label}</p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">{t.home.process.title}</h2>
          </BlurFade>
        </div>

        {/* Desktop: Yatay Path */}
        <div className="hidden md:block relative h-[420px]">
          {/* Yatal bağlantı çizgisi */}
          <motion.div
            className="absolute top-1/2 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, ease: easeOut, delay: 0.2 }}
            style={{ originX: 0 }}
          />

          <div className="flex justify-between items-center h-full px-[10%]">
            {steps.map((step, i) => {
              const isBottom = i === 1;
              return (
                <div key={step.num} className="relative flex-1 flex flex-col items-center h-full">
                  {/* Node dairesi */}
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.25 + 0.5, ease: easeOut }}
                  >
                    <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-neutral-900 border border-white/20 shadow-[0_0_0_4px_rgba(0,0,0,0.5)]">
                      <span className="text-xs font-mono text-neutral-400">{step.num}</span>
                      <motion.div
                        className="absolute inset-0 rounded-full border border-white/10"
                        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                      />
                    </div>
                  </motion.div>

                  {/* Kart */}
                  <motion.div
                    className={`absolute w-72 ${isBottom ? 'top-1/2 mt-10' : 'bottom-1/2 mb-10'}`}
                    initial={{ opacity: 0, y: isBottom ? 30 : -30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: i * 0.25 + 0.6, ease: easeOut }}
                  >
                    <div className="group relative p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-500 text-center">
                      <div className={`absolute left-1/2 -translate-x-1/2 w-px h-6 bg-white/10 ${isBottom ? '-top-6' : '-bottom-6'}`} />
                      <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{step.title}</h3>
                      <p className="text-sm text-neutral-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Dikey Path */}
        <div className="md:hidden relative pl-12">
          {/* Dikey bağlantı çizgisi */}
          <motion.div
            className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: easeOut, delay: 0.2 }}
            style={{ originY: 0 }}
          />

          <div className="space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.25 + 0.4, ease: easeOut }}
              >
                {/* Node */}
                <motion.div
                  className="absolute left-6 -translate-x-1/2 top-0 z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.25 + 0.6, ease: easeOut }}
                >
                  <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900 border border-white/20 shadow-[0_0_0_4px_rgba(0,0,0,0.5)]">
                    <span className="text-[10px] font-mono text-neutral-400">{step.num}</span>
                  </div>
                </motion.div>

                {/* Kart */}
                <div className="pl-8">
                  <div className="group p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-500">
                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{step.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
