'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Bot, Cpu, CircuitBoard, Radio, Layers, Trophy, Code2, Calendar, Users, Tag } from "lucide-react";
import type { Project } from "@/lib/projects";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: [0, 0, 0.2, 1] as const }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.12 } },
  viewport: { once: true, margin: "-100px" }
};

const staggerItem = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const }
};

const iconMap: Record<string, React.ReactNode> = {
  Bot: <Bot className="h-6 w-6" />,
  Cpu: <Cpu className="h-6 w-6" />,
  CircuitBoard: <CircuitBoard className="h-6 w-6" />,
  Radio: <Radio className="h-6 w-6" />,
  Layers: <Layers className="h-6 w-6" />,
  Trophy: <Trophy className="h-6 w-6" />,
};

const statusColors: Record<string, string> = {
  "Aktif": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Tamamlandı": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Geliştirme": "bg-amber-500/10 text-amber-400 border-amber-500/20",
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
              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[project.status] || statusColors["Geliştirme"]}`}>
                {project.status}
              </span>
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
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Details */}
      <section className="py-20">
        <div className="container max-w-5xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <motion.div variants={staggerItem} className="p-8 rounded-3xl glass">
                <h2 className="text-2xl font-bold mb-4 gradient-text">Proje Hakkında</h2>
                <p className="text-neutral-400 leading-relaxed">
                  {project.longDescription}
                </p>
              </motion.div>

              <motion.div variants={staggerItem} className="p-8 rounded-3xl glass">
                <h2 className="text-2xl font-bold mb-4 gradient-text">Teknolojiler</h2>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-white/5 rounded-xl text-sm font-mono text-neutral-300 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Sidebar */}
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <motion.div variants={staggerItem} className="p-6 rounded-2xl glass">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="h-5 w-5 text-neutral-400" />
                  <h3 className="font-medium text-white">Zaman Çizelgesi</h3>
                </div>
                <p className="text-sm text-neutral-400">{project.timeline}</p>
              </motion.div>

              <motion.div variants={staggerItem} className="p-6 rounded-2xl glass">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="h-5 w-5 text-neutral-400" />
                  <h3 className="font-medium text-white">Ekip</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.team.map((member, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 rounded-lg text-xs text-neutral-400 border border-white/5">
                      {member}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={staggerItem} className="p-6 rounded-2xl glass">
                <div className="flex items-center gap-3 mb-3">
                  <Tag className="h-5 w-5 text-neutral-400" />
                  <h3 className="font-medium text-white">Durum</h3>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[project.status] || statusColors["Geliştirme"]}`}>
                  {project.status}
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
