'use client'

import { motion } from "framer-motion";
import { Code2, Link2, MessageCircle } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: [0, 0, 0.2, 1] as const }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true, margin: "-100px" }
};

const staggerItem = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const }
};

const teamMembers = [
  {
    name: "Ahmet Yılmaz",
    role: "Kulüp Başkanı",
    department: "Bilgisayar Mühendisliği",
    bio: "Robotik alanında 5 yıllık deneyim. Teknofest birincisi.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    social: { github: "#", linkedin: "#", twitter: "#" }
  },
  {
    name: "Zeynep Kaya",
    role: "Teknik Lider",
    department: "Yazılım Mühendisliği",
    bio: "ROS ve otonom sistemler uzmanı. Yapay zeka araştırmacısı.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    social: { github: "#", linkedin: "#", twitter: "#" }
  },
  {
    name: "Mehmet Demir",
    role: "Proje Yöneticisi",
    department: "Bilgisayar Mühendisliği",
    bio: "Proje yönetimi ve takım koordinasyonunda uzman.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    social: { github: "#", linkedin: "#", twitter: "#" }
  },
  {
    name: "Elif Şahin",
    role: "Etkinlik Koordinatörü",
    department: "Endüstri Mühendisliği",
    bio: "Etkinlik planlama ve topluluk yönetimi uzmanı.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    social: { github: "#", linkedin: "#", twitter: "#" }
  },
  {
    name: "Burak Özdemir",
    role: "Siber Güvenlik Lideri",
    department: "Bilgisayar Mühendisliği",
    bio: "Robotik sistem güvenliği ve penetrasyon testleri.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    social: { github: "#", linkedin: "#", twitter: "#" }
  },
  {
    name: "Selin Yıldız",
    role: "Tasarım Lideri",
    department: "Grafik Tasarım",
    bio: "Robotik tasarım ve 3D modelleme uzmanı.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
    social: { github: "#", linkedin: "#", twitter: "#" }
  }
];

export default function EkibimizPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/[0.02] rounded-full blur-[120px] animate-pulse-glow" />
        
        <div className="container max-w-4xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div {...fadeInUp} className="text-center">
            <span className="text-xs font-mono text-neutral-500 tracking-widest uppercase">Ekibimiz</span>
            <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6">
              <span className="gradient-text">Takım</span>{" "}
              <span className="text-neutral-500">Ruhu</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Merkutech&apos;i oluşturan tutkulu ve yetenekli ekip üyelerimiz. Her biri alanında uzman, birlikte güçlüyüz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4 md:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20">
        <div className="container max-w-4xl mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-12 rounded-3xl glass text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
              <span className="gradient-text">Sen de</span>{" "}
              <span className="text-neutral-500">Aramıza Katıl</span>
            </h2>
            <p className="text-neutral-400 mb-8 max-w-lg mx-auto relative z-10">
              Her seviyeden öğrenciyi aramıza bekliyoruz. Robotik dünyasında kendini keşfetmek için hemen başvur.
            </p>
            <Link 
              href="/iletisim"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-all duration-300 relative z-10"
            >
              Başvur
              <Code2 className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function TeamMemberCard({ name, role, department, bio, image, social }: {
  name: string;
  role: string;
  department: string;
  bio: string;
  image: string;
  social: { github: string; linkedin: string; twitter: string };
}) {
  return (
    <motion.div 
      variants={staggerItem}
      className="group p-6 rounded-2xl glass text-center hover:bg-white/[0.06] transition-all duration-500"
    >
      <div className="relative w-24 h-24 mx-auto mb-5">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-white/5 animate-pulse-glow" />
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover rounded-full relative z-10 ring-2 ring-white/10"
        />
      </div>
      <h3 className="text-lg font-semibold text-white mb-1">{name}</h3>
      <p className="text-sm font-medium text-neutral-300 mb-1">{role}</p>
      <p className="text-xs text-neutral-500 font-mono mb-3">{department}</p>
      <p className="text-sm text-neutral-400 mb-5 leading-relaxed">{bio}</p>
      <div className="flex justify-center gap-3">
        <Link href={social.github} className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-all">
          <Code2 className="h-4 w-4" />
        </Link>
        <Link href={social.linkedin} className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-all">
          <Link2 className="h-4 w-4" />
        </Link>
        <Link href={social.twitter} className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-all">
          <MessageCircle className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}
