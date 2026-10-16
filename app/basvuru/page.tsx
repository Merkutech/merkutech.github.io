"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { applicationTeams } from "@/lib/applications";

const easeOut = [0.22, 1, 0.36, 1] as const;

const copy = {
  tr: {
    label: "Başvurular açık",
    title: "Şampiyon ekibe katıl.",
    facts: ["Teknofest Şampiyonlar Ligi Şampiyonu", "AUVSI SUAS 2024 — USA", "3x Teknofest Finali"],
    pick: "Ekibini seç",
    form: "Formu aç",
    question: "Aklına takılan bir şey mi var?",
    whatsapp: "WhatsApp grubuna yaz",
  },
  en: {
    label: "Applications open",
    title: "Join a champion team.",
    facts: ["Teknofest Champions League Champion", "AUVSI SUAS 2024 — USA", "3x Teknofest Finalist"],
    pick: "Pick your team",
    form: "Open form",
    question: "Got a question?",
    whatsapp: "Message our WhatsApp group",
  },
};

export default function BasvuruPage() {
  const { language } = useLanguage();
  const c = copy[language as "tr" | "en"];

  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Kapak */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: easeOut }}
          className="relative overflow-hidden rounded-2xl aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9] bg-neutral-900"
        >
          <img
            src="/3.jpeg"
            alt="Merkutech — Teknofest Adana 2024"
            width={1600}
            height={1066}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-14">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeOut, delay: 0.3 }}
              className="text-xs font-mono uppercase tracking-[0.3em] text-white/70"
            >
              {c.label}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: easeOut, delay: 0.4 }}
              className="mt-3 text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tighter leading-[0.95] text-[#fff]"
            >
              {c.title}
            </motion.h1>
          </div>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-5 flex flex-wrap gap-x-6 gap-y-1 text-xs sm:text-sm font-mono text-neutral-500"
        >
          {c.facts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </motion.ul>

        {/* Ekipler */}
        <p className="mt-20 sm:mt-24 mb-6 text-xs font-mono uppercase tracking-[0.3em] text-neutral-600">
          {c.pick}
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-white/[0.1]">
          {applicationTeams.map((team, i) => (
            <motion.a
              key={team.id}
              id={team.id}
              href={team.formUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: easeOut }}
              className="group relative flex flex-col justify-between min-h-56 sm:min-h-72 lg:min-h-96 p-4 sm:p-6 border-r border-b border-white/[0.1] overflow-hidden"
            >
              <span
                aria-hidden
                className="absolute inset-0 bg-foreground origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              />

              <span className="relative font-mono text-sm text-muted-foreground group-hover:text-background/60 transition-colors duration-500">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tighter leading-[1.05] text-foreground group-hover:text-background transition-colors duration-500">
                  {team.title[language as "tr" | "en"]}
                </h2>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-muted-foreground group-hover:text-background transition-colors duration-500">
                  {c.form}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <p className="mt-10 text-sm text-neutral-500">
          {c.question}{" "}
          <a
            href="https://chat.whatsapp.com/BDYclqEKqlI6JuJcusQuMZ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors"
          >
            {c.whatsapp}
          </a>
        </p>
      </div>
    </div>
  );
}
