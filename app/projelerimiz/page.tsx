'use client'

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { InteractiveRobotSpline } from "@/components/ui/interactive-3d-robot";
import { projects } from "@/lib/projects";

const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function ProjelerimizPage() {
  return (
    <div className="flex flex-col">
      {/* Üst — başlık */}
      <div className="pt-24 pb-8 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono text-neutral-600 tracking-[0.3em] uppercase"
          >
            Merkutech
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tighter mt-2"
          >
            Projeler
          </motion.h1>
        </div>
      </div>

      {/* Robot */}
      <div className="w-full h-[45vh] sm:h-[50vh] lg:h-[55vh] relative overflow-hidden">
        <InteractiveRobotSpline scene={ROBOT_SCENE_URL} className="w-full h-full" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 right-0 w-52 h-16 bg-[#0a0a0a] z-50 pointer-events-none" />
      </div>

      {/* Projeler — editorial liste, tek sütun */}
      <section className="relative z-10 -mt-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 pb-32">
          <div className="space-y-24 md:space-y-32">
            {projects.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: easeOut }}
              >
                <Link href={`/projelerimiz/${project.slug}`} className="group block">
                  {/* Numara + Meta */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-mono text-neutral-700">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium border ${
                        project.status === 'Aktif' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                        project.status === 'Tamamlandı' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                        'bg-amber-500/10 text-amber-400 border-amber-500/20'
                      }`}>
                        <span className={`w-1 h-1 rounded-full ${
                          project.status === 'Aktif' ? 'bg-emerald-400' :
                          project.status === 'Tamamlandı' ? 'bg-blue-400' : 'bg-amber-400'
                        }`} />
                        {project.status}
                      </span>
                      <span className="text-[10px] text-neutral-700 font-mono">{project.timeline}</span>
                    </div>
                  </div>

                  {/* Görsel */}
                  <div className="aspect-[21/9] overflow-hidden rounded-xl bg-white/[0.02] mb-8">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                    />
                  </div>

                  {/* İçerik */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
                    <div className="md:col-span-7">
                      <h2 className="text-3xl md:text-4xl font-bold text-white group-hover:text-neutral-200 transition-colors leading-tight tracking-tight">
                        {project.title}
                      </h2>
                    </div>
                    <div className="md:col-span-5">
                      <p className="text-sm text-neutral-500 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-5">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-2.5 py-1 bg-white/[0.04] rounded-md text-[11px] font-mono text-neutral-600">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6 inline-flex items-center gap-2 text-sm text-white group-hover:text-neutral-300 transition-colors">
                        Detayları İncele
                        <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Divider (son projede yok) */}
                  {i < projects.length - 1 && (
                    <div className="h-px bg-white/[0.06] mt-24 md:mt-32" />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
