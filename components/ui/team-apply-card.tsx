"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ApplicationTeam } from "@/lib/applications";
import { TeamAnimation } from "@/components/ui/team-animations";

const easeOut = [0.22, 1, 0.36, 1] as const;

/* Başvuru kartı — başvuru sayfasında ve ana sayfada ortak */
export function TeamApplyCard({
  team,
  index,
  lang,
  href,
  cta,
  external = false,
  id,
}: {
  team: ApplicationTeam;
  index: number;
  lang: "tr" | "en";
  href: string;
  cta: string;
  external?: boolean;
  id?: string;
}) {
  return (
    <motion.a
      id={id}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: easeOut }}
      className="group relative flex flex-col justify-between p-4 sm:p-6 lg:p-7 rounded-2xl bg-foreground/[0.03] overflow-hidden scroll-mt-28"
    >
      <span
        aria-hidden
        className="absolute inset-0 bg-foreground origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
      />

      <span className="relative text-sm font-medium tabular-nums text-muted-foreground group-hover:text-background/60 transition-colors duration-500">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative flex-1 flex items-center py-6 sm:py-8">
        <div className="w-full max-w-[11rem] text-foreground/80 group-hover:text-background transition-colors duration-500">
          <TeamAnimation id={team.id} />
        </div>
      </div>

      <div className="relative">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tighter leading-[1.05] text-foreground group-hover:text-background transition-colors duration-500">
          {team.title[lang]}
        </h3>
        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground group-hover:text-background/70 transition-colors duration-500">
          {team.description[lang]}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-foreground group-hover:text-background transition-colors duration-500">
          {cta}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </motion.a>
  );
}
