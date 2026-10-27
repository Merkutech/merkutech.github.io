'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Globe, Shield, Flame, Cpu, Heart, Layers, Code2, Check } from "lucide-react";
import type { Project } from "@/lib/projects";
import { useLanguage } from "@/lib/i18n/language-context";

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="h-6 w-6" />,
  Shield: <Shield className="h-6 w-6" />,
  Flame: <Flame className="h-6 w-6" />,
  Cpu: <Cpu className="h-6 w-6" />,
  Heart: <Heart className="h-6 w-6" />,
  Layers: <Layers className="h-6 w-6" />,
};

export default function ProjectDetailClient({ project }: { project: Project }) {
  const { language, t } = useLanguage();
  const tr = project.translations[language];

  const labels = {
    back: language === "tr" ? "Tüm Projeler" : "All Projects",
    about: language === "tr" ? "Proje Hakkında" : "About the Project",
    features: language === "tr" ? "Öne Çıkan Özellikler" : "Key Features",
  };

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
              {labels.back}
            </Link>

            <div className="mb-6 text-foreground/80 [&>svg]:h-8 [&>svg]:w-8">
              {iconMap[project.icon] || <Code2 className="h-8 w-8" />}
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.045em] text-foreground mb-6">
              {tr.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {tr.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Kapak Görseli: varsa */}
      {project.image && (
        <section className="py-10">
          <div className="container max-w-5xl mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl overflow-hidden bg-foreground/[0.03]"
            >
              <img
                src={project.image}
                alt={tr.title}
                width={1280}
                height={720}
                decoding="async"
                className="w-full h-[300px] md:h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* Galeri: sadece warscope gibi projelerde */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-10 cv-auto">
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
                    alt={`${tr.title} ${i + 1}`}
                    width={480}
                    height={480}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Açıklama ve özellikler */}
      <section className="py-20 md:py-28 cv-auto">
        <div className="container max-w-5xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="eyebrow mb-6">{labels.about}</h2>
            <p className="text-foreground/80 leading-relaxed text-lg">
              {tr.longDescription}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="eyebrow mb-6">{labels.features}</h2>
            <div className="space-y-2">
              {tr.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-foreground/[0.03]"
                >
                  <Check className="h-4 w-4 shrink-0 text-brand" />
                  <span className="text-sm text-foreground/85">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
