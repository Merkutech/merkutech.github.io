'use client'

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { InteractiveRobotSpline } from "@/components/ui/interactive-3d-robot";
import { projects } from "@/lib/projects";
import { useLanguage } from "@/lib/i18n/language-context";

const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

const easeOut = [0.22, 1, 0.36, 1] as const;

function Item({ label, en }: { label: string; en: string }) {
  const { language } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: easeOut }}
      className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.03] transition-colors"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
      <span className="text-sm text-neutral-300">{language === "tr" ? label : en}</span>
    </motion.div>
  );
}

export default function ProjelerimizPage() {
  const { t, language } = useLanguage();
  return (
    <div className="flex flex-col">
      {/* Üst — başlık */}
      <div className="pt-20 sm:pt-24 pb-6 sm:pb-8 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono text-neutral-600 tracking-[0.3em] uppercase"
          >
            {t.projects.label}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter mt-2"
          >
            {t.projects.title}
          </motion.h1>
        </div>
      </div>

      {/* Ana içerik — projeler solda, robot sağda (sticky) */}
      <section className="relative">
        <div className="flex flex-col lg:flex-row items-start">
          {/* Sol — Projeler */}
          <div className="w-full lg:w-2/3 px-5 sm:px-8 lg:px-12 pb-12 sm:pb-32 order-1 lg:order-1">
            <div className="max-w-3xl mx-auto lg:mx-0 space-y-20 sm:space-y-32 md:space-y-40">
              {projects.map((project, i) => {
                const tr = project.translations[language];
                return (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: easeOut }}
                >
                  <Link href={`/projelerimiz/${project.slug}`} className="group block">
                    <span className="text-sm sm:text-base font-mono text-neutral-700 block mb-5 sm:mb-8">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {project.image && (
                      <div className="aspect-[16/9] overflow-hidden rounded-xl sm:rounded-2xl bg-white/[0.02] mb-6 sm:mb-10">
                        <img
                          src={project.image}
                          alt={tr.title}
                          width={1280}
                          height={720}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                        />
                      </div>
                    )}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white group-hover:text-neutral-200 transition-colors leading-tight tracking-tight mb-4 sm:mb-6">
                      {tr.title}
                    </h2>
                    <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-6 sm:mb-8">
                      {tr.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-sm sm:text-base text-white group-hover:text-neutral-300 transition-colors">
                      {t.projects.detail}
                      <ArrowUpRight className="h-4 sm:h-5 w-4 sm:w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
                );
              })}
            </div>
          </div>

          {/* Sağ — Robot (sticky) */}
          <div className="w-full lg:w-1/3 order-2 lg:order-2 lg:sticky lg:top-24 lg:self-start z-20">
            <div className="relative h-[42vh] sm:h-[50vh] lg:h-[calc(100vh-6rem)] overflow-hidden">
              <InteractiveRobotSpline scene={ROBOT_SCENE_URL} className="w-full h-full" />
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-background via-background/95 to-transparent pointer-events-none z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* 2021 - 2025 Çalışmaları */}
      <section className="relative border-t border-white/[0.06] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            <span className="text-xs font-mono text-neutral-600 tracking-[0.3em] uppercase">
              {language === "tr" ? "Geçmiş" : "History"}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mt-4 mb-10">
              {language === "tr" ? "2021 - 2025 Çalışmaları" : "2021 - 2025 Work"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Item label="Yangın Tespit ve Analiz Dron'u" en="Fire Detection & Analysis Drone" />
              <Item label="Yangın Müdahale Kapsülü" en="Fire Intervention Capsule" />
              <Item label="AquaVista Denizaltı Sistemi" en="AquaVista Submarine System" />
              <Item label="Engelsiz Kampüs Mobil Uygulama" en="Barrier-Free Campus Mobile App" />
              <Item label="Karşı Ateş Teknikli İHA" en="Counter-Fire UAV" />
              <Item label="Çeşitli Mobil Uygulamalar" en="Various Mobile Applications" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Biz Kimiz */}
      <section className="relative border-t border-white/[0.06] py-28 md:py-36">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <div className="order-2 lg:order-1">
              <span className="text-xs font-mono text-neutral-600 tracking-[0.3em] uppercase">
                {t.home.about.label}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mt-4 mb-8">
                {t.home.about.title}
              </h2>
              <div className="space-y-6 text-neutral-400 leading-relaxed">
                <p>{t.home.about.p1}</p>
                <p>{t.home.about.p2}</p>
                <div className="text-neutral-300">
                  <p className="mb-3">{t.home.about.achievements}</p>
                  <ul className="space-y-2 list-disc list-inside">
                    {t.home.about.achievementsList.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeOut }}
              className="order-1 lg:order-2"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-white/[0.02]">
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}
