"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Mail } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { teamMembers } from "@/lib/team";

const easeOut = [0.22, 1, 0.36, 1] as const;

function MemberCard({ member, index }: { member: (typeof teamMembers)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const { language } = useLanguage();

  return (
    <motion.div
      ref={ref}
      id={member.id}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.04, ease: easeOut }}
      className="group flex items-center gap-4 sm:flex-col sm:items-center sm:text-center sm:gap-0 p-3 sm:p-5 rounded-xl border border-border bg-card/40 hover:bg-card/60 hover:border-foreground/10 transition-all duration-300"
    >
      <div className="w-14 h-14 sm:w-24 sm:h-24 shrink-0 group-hover:scale-[1.02] transition-transform">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            loading="lazy"
            className="w-full h-full rounded-full object-cover object-center border border-primary/10 group-hover:border-primary/30 transition-colors"
          />
        ) : (
          <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-primary/[0.04] border border-primary/10 flex items-center justify-center group-hover:border-primary/30 transition-colors">
            <Users className="h-6 w-6 sm:h-10 sm:w-10 text-primary/40" />
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0 sm:flex-initial sm:w-full">
        <h3 className="text-sm sm:text-base font-semibold text-foreground truncate">{member.name}</h3>
        <p className="text-xs sm:text-sm text-muted-foreground truncate">
          {member.role[language as keyof typeof member.role]}
        </p>
        {member.links && (
          <div className="flex items-center gap-2 mt-1.5 sm:justify-center">
            {member.links.github && (
              <a href={member.links.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground/60 hover:text-foreground transition-colors" aria-label="GitHub">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            )}
            {member.links.linkedin && (
              <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground/60 hover:text-foreground transition-colors" aria-label="LinkedIn">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            )}
            {member.links.email && (
              <a href={`mailto:${member.links.email}`} className="text-muted-foreground/60 hover:text-foreground transition-colors" aria-label="Email">
                <Mail className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function TeamPage() {
  const { language } = useLanguage();

  const title = language === "tr" ? "Ekibimiz" : "Our Team";
  const subtitle = language === "tr" ? "Merkutech" : "Merkutech";
  const count = language === "tr" ? `${teamMembers.length} Üye` : `${teamMembers.length} Members`;
  const description =
    language === "tr"
      ? "Merkutech ailesinin bir parçası olan takım üyelerimiz."
      : "Our team members who are part of the Merkutech family.";

  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <div className="flex items-center gap-3 mb-2">
            <p className="text-sm font-mono text-primary/80">{subtitle}</p>
            <span className="text-xs font-mono text-muted-foreground/50 px-2 py-0.5 rounded-full border border-border">{count}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-3 tracking-tighter">{title}</h1>
          <p className="text-muted-foreground text-lg max-w-xl">{description}</p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
          {teamMembers.map((member, i) => (
            <MemberCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
