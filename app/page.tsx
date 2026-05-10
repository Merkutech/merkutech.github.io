'use client'

import { SplineScene } from "@/components/ui/splite";
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Bot, Cpu, CircuitBoard, Radio,
  Layers, Zap, Wrench
} from "lucide-react";
import { projects } from "@/lib/projects";

const easeOut = [0.22, 1, 0.36, 1] as const;

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div ref={containerRef} className="flex flex-col">

      {/* ═══════════════════════════════════════
          HERO — sadece robot, hiç metin yok
         ═══════════════════════════════════════ */}
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
        
        {/* Altta gradient — header ile karışmasın diye */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
        
        {/* Sağ altta küçük ok — aşağı kaydır */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 right-8 z-20"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center"
          >
            <ArrowRight className="h-4 w-4 text-neutral-500 rotate-90" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════
          DRONE FLYBY
         ═══════════════════════════════════════ */}
      <DroneSection />

      {/* ═══════════════════════════════════════
          MANİFESTO
         ═══════════════════════════════════════ */}
      <section className="relative py-32 md:py-44">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <FadeUp>
            <p className="text-xs uppercase tracking-widest text-neutral-600 mb-8">Misyonumuz</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] tracking-tight text-white">
              Teoriyi pratiğe döken, kodu canlı bir varlığa çeviren ve teknolojiyi geleceğin dili olarak gören bir topluluğuz.
            </h2>
          </FadeUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          NE YAPIYORUZ — expandable list
         ═══════════════════════════════════════ */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <FadeUp className="mb-4">
            <p className="text-xs uppercase tracking-widest text-neutral-600 mb-3">Çalışma Alanları</p>
          </FadeUp>
          <FadeUp className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Neler Yapıyoruz?
            </h2>
          </FadeUp>

          <div className="border-t border-white/[0.08]">
            {[
              { num: "01", title: "Robotik Projeler", desc: "ROS tabanlı otonom sistemler, sensör füzyonu ve gerçek zamanlı kontrol algoritmaları ile robotlar geliştiriyoruz.", tags: ["ROS", "OpenCV", "Python"], icon: <Bot className="h-5 w-5" /> },
              { num: "02", title: "Yapay Zeka", desc: "Derin öğrenme ve bilgisayarlı görü ile robotlara karar verme yetisi kazandırıyoruz.", tags: ["TensorFlow", "PyTorch", "Computer Vision"], icon: <Cpu className="h-5 w-5" /> },
              { num: "03", title: "Drone Teknolojisi", desc: "Sürü algoritmaları, otonom uçuş ve çoklu drone koordinasyonu çalışmaları yürütüyoruz.", tags: ["MAVLink", "DroneKit", "Swarm AI"], icon: <Radio className="h-5 w-5" /> },
              { num: "04", title: "Gömülü Sistemler", desc: "Mikrodenetleyiciler, PCB tasarımı ve gerçek zamanlı gömülü yazılım geliştirme.", tags: ["STM32", "Arduino", "Embedded C"], icon: <CircuitBoard className="h-5 w-5" /> },
              { num: "05", title: "3D Modelleme", desc: "CAD, simülasyon ve hızlı prototipleme ile fikirden ürüne geçiş süreci.", tags: ["SolidWorks", "AutoCAD", "Gazebo"], icon: <Layers className="h-5 w-5" /> },
              { num: "06", title: "Yarışmalar", desc: "Teknofest ve uluslararası robotik yarışmalarına aktif katılım ve hazırlık.", tags: ["Teknofest", "Robotaksi", "Uluslararası"], icon: <Zap className="h-5 w-5" /> },
            ].map((item, i) => (
              <FadeUp key={item.num} delay={i * 0.05}>
                <ExpandableRow {...item} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROJELER
         ═══════════════════════════════════════ */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <FadeUp className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
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
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.slice(0, 3).map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA
         ═══════════════════════════════════════ */}
      <section className="relative py-28 md:py-36">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.008] rounded-full blur-[150px]" />
        <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center relative z-10">
          <FadeUp>
            <p className="text-xs uppercase tracking-widest text-neutral-600 mb-4">Aramıza Katıl</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Geleceği Birlikte İnşa Edelim
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-neutral-500 mb-8 leading-relaxed">
              Robotik ve teknolojiye ilgi duyuyorsan, kendini geliştirmek istiyorsan Merkutech ailesine katıl.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <Link
              href="/iletisim"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-colors"
            >
              Hemen Başvur
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}

/* ─── Drone Section — Teknik Dalga Animasyonu ─── */

function DroneSection() {
  const lines = [
    { delay: 0, duration: 3, height: 40 },
    { delay: 0.3, duration: 3.5, height: 70 },
    { delay: 0.6, duration: 4, height: 50 },
    { delay: 0.9, duration: 3.2, height: 90 },
    { delay: 1.2, duration: 3.8, height: 60 },
    { delay: 1.5, duration: 4.2, height: 80 },
    { delay: 1.8, duration: 3.6, height: 45 },
    { delay: 2.1, duration: 3.9, height: 75 },
    { delay: 2.4, duration: 3.3, height: 55 },
    { delay: 2.7, duration: 4.1, height: 85 },
    { delay: 3.0, duration: 3.7, height: 65 },
    { delay: 3.3, duration: 3.4, height: 95 },
    { delay: 3.6, duration: 4.0, height: 50 },
    { delay: 3.9, duration: 3.5, height: 70 },
    { delay: 4.2, duration: 3.8, height: 80 },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-y border-white/[0.06]">
      {/* Başlık */}
      <div className="text-center mb-16">
        <p className="text-xs text-neutral-600 tracking-[0.3em] uppercase mb-3">Uçan Teknolojiler</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Drone Teknolojisi
        </h2>
      </div>

      {/* Dalga animasyonu */}
      <div className="relative h-48 md:h-64 flex items-center justify-center gap-1 md:gap-1.5 px-4">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            className="w-1 md:w-1.5 rounded-full bg-white/[0.08]"
            animate={{
              height: [`${line.height * 0.3}%`, `${line.height}%`, `${line.height * 0.3}%`],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: line.duration,
              delay: line.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Alt metin */}
      <div className="text-center mt-12 max-w-xl mx-auto px-5">
        <p className="text-sm text-neutral-500 leading-relaxed">
          Otonom uçuş algoritmaları, çoklu drone koordinasyonu ve sürü teknolojileri 
          üzerine çalışıyoruz.
        </p>
      </div>
    </section>
  );
}

/* ─── Expandable Row ─── */

function ExpandableRow({ num, title, desc, tags, icon }: {
  num: string;
  title: string;
  desc: string;
  tags: string[];
  icon: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="border-b border-white/[0.08] cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center justify-between py-6 md:py-8">
        <div className="flex items-center gap-6 md:gap-10">
          <span className="text-sm font-mono text-neutral-700 w-8">{num}</span>
          <h3 className={`text-xl md:text-2xl font-semibold transition-colors duration-300 ${hovered ? 'gradient-text' : 'text-white'}`}>
            {title}
          </h3>
        </div>
        <div className="flex items-center gap-4">
          <div className={`w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center text-neutral-500 transition-all duration-300 ${hovered ? 'bg-white/5 border-white/20 text-white rotate-45' : ''}`}>
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: easeOut }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-14 md:pl-[4.5rem] flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-lg">
                <p className="text-sm text-neutral-500 leading-relaxed mb-4">{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-white/[0.04] rounded-md text-[11px] font-mono text-neutral-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] flex items-center justify-center text-neutral-400 shrink-0">
                {icon}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Project Card ─── */

function ProjectCard({ project, index }: {
  project: typeof projects[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: easeOut }}
    >
      <Link
        href={`/projelerimiz/${project.slug}`}
        className="group block rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden hover:border-white/[0.1] transition-all duration-300"
      >
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium ${
              project.status === 'Aktif'
                ? 'bg-emerald-500/10 text-emerald-400'
                : project.status === 'Tamamlandı'
                ? 'bg-blue-500/10 text-blue-400'
                : 'bg-amber-500/10 text-amber-400'
            }`}>
              <span className={`w-1 h-1 rounded-full ${
                project.status === 'Aktif' ? 'bg-emerald-400' : project.status === 'Tamamlandı' ? 'bg-blue-400' : 'bg-amber-400'
              }`} />
              {project.status}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-neutral-200 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-neutral-500 leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="px-2 py-0.5 bg-white/[0.04] rounded text-[10px] font-mono text-neutral-600">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
