'use client'

import { motion } from "framer-motion";
import { ExternalLink, Code2, Bot, Cpu, CircuitBoard, Radio, Layers, Trophy, ChevronRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/projects";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: [0, 0, 0.2, 1] as const }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true, margin: "-100px" }
};

const staggerItem = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const }
};

const iconMap: Record<string, React.ReactNode> = {
  Bot: <Bot className="h-5 w-5" />,
  Cpu: <Cpu className="h-5 w-5" />,
  CircuitBoard: <CircuitBoard className="h-5 w-5" />,
  Radio: <Radio className="h-5 w-5" />,
  Layers: <Layers className="h-5 w-5" />,
  Trophy: <Trophy className="h-5 w-5" />,
};

const statusColors: Record<string, string> = {
  "Aktif": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Tamamlandı": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Geliştirme": "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

export default function ProjelerimizPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-[120px] animate-pulse-glow" />
        
        <div className="container max-w-4xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div {...fadeInUp} className="text-center">
            <span className="text-xs font-mono text-neutral-500 tracking-widest uppercase">Projelerimiz</span>
            <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6">
              <span className="gradient-text">Robotik</span>{" "}
              <span className="text-neutral-500">İnovasyon</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Teoriyi pratiğe döküyor, fikirleri gerçek robotlara dönüştürüyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4 md:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container max-w-4xl mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-12 rounded-3xl glass text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
              <span className="gradient-text">Senin Projen</span>{" "}
              <span className="text-neutral-500">Ne Olacak?</span>
            </h2>
            <p className="text-neutral-400 mb-8 max-w-lg mx-auto relative z-10">
              Yeni fikirlerin mi var? Merkutech&apos;te projeni hayata geçirmek için gerekli kaynakları ve desteği bulabilirsin.
            </p>
            <Link 
              href="/iletisim"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-all duration-300 relative z-10"
            >
              Proje Öner
              <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <motion.div 
      variants={staggerItem}
      className="group rounded-2xl glass overflow-hidden hover:bg-white/[0.06] transition-all duration-500"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[project.status] || statusColors["Geliştirme"]}`}>
            {project.status}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center text-white">
            {iconMap[project.icon] || <Code2 className="h-5 w-5" />}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white group-hover:gradient-text transition-all">{project.title}</h3>
        <p className="text-neutral-400 text-sm mb-4 leading-relaxed line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span key={i} className="px-2.5 py-1 bg-white/5 rounded-lg text-xs font-mono text-neutral-400 border border-white/5">
              {tag}
            </span>
          ))}
        </div>
        <Link 
          href={`/projelerimiz/${project.slug}`}
          className="inline-flex items-center gap-2 text-sm text-white hover:text-neutral-300 transition-colors"
        >
          <Code2 className="h-4 w-4" />
          Detayları Gör
          <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
