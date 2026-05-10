'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Globe, Shield, Flame, Cpu, Heart, Layers, Code2, Check } from "lucide-react";
import type { Project } from "@/lib/projects";

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="h-6 w-6" />,
  Shield: <Shield className="h-6 w-6" />,
  Flame: <Flame className="h-6 w-6" />,
  Cpu: <Cpu className="h-6 w-6" />,
  Heart: <Heart className="h-6 w-6" />,
  Layers: <Layers className="h-6 w-6" />,
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

      {/* Kapak Görseli — varsa */}
      {project.image && (
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
      )}

      {/* Galeri — sadece warscope gibi projelerde */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-10">
          <div className="container max-w-5xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.gallery.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="aspect-square overflow-hidden rounded-xl bg-white/[0.02]"
                >
                  <img
                    src={img}
                    alt={`${project.title} ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

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

      {/* Features */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="container max-w-3xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl font-bold mb-8 gradient-text">Öne Çıkan Özellikler</h2>
            <div className="space-y-4">
              {project.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-neutral-500 shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-sm text-neutral-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
