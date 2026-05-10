'use client'

import { SplineScene } from "@/components/ui/splite";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import {
  ArrowRight, ArrowUpRight, Bot, Cpu, CircuitBoard, Radio,
  Layers, Zap, Code2, Eye, Wrench
} from "lucide-react";
import { projects } from "@/lib/projects";

/* ─── animasyon yardımcıları ─── */

const easeOut = [0.22, 1, 0.36, 1] as const;

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function TextReveal({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const words = text.split(" ");
  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={isInView ? { y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.04, ease: easeOut }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ─── sayfa ─── */

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div ref={containerRef} className="flex flex-col">

      {/* ═══════════════════════════════════════
          HERO
         ═══════════════════════════════════════ */}
      <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-1/3 right-0 w-[700px] h-[700px] bg-white/[0.015] rounded-full blur-[160px]" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10 pt-28 pb-12">
          <div className="flex flex-col lg:flex-row items-end lg:items-center gap-8 lg:gap-4">

            {/* Sol — tipografi */}
            <div className="flex-1 w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easeOut }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-xs font-medium text-neutral-500 mb-8"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                İstanbul Arel Üniversitesi
              </motion.div>

              <h1 className="text-[clamp(3.5rem,10vw,9rem)] font-bold leading-[0.9] tracking-tighter">
                <div className="overflow-hidden">
                  <motion.span
                    className="block gradient-text"
                    initial={{ y: "120%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, ease: easeOut, delay: 0.1 }}
                  >
                    Robotik
                  </motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span
                    className="block text-neutral-600"
                    initial={{ y: "120%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, ease: easeOut, delay: 0.2 }}
                  >
                    ve
                  </motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span
                    className="block gradient-text-accent"
                    initial={{ y: "120%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, ease: easeOut, delay: 0.3 }}
                  >
                    Drone
                  </motion.span>
                </div>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: easeOut, delay: 0.5 }}
                className="text-lg md:text-xl text-neutral-500 max-w-md mt-8 mb-10 leading-relaxed"
              >
                Geleceği kodlayan, robotları hayata geçiren ve droneları göğe taşıyan öğrenci topluluğu.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: easeOut, delay: 0.6 }}
                className="flex flex-wrap gap-3"
              >
                <Link
                  href="/projelerimiz"
                  className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-colors"
                >
                  Projeleri Keşfet
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/10 text-sm font-medium text-neutral-300 hover:bg-white/5 hover:border-white/20 transition-all"
                >
                  Aramıza Katıl
                </Link>
              </motion.div>

              {/* Yüzen istatistikler */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex gap-8 mt-16"
              >
                {[
                  { num: "50+", label: "Proje" },
                  { num: "200+", label: "Üye" },
                  { num: "10+", label: "Ödül" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-bold text-white tracking-tight">{s.num}</div>
                    <div className="text-xs text-neutral-600 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Sağ — Robot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: easeOut, delay: 0.3 }}
              className="flex-1 w-full h-[45vh] lg:h-[75vh] relative"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/60 z-10 pointer-events-none" />
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll göstergesi */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest text-neutral-600">Aşağı Kaydır</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-white/10 flex justify-center pt-2"
          >
            <div className="w-1 h-1.5 rounded-full bg-white/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════
          MARQUEE
         ═══════════════════════════════════════ */}
      <section className="relative py-10 border-y border-white/[0.06] overflow-hidden">
        <div className="flex whitespace-nowrap">
          <MarqueeContent />
          <MarqueeContent />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MANİFESTO
         ═══════════════════════════════════════ */}
      <section className="relative py-32 md:py-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.008] rounded-full blur-[150px]" />
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center relative z-10">
          <FadeUp>
            <p className="text-xs uppercase tracking-widest text-neutral-600 mb-8">Hakkımızda</p>
          </FadeUp>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight">
            <TextReveal text="Biz, teoriyi pratiğe döken, kodu canlı bir varlığa çeviren ve teknolojiyi geleceğin dili olarak gören bir öğrenci topluluğuyuz." />
          </h2>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BENTO — YETENEKLER
         ═══════════════════════════════════════ */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <FadeUp className="mb-14">
            <p className="text-xs uppercase tracking-widest text-neutral-600 mb-3">Ne Yapıyoruz</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              <span className="gradient-text">Alanlarımız</span>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px]">
            <BentoCard
              icon={<Bot className="h-6 w-6" />}
              title="Robotik Projeler"
              desc="ROS tabanlı otonom sistemler, sensör füzyonu ve gerçek zamanlı kontrol."
              className="md:col-span-2 md:row-span-2"
              delay={0}
            />
            <BentoCard
              icon={<Cpu className="h-6 w-6" />}
              title="Yapay Zeka"
              desc="Derin öğrenme ve bilgisayarlı görü ile robotlara karar yetisi."
              className="md:col-span-1 md:row-span-1"
              delay={0.05}
            />
            <BentoCard
              icon={<Radio className="h-6 w-6" />}
              title="Drone Teknolojisi"
              desc="Sürü algoritmaları, otonom uçuş ve çoklu drone koordinasyonu."
              className="md:col-span-1 md:row-span-1"
              delay={0.1}
            />
            <BentoCard
              icon={<CircuitBoard className="h-6 w-6" />}
              title="Gömülü Sistemler"
              desc="Mikrodenetleyiciler, PCB tasarımı ve gerçek zamanlı gömülü yazılım."
              className="md:col-span-1 md:row-span-1"
              delay={0.15}
            />
            <BentoCard
              icon={<Layers className="h-6 w-6" />}
              title="3D Modelleme"
              desc="CAD, simülasyon ve hızlı prototipleme ile fikirden ürüne."
              className="md:col-span-1 md:row-span-1"
              delay={0.2}
            />
            <BentoCard
              icon={<Zap className="h-6 w-6" />}
              title="Yarışmalar"
              desc="Teknofest ve uluslararası robotik yarışmalarına aktif katılım."
              className="md:col-span-2 md:row-span-1"
              delay={0.25}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROJELER
         ═══════════════════════════════════════ */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.015] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <FadeUp className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-600 mb-3">Portföy</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                <span className="gradient-text">Öne Çıkan</span>{" "}
                <span className="text-neutral-600">Projeler</span>
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

          <div className="flex flex-col gap-6">
            {projects.slice(0, 3).map((project, i) => (
              <ProjectRow key={project.slug} project={project} index={i} progress={smoothProgress} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA
         ═══════════════════════════════════════ */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.008] rounded-full blur-[180px]" />

        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center relative z-10">
          <FadeUp>
            <p className="text-xs uppercase tracking-widest text-neutral-600 mb-6">Seni Bekliyoruz</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
              <span className="gradient-text">Geleceği</span>{" "}
              <span className="text-neutral-600">Birlikte</span>{" "}
              <span className="gradient-text-accent">İnşa Edelim</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-neutral-500 max-w-lg mx-auto mb-10 text-lg leading-relaxed">
              Robotik ve teknolojiye ilgi duyuyorsan, kendini geliştirmek istiyorsan Merkutech ailesine katıl.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/iletisim"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-colors"
              >
                Hemen Başvur
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/hakkimizda"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-white/10 text-sm font-medium text-neutral-300 hover:bg-white/5 hover:border-white/20 transition-all"
              >
                Daha Fazla Bilgi
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}

/* ─── alt bileşenler ─── */

function MarqueeContent() {
  const items = [
    "ROS", "OpenCV", "Python", "C++", "TensorFlow", "PyTorch",
    "MAVLink", "DroneKit", "LIDAR", "SLAM", "Gazebo",
    "SolidWorks", "AutoCAD", "Embedded C", "STM32", "Arduino",
  ];
  return (
    <div className="flex items-center gap-12 pr-12 animate-marquee">
      {items.map((item) => (
        <span key={item} className="text-sm md:text-base font-mono text-neutral-700 whitespace-nowrap">
          {item}
        </span>
      ))}
    </div>
  );
}

function BentoCard({ icon, title, desc, className = "", delay = 0 }: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: easeOut }}
      className={`group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 h-full flex flex-col">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.04] text-neutral-300 mb-4 group-hover:bg-white/[0.08] group-hover:text-white transition-all duration-500">
          {icon}
        </div>
        <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-neutral-500 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

function ProjectRow({ project, index }: {
  project: typeof projects[0];
  index: number;
  progress: ReturnType<typeof useSpring>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const isReversed = index % 2 !== 0;

  const iconMap: Record<string, React.ReactNode> = {
    Bot: <Bot className="h-5 w-5" />,
    Cpu: <Cpu className="h-5 w-5" />,
    CircuitBoard: <CircuitBoard className="h-5 w-5" />,
    Radio: <Radio className="h-5 w-5" />,
    Layers: <Layers className="h-5 w-5" />,
    Trophy: <Wrench className="h-5 w-5" />,
    Code2: <Code2 className="h-5 w-5" />,
    Eye: <Eye className="h-5 w-5" />,
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: easeOut }}
    >
      <Link
        href={`/projelerimiz/${project.slug}`}
        className={`group flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 lg:gap-10 rounded-3xl border border-white/[0.06] bg-white/[0.02] p-4 lg:p-5 hover:bg-white/[0.035] hover:border-white/[0.1] transition-all duration-500`}
      >
        {/* Görsel */}
        <div className="lg:w-3/5 w-full aspect-[16/10] lg:aspect-auto lg:min-h-[320px] rounded-2xl overflow-hidden relative">
          <motion.img
            src={project.image}
            alt={project.title}
            style={{ y }}
            className="absolute inset-0 w-full h-[120%] object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* İçerik */}
        <div className="lg:w-2/5 w-full flex flex-col justify-center px-2 lg:px-4 py-4">
          <div className="flex items-center gap-2 mb-4">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium ${
              project.status === 'Aktif'
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                : project.status === 'Tamamlandı'
                ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
            }`}>
              <span className={`w-1 h-1 rounded-full ${
                project.status === 'Aktif' ? 'bg-emerald-400' : project.status === 'Tamamlandı' ? 'bg-blue-400' : 'bg-amber-400'
              }`} />
              {project.status}
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight group-hover:gradient-text transition-all duration-500">
            {project.title}
          </h3>

          <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="px-2.5 py-1 bg-white/[0.04] border border-white/[0.06] rounded-lg text-[11px] font-mono text-neutral-500">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 text-sm text-neutral-500 group-hover:text-white transition-colors">
            <span className="font-medium">Detayları Gör</span>
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
