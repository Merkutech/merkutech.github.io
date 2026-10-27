'use client'

import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { projects } from "@/lib/projects";
import { useLanguage } from "@/lib/i18n/language-context";

const easeOut = [0.22, 1, 0.36, 1] as const;

const pastWork = [
  { tr: "Yangın Tespit ve Analiz Dron'u", en: "Fire Detection & Analysis Drone" },
  { tr: "Yangın Müdahale Kapsülü", en: "Fire Intervention Capsule" },
  { tr: "AquaVista Denizaltı Sistemi", en: "AquaVista Submarine System" },
  { tr: "Engelsiz Kampüs Mobil Uygulama", en: "Barrier-Free Campus Mobile App" },
  { tr: "Karşı Ateş Teknikli İHA", en: "Counter-Fire UAV" },
  { tr: "Çeşitli Mobil Uygulamalar", en: "Various Mobile Applications" },
];

/* Proje satırı: görsel ve metin sırayla sağa sola geçer */
function ProjectRow({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const { t, language } = useLanguage();
  const tr = project.translations[language];
  const flip = index % 2 === 1;

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
      <Link
        href={`/projelerimiz/${project.slug}`}
        aria-label={tr.title}
        className={`group relative block lg:col-span-7 ${flip ? "lg:order-2" : ""}`}
      >
        <motion.div
          initial={{ clipPath: "inset(12% 12% 12% 12% round 24px)", opacity: 0 }}
          animate={inView ? { clipPath: "inset(0% 0% 0% 0% round 24px)", opacity: 1 } : {}}
          transition={{ duration: 1.1, ease: easeOut }}
          className="aspect-[16/10] overflow-hidden rounded-3xl bg-foreground/[0.04]"
        >
          {project.image && (
            <div className="h-full w-full transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]">
            <motion.img
              src={project.image}
              alt={tr.title}
              width={1280}
              height={800}
              loading="lazy"
              decoding="async"
              initial={{ scale: 1.15 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 1.4, ease: easeOut }}
              className="h-full w-full object-cover"
            />
            </div>
          )}
        </motion.div>
      </Link>

      <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.2 }}
          className="block font-mono text-sm text-muted-foreground"
        >
          {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.3 }}
          className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.035em] text-foreground"
        >
          {tr.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.4 }}
          className="mt-5 text-base leading-relaxed text-muted-foreground"
        >
          {tr.description}
        </motion.p>

        <ul className="mt-7 space-y-2.5">
          {tr.features.slice(0, 3).map((feature, i) => (
            <motion.li
              key={feature}
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, ease: easeOut, delay: 0.5 + i * 0.08 }}
              className="flex items-baseline gap-3 text-sm text-foreground/80"
            >
              <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              {feature}
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.75 }}
        >
          <Link
            href={`/projelerimiz/${project.slug}`}
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-foreground/85"
          >
            {t.projects.detail}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default function ProjelerimizPage() {
  const { t, language } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* Başlık */}
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-24 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            {t.projects.label}
          </motion.span>
          <div className="overflow-hidden pb-2">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: easeOut, delay: 0.1 }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold text-foreground tracking-[-0.05em] mt-4 leading-[0.95]"
            >
              {t.projects.title}
            </motion.h1>
          </div>

          {/* Proje dizini: tıklayınca ilgili projeye kayar */}
          <motion.ol
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06, delayChildren: 0.4 } } }}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-3"
          >
            {projects.map((project, i) => (
              <motion.li
                key={project.slug}
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } } }}
              >
                <a href={`#${project.slug}`} className="inline-flex items-baseline gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <span className="font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
                  {project.translations[language].title}
                </a>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* Projeler */}
      <section className="px-5 sm:px-8 lg:px-12 pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto space-y-24 sm:space-y-36">
          {projects.map((project, i) => (
            <div key={project.slug} id={project.slug} className="scroll-mt-28">
              <ProjectRow project={project} index={i} />
            </div>
          ))}
        </div>
      </section>

      {/* 2021 - 2025 Çalışmaları */}
      <section className="px-5 sm:px-8 lg:px-12 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            <span className="eyebrow">{language === "tr" ? "Geçmiş" : "History"}</span>
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-[-0.035em] mt-4 mb-12">
              {language === "tr" ? "2021 - 2025 Çalışmaları" : "2021 - 2025 Work"}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {pastWork.map((item, i) => (
              <motion.div
                key={item.tr}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: easeOut }}
                className="group relative overflow-hidden rounded-2xl bg-foreground/[0.03] p-6 min-h-[9rem] flex flex-col justify-between"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 bg-foreground origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                />
                <span className="relative font-mono text-xs text-muted-foreground group-hover:text-background/60 transition-colors duration-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="relative mt-8 text-lg font-medium leading-snug text-foreground group-hover:text-background transition-colors duration-500">
                  {language === "tr" ? item.tr : item.en}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
