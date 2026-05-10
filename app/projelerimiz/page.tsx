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

      {/* Projeler — editorial liste */}
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
                  {/* Numara */}
                  <span className="text-sm font-mono text-neutral-700 block mb-6">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Görsel — sadece varsa göster */}
                  {project.image && (
                    <div className="aspect-[21/9] overflow-hidden rounded-xl bg-white/[0.02] mb-8">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                      />
                    </div>
                  )}

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
                Hakkımızda
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mt-4 mb-8">
                Biz Kimiz?
              </h2>
              <div className="space-y-6 text-neutral-400 leading-relaxed">
                <p>
                  Merkutech, İstanbul Arel Üniversitesi bünyesinde faaliyet gösteren bir robotik ve teknoloji kulübüdür.
                  Öğrencilerin teorik bilgiyi pratiğe dökmesi, yenilikçi projeler geliştirmesi ve teknoloji dünyasında
                  kendini kanıtlaması için gereken ortamı ve kaynakları sunuyoruz.
                </p>
                <p>
                  Teknofest ve ulusal/uluslararası robotik yarışmalarına aktif olarak katılıyor, otonom sistemler,
                  robotik manipülatörler, drone teknolojileri ve yapay zeka alanlarında projeler üretiyoruz.
                  Her seviyeden öğrenciye açık olan kulübümüzde öğrenme, üretme ve büyüme kültürü hakim.
                </p>
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
