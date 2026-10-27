"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/language-context";
import { applicationTeams } from "@/lib/applications";
import { TeamApplyCard } from "@/components/ui/team-apply-card";

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
  const lang = language as "tr" | "en";
  const c = copy[lang];

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
              className="text-xs uppercase tracking-widest text-white/70"
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
          className="mt-5 flex flex-wrap gap-x-6 gap-y-1 text-xs sm:text-sm font-medium text-neutral-500"
        >
          {c.facts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </motion.ul>

        {/* Ekipler */}
        <p className="mt-20 sm:mt-24 mb-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {c.pick}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {applicationTeams.map((team, i) => (
            <TeamApplyCard
              key={team.id}
              id={team.id}
              team={team}
              index={i}
              lang={lang}
              href={team.formUrl}
              cta={c.form}
              external
            />
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
