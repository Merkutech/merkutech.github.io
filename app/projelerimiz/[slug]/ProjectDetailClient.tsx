'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Bot, Cpu, CircuitBoard, Radio, Layers, Trophy, Code2 } from "lucide-react";
import type { Project } from "@/lib/projects";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: [0, 0, 0.2, 1] as const }
};

const iconMap: Record<string, React.ReactNode> = {
  Bot: <Bot className="h-6 w-6" />,
  Cpu: <Cpu className="h-6 w-6" />,
  CircuitBoard: <CircuitBoard className="h-6 w-6" />,
  Radio: <Radio className="h-6 w-6" />,
  Layers: <Layers className="h-6 w-6" />,
  Trophy: <Trophy className="h-6 w-6" />,
};

export default function ProjectDetailClient({ project }: { project: Project }) {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-[120px] animate-pulse-glow" />
        <div className="container max-w-4xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/projelerimiz"
              className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Tüm Projeler
            </Link>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white">
                {iconMap[project.icon] || <Code2 className="h-6 w-6" />}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">{project.title}</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image */}
      <section className="py-10">
        <div className="container max-w-5xl mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden glass"
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-[300px] md:h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20">
        <div className="container max-w-3xl mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl font-bold mb-6 gradient-text">Proje Hakkında</h2>
            <p className="text-neutral-400 leading-relaxed text-lg">
              {project.longDescription}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
