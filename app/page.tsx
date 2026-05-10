'use client'

import { SplineScene } from "@/components/ui/splite";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Bot, Cpu, CircuitBoard, Radio, Layers, Zap, Code2, Trophy, ChevronRight } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.12 } },
  viewport: { once: true, margin: "-80px" }
};

const staggerItem = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }
};

const projects = [
  {
    title: "Otonom Robotaksi",
    description: "Teknofest Robotaksi Binek Otonom Araç Yarışması için geliştirilen tam otonom araç projesi.",
    tags: ["ROS", "Python", "OpenCV", "LIDAR"],
    icon: <Bot className="h-6 w-6" />,
    slug: "otonom-robotaksi"
  },
  {
    title: "İnsansı Robot Kol",
    description: "6 eksenli serbestlik derecesine sahip, görüntü işleme ile nesne tanıma yetenekleri.",
    tags: ["Inverse Kinematics", "Computer Vision", "C++"],
    icon: <Cpu className="h-6 w-6" />,
    slug: "insansi-robot-kol"
  },
  {
    title: "Akıllı İlaç Dağıtım Sistemi",
    description: "Hastaneler için otonom ilaç ve malzeme taşıma robotu.",
    tags: ["Arduino", "RFID", "IoT", "MQTT"],
    icon: <CircuitBoard className="h-6 w-6" />,
    slug: "akilli-ilac-dagitim"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
        
        <div className="container max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
              className="flex-1 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-mono text-neutral-400 mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                İstanbul Arel Üniversitesi
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6">
                <span className="block gradient-text">Robotik</span>
                <span className="block text-neutral-500">ve</span>
                <span className="block gradient-text-accent">Teknoloji</span>
              </h1>
              
              <p className="text-lg md:text-xl text-neutral-400 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
                Geleceği kodlayan, robotları hayata geçiren ve teknolojinin sınırlarını zorlayan öğrenci topluluğu.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link 
                  href="/projelerimiz"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-all duration-300"
                >
                  Projeleri Keşfet
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/iletisim"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl glass text-white font-medium text-sm hover:bg-white/10 transition-all duration-300"
                >
                  Aramıza Katıl
                </Link>
              </div>

              <div className="mt-16 flex items-center justify-center lg:justify-start gap-8 text-neutral-600">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-xs">Proje</div>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">200+</div>
                  <div className="text-xs">Üye</div>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">10+</div>
                  <div className="text-xs">Ödül</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.3 }}
              className="flex-1 w-full max-w-xl lg:max-w-none h-[400px] md:h-[500px] lg:h-[600px] relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-950/80 z-10 pointer-events-none" />
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 circuit-bg opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/[0.015] rounded-full blur-[150px]" />
        
        <div className="container max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <span className="text-xs font-mono text-neutral-500 tracking-widest uppercase">Ne Yapıyoruz?</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              <span className="gradient-text">Robotik</span>{" "}
              <span className="text-neutral-500">Dünyasına</span>{" "}
              <span className="gradient-text">Adım At</span>
            </h2>
            <p className="text-neutral-400 max-w-xl mx-auto">
              Yapay zeka, robotik sistemler ve gömülü yazılım alanlarında kendini geliştirmek isteyen herkesi aramıza bekliyoruz.
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <FeatureCard 
              icon={<Bot className="h-7 w-7" />}
              title="Robotik Projeler"
              description="Arduino, Raspberry Pi ve ROS tabanlı robotlar tasarlıyor ve geliştiriyoruz. Otonom araçlardan insansı robotlara kadar geniş bir yelpazede çalışıyoruz."
            />
            <FeatureCard 
              icon={<Cpu className="h-7 w-7" />}
              title="Yapay Zeka"
              description="Makine öğrenimi ve derin öğrenme modelleri geliştiriyoruz. Robotların çevrelerini algılaması ve karar vermesi için AI çözümleri üretiyoruz."
            />
            <FeatureCard 
              icon={<CircuitBoard className="h-7 w-7" />}
              title="Gömülü Sistemler"
              description="Mikrodenetleyiciler, sensörler ve elektronik devrelerle çalışıyoruz. Donanım ve yazılımın birleştiği noktada inovatif çözümler üretiyoruz."
            />
            <FeatureCard 
              icon={<Radio className="h-7 w-7" />}
              title="IoT ve Otonomi"
              description="Nesnelerin interneti ve otonom sistemler üzerine projeler geliştiriyoruz. Akıllı ev sistemlerinden endüstriyel otomasyona kadar."
            />
            <FeatureCard 
              icon={<Layers className="h-7 w-7" />}
              title="3D Modelleme"
              description="Robot parçalarını tasarlamak için CAD yazılımlarını ve 3D baskı teknolojisini kullanıyoruz. Prototipleme sürecini hızlandırıyoruz."
            />
            <FeatureCard 
              icon={<Trophy className="h-7 w-7" />}
              title="Yarışmalar"
              description="Teknofest, Robotaksi ve uluslararası robotik yarışmalarına katılıyoruz. Takım ruhuyla birlikte ödüller kazanıyoruz."
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[120px] animate-pulse-glow" />
        
        <div className="container max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <span className="text-xs font-mono text-neutral-500 tracking-widest uppercase">Öne Çıkanlar</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              <span className="gradient-text">Son</span>{" "}
              <span className="text-neutral-500">Projelerimiz</span>
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {projects.map((project) => (
              <ProjectPreviewCard key={project.slug} {...project} />
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Link 
              href="/projelerimiz"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-white font-medium text-sm hover:bg-white/10 transition-all duration-300"
            >
              Tüm Projeleri Gör
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[120px] animate-pulse-glow" />
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10"
        >
          <span className="text-xs font-mono text-neutral-500 tracking-widest uppercase">Seni Bekliyoruz</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            <span className="gradient-text">Geleceği</span>{" "}
            <span className="text-neutral-500">Birlikte</span>{" "}
            <span className="gradient-text">İnşa Edelim</span>
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto mb-10 text-lg leading-relaxed">
            Robotik ve teknolojiye ilgi duyuyorsan, kendini geliştirmek istiyorsan ve harika projelerde yer almak istiyorsan Merkutech ailesine katıl.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/iletisim"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-all duration-300"
            >
              Hemen Başvur
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/hakkimizda"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl glass text-white font-medium text-sm hover:bg-white/10 transition-all duration-300"
            >
              Daha Fazla Bilgi
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) {
  return (
    <motion.div 
      variants={staggerItem}
      className="group p-8 rounded-2xl glass hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-1"
    >
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 text-white mb-5 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-500">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-3 text-white">{title}</h3>
      <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

function ProjectPreviewCard({ title, description, tags, icon, slug }: {
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  slug: string;
}) {
  return (
    <motion.div variants={staggerItem}>
      <Link href={`/projelerimiz/${slug}`} className="group block p-8 rounded-2xl glass hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-1 h-full">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 text-white mb-5 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-500">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-white group-hover:gradient-text transition-all">{title}</h3>
        <p className="text-neutral-400 text-sm mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="px-2.5 py-1 bg-white/5 rounded-lg text-xs font-mono text-neutral-400 border border-white/5">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <span>Detayları Gör</span>
          <ChevronRight className="h-4 w-4" />
        </div>
      </Link>
    </motion.div>
  );
}
