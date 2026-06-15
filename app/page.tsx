'use client'

import { SplineScene } from "@/components/ui/splite";
import { motion, useScroll, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import {
  ArrowUpRight, Bot, Cpu, CircuitBoard, Radio,
  Layers, Zap
} from "lucide-react";
import { projects } from "@/lib/projects";
import { sponsors } from "@/lib/sponsors";
import BotDetection from "@/components/ui/bot-detection";
import SwarmNetwork from "@/components/ui/swarm-network";
import AiVision from "@/components/ui/ai-vision";

const easeOut = [0.22, 1, 0.36, 1] as const;

/* ═══════════════════════════════════════
   ANA SAYFA
   ═══════════════════════════════════════ */

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="flex flex-col">

      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-foreground/30 z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* HERO */}
      <section className="home-hero relative w-full min-h-screen overflow-hidden bg-background">
        {/* Logo — sayfanın en üst sol köşesi */}
        <motion.img
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: easeOut }}
          src="/merkutech.png"
          alt="MCT Sensor Merkutech"
          className="absolute top-4 left-5 sm:left-8 lg:left-12 z-[60] h-20 md:h-28 lg:h-36 w-auto"
        />

        <div className="relative z-10 mx-auto px-5 sm:px-8 lg:px-12 min-h-screen grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-8 lg:gap-6 items-center py-24 lg:py-0">
          {/* Sol — Başlık ve açıklama */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: easeOut }}
            className="order-2 lg:order-1 flex flex-col items-start max-w-xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter">
              MCT Sensor Merkutech
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 mt-4 max-w-md">
              İstanbul Arel Üniversitesi Robotik ve Teknoloji Kulübü
            </p>
            <p className="text-sm md:text-base text-neutral-500 mt-6 leading-relaxed max-w-md">
              Robotik, otonom sistemler, drone teknolojileri ve yapay zeka alanlarında
              projeler üreten; Teknofest ve uluslararası yarışmalara katılan bir
              öğrenci topluluğu.
            </p>
          </motion.div>

          {/* Sağ — Robot */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="order-1 lg:order-2 relative h-[55vh] sm:h-[65vh] lg:h-screen"
          >
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
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
                Hakkımızda
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold text-white tracking-tighter mt-4 mb-8"
              >
                Biz Kimiz?
              </motion.h2>
              <div className="space-y-5 text-neutral-400 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: easeOut, delay: 0.25 }}
                >
                  Merkutech, İstanbul Arel Üniversitesi bünyesinde faaliyet gösteren bir robotik ve teknoloji kulübüdür.
                  Öğrencilerin teorik bilgiyi pratiğe dökmesi, yenilikçi projeler geliştirmesi ve teknoloji dünyasında
                  kendini kanıtlaması için gereken ortamı ve kaynakları sunuyoruz.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: easeOut, delay: 0.4 }}
                >
                  Teknofest ve ulusal/uluslararası robotik yarışmalarına aktif olarak katılıyor, otonom sistemler,
                  robotik manipülatörler, drone teknolojileri ve yapay zeka alanlarında projeler üretiyoruz.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: easeOut, delay: 0.55 }}
                  className="text-neutral-300"
                >
                  <p className="mb-3">Sahip olduğumuz başarılar:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>🏆 Teknofest Şampiyonlar Ligi Şampiyonu</li>
                    <li>🥈 Teknofest 2025 Turizm İkincisi</li>
                    <li>🥉 Teknofest 2024 İnsansız Yerleşim Takımı Üçüncüsü</li>
                    <li>🎖️ AUVSI SUAS 2024 - USA</li>
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

      {/* DRONE WAVE */}
      <DroneWave />
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
                Hakkımızda
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold text-white tracking-tighter mt-4 mb-8"
              >
                Biz Kimiz?
              </motion.h2>
              <div className="space-y-5 text-neutral-400 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: easeOut, delay: 0.25 }}
                >
                  Merkutech, İstanbul Arel Üniversitesi bünyesinde faaliyet gösteren bir robotik ve teknoloji kulübüdür.
                  Öğrencilerin teorik bilgiyi pratiğe dökmesi, yenilikçi projeler geliştirmesi ve teknoloji dünyasında
                  kendini kanıtlaması için gereken ortamı ve kaynakları sunuyoruz.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: easeOut, delay: 0.4 }}
                >
                  Teknofest ve ulusal/uluslararası robotik yarışmalarına aktif olarak katılıyor, otonom sistemler,
                  robotik manipülatörler, drone teknolojileri ve yapay zeka alanlarında projeler üretiyoruz.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: easeOut, delay: 0.55 }}
                  className="text-neutral-300"
                >
                  <p className="mb-3">Sahip olduğumuz başarılar:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>🏆 Teknofest Şampiyonlar Ligi Şampiyonu</li>
                    <li>🥈 Teknofest 2025 Turizm İkincisi</li>
                    <li>🥉 Teknofest 2024 İnsansız Yerleşim Takımı Üçüncüsü</li>
                    <li>🎖️ AUVSI SUAS 2024 - USA</li>
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

      {/* TECH CARDS */}
      <section className="relative py-24 md:py-32 border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <BlurFade className="mb-4">
            <p className="text-xs uppercase tracking-widest text-neutral-600 mb-3">Teknolojiler</p>
          </BlurFade>
          <BlurFade className="mb-16" delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Neler Yapıyoruz?
            </h2>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BlurFade delay={0.15}>
              <BotDetection
                cardTitle="Bot Algılama"
                cardDescription="AI destekli bot tespiti ile platform güvenliğini artırıyor, sahte kayıtları minimuma indiriyoruz."
              />
            </BlurFade>
            <BlurFade delay={0.25}>
              <SwarmNetwork
                cardTitle="Sürü Ağı"
                cardDescription="Çoklu drone koordinasyonu ve sürü algoritmaları ile gerçek zamanlı iletişim protokolleri geliştiriyoruz."
              />
            </BlurFade>
            <BlurFade delay={0.35}>
              <AiVision
                cardTitle="Yapay Zeka Görüşü"
                cardDescription="Derin öğrenme ve bilgisayarlı görü ile robotlara karar verme yetisi kazandırıyoruz."
              />
            </BlurFade>
          </div>
        </div>
      </section>

      {/* PROJELER */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <BlurFade className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-600 mb-3">Projelerimiz</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Öne Çıkanlar
              </h2>
            </div>
            <Link
              href="/projelerimiz"
              className="group inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors"
            >
              Tümünü Gör
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
            <p className="text-xs uppercase tracking-widest text-neutral-600 mb-3">Çalışma Alanları</p>
          </BlurFade>
          <BlurFade className="mb-16" delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Neler Yapıyoruz?
            </h2>
          </BlurFade>

          <div className="border-t border-white/[0.08]">
            {[
              { num: "01", title: "Robotik Projeler", desc: "ROS tabanlı otonom sistemler, sensör füzyonu ve gerçek zamanlı kontrol algoritmaları ile robotlar geliştiriyoruz.", tags: ["ROS", "OpenCV", "Python"], icon: <Bot className="h-5 w-5" /> },
              { num: "02", title: "Yapay Zeka", desc: "Derin öğrenme ve bilgisayarlı görü ile robotlara karar verme yetisi kazandırıyoruz.", tags: ["TensorFlow", "PyTorch", "Computer Vision"], icon: <Cpu className="h-5 w-5" /> },
              { num: "03", title: "Drone Teknolojisi", desc: "Sürü algoritmaları, otonom uçuş ve çoklu drone koordinasyonu çalışmaları yürütüyoruz.", tags: ["MAVLink", "DroneKit", "Swarm AI"], icon: <Radio className="h-5 w-5" /> },
              { num: "04", title: "Gömülü Sistemler", desc: "Mikrodenetleyiciler, PCB tasarımı ve gerçek zamanlı gömülü yazılım geliştirme.", tags: ["STM32", "Arduino", "Embedded C"], icon: <CircuitBoard className="h-5 w-5" /> },
              { num: "05", title: "3D Modelleme", desc: "CAD, simülasyon ve hızlı prototipleme ile fikirden ürüne geçiş süreci.", tags: ["SolidWorks", "AutoCAD", "Gazebo"], icon: <Layers className="h-5 w-5" /> },
              { num: "06", title: "Yarışmalar", desc: "Teknofest ve uluslararası robotik yarışmalarına aktif katılım ve hazırlık.", tags: ["Teknofest", "Robotaksi", "Uluslararası"], icon: <Zap className="h-5 w-5" /> },
            ].map((item, i) => (
              <StaggerRow key={item.num} {...item} index={i} />
            ))}
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

/* Marquee — sonsuz, seamless */
function MarqueeSection() {
  const achievements = [
    "🏆 Teknofest Şampiyonlar Ligi Şampiyonu",
    "🥈 Teknofest 2025 Turizm",
    "🥉 Teknofest 2024 İYT",
    "🎖️ AUVSI SUAS 2024 — USA",
  ];

  // Tek satırda ekranı dolduracak kadar tekrarla
  const row = Array.from({ length: 4 }, () => achievements).flat();

  return (
    <section className="relative py-8 md:py-10 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
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
  return (
    <section className="relative py-20 md:py-24 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-10 md:mb-14">
          <BlurFade>
            <p className="text-xs font-mono text-neutral-600 tracking-[0.3em] uppercase mb-3">
              Sponsorlarımız
            </p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Bize Destek Verenler
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="text-sm text-neutral-500 mt-4 max-w-md mx-auto leading-relaxed">
              Çalışmalarımızı destekleyen kurum ve kuruluşlar.
            </p>
          </BlurFade>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {sponsors.map((sponsor, i) => {
            const initials = sponsor.name
              .split(/\s+/)
              .map((w) => w[0])
              .filter(Boolean)
              .slice(0, 2)
              .join("")
              .toUpperCase();

            const inner = (
              <>
                <div className="aspect-[5/3] flex items-center justify-center p-4">
                  {sponsor.logo ? (
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="h-full w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />
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
              <BlurFade key={sponsor.name} delay={0.15 + i * 0.05}>
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
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* Drone Wave */
function DroneWave() {
  const seededWave = (index: number) => {
    const value = Math.sin(index * 12.9898 + 78.233) * 43758.5453;
    return value - Math.floor(value);
  };

  const lines = Array.from({ length: 24 }, (_, i) => ({
    height: 25 + Math.abs(Math.sin(i * 0.6)) * 55 + seededWave(i) * 15,
    delay: i * 0.12,
    duration: 2.5 + seededWave(i + 24) * 0.8,
  }));

  return (
    <section className="drone-wave-section relative py-20 md:py-28 overflow-hidden border-b border-white/[0.06]">
      <div className="text-center mb-12">
        <p className="text-xs text-neutral-600 tracking-[0.3em] uppercase mb-3">Uçan Teknolojiler</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Drone Teknolojisi</h2>
      </div>

      <div className="flex items-center justify-center gap-[3px] md:gap-1 h-36 md:h-48 px-8">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            className="drone-wave-bar w-[3px] md:w-1 rounded-full"
            animate={{ height: [`${line.height * 0.35}%`, `${line.height}%`, `${line.height * 0.35}%`] }}
            transition={{ duration: line.duration, delay: line.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="text-center mt-10 max-w-lg mx-auto px-5">
        <p className="text-sm text-neutral-500 leading-relaxed">
          Otonom uçuş algoritmaları, çoklu drone koordinasyonu ve sürü teknolojileri üzerine çalışıyoruz.
        </p>
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
  num: string; title: string; desc: string; tags: string[]; icon: React.ReactNode; index: number;
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

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.1, ease: easeOut }}>
      <Link href={`/projelerimiz/${project.slug}`} className="group block rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden hover:border-white/[0.12] transition-all duration-500">
        <div className="aspect-[16/10] overflow-hidden relative">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
            transition={{ duration: 0.7, delay: index * 0.1 + 0.15, ease: easeOut }}
          />
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-neutral-200 transition-colors duration-300">{project.title}</h3>
          <p className="text-sm text-neutral-500 leading-relaxed line-clamp-2">{project.description}</p>
        </div>
      </Link>
    </motion.div>
  );
}

/* Süreç — bağlantılı yol (path/steps) */
function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const steps = [
    {
      num: "01",
      title: "Keşfet",
      desc: "Kulübümüzü ziyaret et, mevcut projeleri gör ve hangi alan sana uygun keşfet."
    },
    {
      num: "02",
      title: "Öğren",
      desc: "Atölye çalışmaları, eğitimler ve mentorluk ile yeni beceriler kazan."
    },
    {
      num: "03",
      title: "Üret",
      desc: "Kendi projeni başlat veya mevcut bir ekibe katıl. Beraber üret, beraber büyü."
    },
  ];

  return (
    <section ref={ref} className="relative py-32 md:py-40 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-20">
          <BlurFade>
            <p className="text-xs uppercase tracking-widest text-neutral-600 mb-3">Nasıl Başlarız</p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Süreç</h2>
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
