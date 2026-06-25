"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Wrench, Shield, BookOpen, Image as ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { suasVehicle, type TestProcedure } from "@/lib/suas-vehicle";

function SpecCard({
  label,
  value,
  index,
}: {
  label: string;
  value: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3, delay: index * 0.04, ease: "easeOut" }}
      className="flex justify-between items-center py-2.5 px-4 rounded-lg bg-white/[0.02] border border-white/[0.05]"
    >
      <span className="text-sm text-neutral-400">{label}</span>
      <span className="text-sm font-medium text-white">{value}</span>
    </motion.div>
  );
}

function ComponentCard({
  name,
  description,
  index,
}: {
  name: string;
  description: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
      className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.03] transition-colors"
    >
      <div className="flex items-center gap-2.5 mb-2">
        <Wrench className="h-4 w-4 text-primary/60" />
        <h4 className="text-sm font-semibold text-white">{name}</h4>
      </div>
      <p className="text-sm text-neutral-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}

function TestProcedureCard({
  procedure,
  index,
}: {
  procedure: TestProcedure;
  index: number;
}) {
  const { language } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  const title = procedure.title[language as keyof typeof procedure.title];
  const description =
    procedure.description[language as keyof typeof procedure.description];
  const steps =
    procedure.steps[language as keyof typeof procedure.steps];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      viewport={{ once: true, margin: "-40px" }}
      className="rounded-xl border border-white/[0.08] bg-white/[0.02] overflow-hidden"
    >
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-white/[0.02] transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-neutral-600">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h4 className="text-sm font-semibold text-white">{title}</h4>
            <p className="text-xs text-neutral-500 mt-0.5">{description}</p>
          </div>
        </div>
        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-neutral-500"
        >
          <ChevronLeft className="h-4 w-4" style={{ transform: expanded ? "rotate(-90deg)" : "rotate(0deg)" }} />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <ul className="px-4 pb-4 space-y-1.5">
          {steps.map((step, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-sm text-neutral-400"
            >
              <span className="w-1 h-1 rounded-full bg-primary/50 shrink-0" />
              {step}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

function GalleryLightbox({
  images,
  onClose,
}: {
  images: string[];
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(0);

  if (images.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full bg-white/[0.08] text-white hover:bg-white/[0.14] transition-colors"
        aria-label="Close gallery"
      >
        <X className="h-5 w-5" />
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setCurrent((prev) => (prev - 1 + images.length) % images.length);
            }}
            className="absolute left-4 p-2 rounded-full bg-white/[0.08] text-white hover:bg-white/[0.14] transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setCurrent((prev) => (prev + 1) % images.length);
            }}
            className="absolute right-4 p-2 rounded-full bg-white/[0.08] text-white hover:bg-white/[0.14] transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      <img
        src={images[current]}
        alt={`Vehicle photo ${current + 1}`}
        className="max-w-full max-h-[85vh] object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />

      <div className="absolute bottom-6 text-sm text-neutral-400">
        {current + 1} / {images.length}
      </div>
    </motion.div>
  );
}

export default function Suas2026Page() {
  const { language } = useLanguage();
  const [galleryOpen, setGalleryOpen] = useState(false);

  const data = suasVehicle;
  const t = language === "tr" ? "tr" : "en";

  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-sm font-mono text-primary/80 mb-2">SUAS 2026</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {data.name[t]}
          </h1>
          <p className="text-neutral-400 text-lg max-w-3xl leading-relaxed">
            {data.description[t]}
          </p>
        </div>

        <section id="specs" className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="h-4 w-4 text-primary/60" />
            <h2 className="text-lg font-semibold text-white">
              {language === "tr" ? "Teknik Özellikler" : "Technical Specifications"}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {data.specs.map((spec, i) => (
              <SpecCard
                key={i}
                label={spec.label[t]}
                value={spec.value[t]}
                index={i}
              />
            ))}
          </div>
        </section>

        <section id="components" className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Wrench className="h-4 w-4 text-primary/60" />
            <h2 className="text-lg font-semibold text-white">
              {language === "tr" ? "Bileşenler" : "Components"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {data.components.map((comp, i) => (
              <ComponentCard
                key={i}
                name={comp.name[t]}
                description={comp.description[t]}
                index={i}
              />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="h-4 w-4 text-primary/60" />
            <h2 className="text-lg font-semibold text-white">
              {language === "tr" ? "Tasarım Felsefesi" : "Design Philosophy"}
            </h2>
          </div>
          <div className="p-5 rounded-xl border border-white/[0.08] bg-white/[0.02]">
            <p className="text-neutral-300 leading-relaxed">
              {data.designPhilosophy[t]}
            </p>
          </div>
        </section>

        <section id="testing" className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="h-4 w-4 text-primary/60" />
            <h2 className="text-lg font-semibold text-white">
              {language === "tr" ? "Test Süreçleri" : "Testing Procedures"}
            </h2>
          </div>
          <p className="text-neutral-400 mb-6">{data.testing.overview[t]}</p>
          <div className="space-y-3">
            {data.testing.procedures.map((proc, i) => (
              <TestProcedureCard key={i} procedure={proc} index={i} />
            ))}
          </div>
        </section>

        <section id="safety" className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="h-4 w-4 text-primary/60" />
            <h2 className="text-lg font-semibold text-white">
              {language === "tr" ? "Güvenlik" : "Safety"}
            </h2>
          </div>
          <div className="p-5 rounded-xl border border-amber-500/10 bg-amber-500/[0.03]">
            <p className="text-neutral-300 leading-relaxed">
              {data.safety[t]}
            </p>
          </div>
        </section>

        {data.gallery.length > 0 && (
          <section>
            <div className="flex items-center gap-2 mb-6">
              <ImageIcon className="h-4 w-4 text-primary/60" />
              <h2 className="text-lg font-semibold text-white">
                {language === "tr" ? "Galeri" : "Gallery"}
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {data.gallery.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setGalleryOpen(true);
                  }}
                  className="aspect-video rounded-lg border border-white/[0.08] overflow-hidden hover:border-white/[0.18] transition-all group"
                >
                  <img
                    src={img}
                    alt={`Vehicle photo ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </button>
              ))}
            </div>
          </section>
        )}
      </div>

      {galleryOpen && data.gallery.length > 0 && (
        <GalleryLightbox
          images={data.gallery}
          onClose={() => setGalleryOpen(false)}
        />
      )}
    </div>
  );
}
