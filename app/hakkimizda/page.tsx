'use client'

import { motion } from "framer-motion";
import { Target, Compass, Zap, BookOpen, Trophy, Code2, Heart } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: [0, 0, 0.2, 1] as const }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.12 } },
  viewport: { once: true, margin: "-100px" }
};

const staggerItem = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const }
};

export default function HakkimizdaPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-[120px] animate-pulse-glow" />
        
        <div className="container max-w-4xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div {...fadeInUp} className="text-center">
            <span className="text-xs font-mono text-neutral-500 tracking-widest uppercase">Hakkımızda</span>
            <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6">
              <span className="gradient-text">Merkutech</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              İstanbul Arel Üniversitesi&apos;nde robotik ve teknolojinin geleceğini şekillendiren öğrenci topluluğu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container max-w-5xl mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <span className="text-xs font-mono text-neutral-500 tracking-widest uppercase">Hikayemiz</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                <span className="gradient-text">Tutkuyla</span>{" "}
                <span className="text-neutral-500">Başlayan</span>{" "}
                <span className="gradient-text">Yolculuk</span>
              </h2>
              <div className="space-y-4 text-neutral-400 leading-relaxed">
                <p>
                  Merkutech, İstanbul Arel Üniversitesi öğrencilerinin robotik ve teknolojiye olan tutkusunu bir araya getirmek amacıyla kuruldu.
                </p>
                <p>
                  Kısa sürede büyüyen kulübümüz, onlarca robotik projeye imza attı ve yüzlerce öğrenciye bu heyecan verici dünyanın kapılarını açtı.
                </p>
                <p>
                  Bugün Teknofest&apos;te yarışan, ulusal ve uluslararası platformlarda ülkemizi temsil eden bir topluluk olduk.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-3xl blur-xl" />
              <div className="relative p-8 rounded-3xl glass overflow-hidden">
                <div className="grid grid-cols-2 gap-6">
                  <StatCard number="2019" label="Kuruluş Yılı" />
                  <StatCard number="50+" label="Tamamlanan Proje" />
                  <StatCard number="200+" label="Aktif Üye" />
                  <StatCard number="10+" label="Kazanılan Ödül" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container max-w-5xl mx-auto px-4 md:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div variants={staggerItem} className="p-10 rounded-3xl glass">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 mb-6">
                <Target className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">Misyonumuz</h3>
              <p className="text-neutral-400 leading-relaxed">
                Öğrencilere robotik ve teknoloji alanında pratik deneyim kazandırmak, yenilikçi projeler geliştirmek ve teknoloji topluluğunu bir araya getirmek. Her seviyeden öğrenciye ulaşarak onların potansiyelini ortaya çıkarmak.
              </p>
            </motion.div>
            <motion.div variants={staggerItem} className="p-10 rounded-3xl glass">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 mb-6">
                <Compass className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">Vizyonumuz</h3>
              <p className="text-neutral-400 leading-relaxed">
                Türkiye&apos;nin önde gelen üniversite robotik kulüplerinden biri olmak ve mezunlarımızı sektörün en iyileri arasına taşımak. Robotik alanında uluslararası standartlarda projeler üreten bir merkez haline gelmek.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container max-w-5xl mx-auto px-4 md:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-xs font-mono text-neutral-500 tracking-widest uppercase">Değerlerimiz</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 gradient-text">Bizi Biz Yapanlar</h2>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <ValueCard 
              icon={<Zap className="h-6 w-6" />}
              title="Yenilikçilik"
              description="Yeni teknolojileri keşfetmek ve uygulamak için sürekli öğreniyoruz."
            />
            <ValueCard 
              icon={<BookOpen className="h-6 w-6" />}
              title="Öğrenme"
              description="Teknoloji hızla değişiyor, biz de bu değişime ayak uyduruyoruz."
            />
            <ValueCard 
              icon={<Trophy className="h-6 w-6" />}
              title="Mükemmellik"
              description="Her projede en iyisini hedefliyor ve sınırları zorluyoruz."
            />
            <ValueCard 
              icon={<Code2 className="h-6 w-6" />}
              title="Açık Kaynak"
              description="Bilgiyi paylaşıyor ve topluluğa katkı sağlıyoruz."
            />
            <ValueCard 
              icon={<Heart className="h-6 w-6" />}
              title="Tutku"
              description="Robotik ve teknolojiye olan sevgimizle her projeye can veriyoruz."
            />
            <ValueCard 
              icon={<Target className="h-6 w-6" />}
              title="Odaklanma"
              description="Hedeflerimize ulaşmak için kararlı ve disiplinli çalışıyoruz."
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center p-4">
      <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{number}</div>
      <div className="text-xs text-neutral-500 font-mono">{label}</div>
    </div>
  );
}

function ValueCard({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) {
  return (
    <motion.div 
      variants={staggerItem}
      className="group p-6 rounded-2xl glass text-center hover:bg-white/[0.06] transition-all duration-500"
    >
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 text-white mb-4 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-500">
        {icon}
      </div>
      <h3 className="text-base font-semibold mb-2 text-white">{title}</h3>
      <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
