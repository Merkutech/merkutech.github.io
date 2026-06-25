"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Mail } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { teamMembers } from "@/lib/team";

function MemberCard({ member, index }: { member: (typeof teamMembers)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { language } = useLanguage();

  return (
    <motion.div
      ref={ref}
      id={member.id}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      className="group p-6 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.14] transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center gap-3">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:border-primary/40 transition-colors">
          {member.image ? (
            <img src={member.image} alt={member.name} className="w-full h-full rounded-full object-cover" />
          ) : (
            <Users className="h-10 w-10 text-primary/60" />
          )}
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">{member.name}</h3>
          <p className="text-sm text-primary/70">
            {member.role[language as keyof typeof member.role]}
          </p>
        </div>
        {member.links && (
          <div className="flex items-center gap-2">
            {member.links.github && (
              <a
                href={member.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            )}
            {member.links.linkedin && (
              <a
                href={member.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            )}
            {member.links.email && (
              <a
                href={`mailto:${member.links.email}`}
                className="text-neutral-500 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
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
  const description =
    language === "tr"
      ? "Merkutech ailesinin bir parçası olan takım üyelerimiz. Her biri farklı uzmanlık alanlarıyla projelere katkı sağlamaktadır."
      : "Our team members who are part of the Merkutech family. Each contributes to projects with their specialized expertise.";

  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-sm font-mono text-primary/80 mb-2">{subtitle}</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{title}</h1>
          <p className="text-neutral-400 text-lg max-w-2xl">{description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {teamMembers.map((member, i) => (
            <MemberCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
