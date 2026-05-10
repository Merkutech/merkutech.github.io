'use client'

import { SplineScene } from "@/components/ui/splite";
import { motion, useScroll, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import {
  ArrowRight, ArrowUpRight, Bot, Cpu, CircuitBoard, Radio,
  Layers, Zap
} from "lucide-react";
import { projects } from "@/lib/projects";

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
        className="fixed top-0 left-0 right-0 h-[2px] bg-white/30 z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* HERO */}
      <section className="relative w-full h-screen overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </motion.div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
      </section>

      {/* MARQUEE */}
      <MarqueeSection />

      {/* DRONE WAVE */}
      <DroneWave />

      {/* MANIFESTO */}
      <section className="relative py-32 md:py-44">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <BlurFade>
            <p className="text-xs uppercase tracking-widest text-neutral-600 mb-8">Misyonumuz</p>
          </BlurFade>
          <BlurFade delay={0.15}>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] tracking-tight text-white">
              Teoriyi pratiğe döken, kodu canlı bir varlığa çeviren ve teknolojiyi geleceğin dili olarak gören bir topluluğuz.
            </h2>
          </BlurFade>
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

      {/* SÜREÇ — nasıl katılınır */}
      <ProcessSection />
    </div>
  );
}

/* ═══════════════════════════════════════
   ANİMASYON BİLEŞENLERİ
   ═══════════════════════════════════════ */

/* Marquee */
function MarqueeSection() {
  const words = ["ROS", "OpenCV", "Python", "C++", "TensorFlow", "PyTorch", "MAVLink", "DroneKit", "LIDAR", "SLAM", "Gazebo", "SolidWorks", "AutoCAD", "Embedded C", "STM32", "Arduino"];
  return (
    <section className="relative py-14 overflow-hidden border-y border-white/[0.06]">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex whitespace-nowrap">
        {[...Array(2)].map((_, si) => (
          <motion.div key={si} className="flex items-center gap-12 pr-12" animate={{ x: ["0%", "-100%"] }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }}>
            {words.map((w, i) => <span key={i} className="text-sm md:text-base font-mono text-neutral-700 whitespace-nowrap">{w}</span>)}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* Drone Wave */
function DroneWave() {
  const lines = Array.from({ length: 24 }, (_, i) => ({
    height: 25 + Math.abs(Math.sin(i * 0.6)) * 55 + Math.random() * 15,
    delay: i * 0.12,
    duration: 2.5 + Math.random() * 0.8,
  }));

  return (
    <section className="relative py-20 md:py-28 overflow-hidden border-b border-white/[0.06]">
      <div className="text-center mb-12">
        <p className="text-xs text-neutral-600 tracking-[0.3em] uppercase mb-3">Uçan Teknolojiler</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Drone Teknolojisi</h2>
      </div>

      <div className="flex items-center justify-center gap-[3px] md:gap-1 h-36 md:h-48 px-8">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            className="w-[3px] md:w-1 rounded-full bg-white/[0.06]"
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
          <div className="flex items-center gap-2 mb-3">
            <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium ${project.status === 'Aktif' ? 'bg-emerald-500/10 text-emerald-400' : project.status === 'Tamamlandı' ? 'bg-blue-500/10 text-blue-400' : 'bg-amber-500/10 text-amber-400'}`}>
              <span className={`w-1 h-1 rounded-full ${project.status === 'Aktif' ? 'bg-emerald-400' : project.status === 'Tamamlandı' ? 'bg-blue-400' : 'bg-amber-400'}`} />
              {project.status}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-neutral-200 transition-colors duration-300">{project.title}</h3>
          <p className="text-sm text-neutral-500 leading-relaxed mb-4 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => <span key={tag} className="px-2 py-0.5 bg-white/[0.04] rounded text-[10px] font-mono text-neutral-600">{tag}</span>)}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* Süreç — nasıl katılınır */
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
    <section ref={ref} className="relative py-24 md:py-32 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <BlurFade>
            <p className="text-xs uppercase tracking-widest text-neutral-600 mb-3">Nasıl Başlarız</p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Süreç</h2>
          </BlurFade>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15, ease: easeOut }}
              className="relative p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.1] hover:bg-white/[0.03] transition-all duration-500 group"
            >
              {/* Numara */}
              <span className="text-5xl font-bold text-white/[0.04] group-hover:text-white/[0.08] transition-colors duration-500 absolute top-6 right-6">
                {step.num}
              </span>

              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full border border-white/[0.1] flex items-center justify-center text-neutral-500 mb-6 group-hover:border-white/20 group-hover:text-white transition-all duration-500">
                  <span className="text-xs font-mono">{step.num}</span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{step.desc}</p>
              </div>

              {/* Alt çizgi */}
              <motion.div
                className="absolute bottom-0 left-8 right-8 h-px bg-white/[0.08]"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: i * 0.15 + 0.3, ease: easeOut }}
                style={{ originX: 0 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bağlantı çizgileri (sadece desktop) */}
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-12rem)] pointer-events-none">
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.5, ease: easeOut }}
          />
        </div>
      </div>
    </section>
  );
}
