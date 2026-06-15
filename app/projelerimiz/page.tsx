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
      <div className="pt-20 sm:pt-24 pb-6 sm:pb-8 px-5 sm:px-8">
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
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter mt-2"
          >
            Projeler
          </motion.h1>
        </div>
      </div>

      {/* Ana içerik — projeler solda, robot sağda (sticky) */}
      <section className="relative">
        <div className="flex flex-col lg:flex-row items-start">
          {/* Sol — Projeler */}
          <div className="w-full lg:w-2/3 px-5 sm:px-8 lg:px-12 pb-12 sm:pb-32 order-1 lg:order-1">
            <div className="max-w-3xl mx-auto lg:mx-0 space-y-20 sm:space-y-32 md:space-y-40">
              {projects.map((project, i) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: easeOut }}
                >
                  <Link href={`/projelerimiz/${project.slug}`} className="group block">
                    <span className="text-sm sm:text-base font-mono text-neutral-700 block mb-5 sm:mb-8">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {project.image && (
                      <div className="aspect-[16/9] overflow-hidden rounded-xl sm:rounded-2xl bg-white/[0.02] mb-6 sm:mb-10">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                        />
                      </div>
                    )}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white group-hover:text-neutral-200 transition-colors leading-tight tracking-tight mb-4 sm:mb-6">
                      {project.title}
                    </h2>
                    <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-6 sm:mb-8">
                      {project.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-sm sm:text-base text-white group-hover:text-neutral-300 transition-colors">
                      Detayları İncele
                      <ArrowUpRight className="h-4 sm:h-5 w-4 sm:w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sağ — Robot (sticky) */}
          <div className="w-full lg:w-1/3 order-2 lg:order-2 lg:sticky lg:top-24 lg:self-start z-20">
            <div className="relative h-[42vh] sm:h-[50vh] lg:h-[calc(100vh-6rem)] overflow-hidden">
              <InteractiveRobotSpline scene={ROBOT_SCENE_URL} className="w-full h-full" />
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-background via-background/95 to-transparent pointer-events-none z-10" />
            </div>
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
                <div className="text-neutral-300">
                  <p className="mb-3">Sahip olduğumuz başarılar:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>🏆 Teknofest Şampiyonlar Ligi Şampiyonu</li>
                    <li>🥈 Teknofest 2025 Turizm İkincisi</li>
                    <li>🥉 Teknofest 2024 İnsansız Yerleşim Takımı Üçüncüsü</li>
                    <li>🎖️ AUVSI SUAS 2024 - USA</li>
                  </ul>
                </div>
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
