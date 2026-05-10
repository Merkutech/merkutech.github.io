'use client'

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Camera, MessageCircle, Play, Send, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

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

export default function IletisimPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-[120px] animate-pulse-glow" />
        
        <div className="container max-w-4xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div {...fadeInUp} className="text-center">
            <span className="text-xs font-mono text-neutral-500 tracking-widest uppercase">İletişim</span>
            <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6">
              <span className="gradient-text">Bize</span>{" "}
              <span className="text-neutral-500">Ulaşın</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Soruların, önerilerin veya iş birliği fikirlerin için bizimle iletişime geç.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20">
        <div className="container max-w-5xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-4"
            >
              <motion.div variants={staggerItem} className="p-6 rounded-2xl glass">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/5 text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1">Adres</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      İstanbul Arel Üniversitesi<br />
                      Teknopark Kampüsü<br />
                      İstanbul, Türkiye
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={staggerItem} className="p-6 rounded-2xl glass">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/5 text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1">E-posta</h3>
                    <p className="text-sm text-neutral-400">
                      merkutech@arel.edu.tr
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={staggerItem} className="p-6 rounded-2xl glass">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/5 text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1">Telefon</h3>
                    <p className="text-sm text-neutral-400">
                      +90 (212) 000 00 00
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={staggerItem} className="p-6 rounded-2xl glass">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/5 text-white">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1">Çalışma Saatleri</h3>
                    <p className="text-sm text-neutral-400">
                      Pazartesi - Cuma<br />
                      10:00 - 18:00
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="p-8 rounded-3xl glass">
                <h2 className="text-2xl font-bold mb-2 gradient-text">Mesaj Gönder</h2>
                <p className="text-neutral-400 text-sm mb-8">
                  Formu doldur, en kısa sürede sana geri dönelim.
                </p>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-neutral-300 mb-2">Adınız</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/20 transition-colors"
                        placeholder="Adınız"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-300 mb-2">Soyadınız</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/20 transition-colors"
                        placeholder="Soyadınız"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">E-posta</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/20 transition-colors"
                      placeholder="ornek@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">Konu</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/20 transition-colors"
                      placeholder="Mesajınızın konusu"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">Mesajınız</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/20 transition-colors resize-none"
                      placeholder="Mesajınızı buraya yazın..."
                    />
                  </div>
                  <button 
                    type="submit"
                    className="group w-full py-4 px-6 rounded-xl bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Gönder
                    <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-20">
        <div className="container max-w-4xl mx-auto px-4 md:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text">Sosyal Medya</h2>
            <p className="text-neutral-400 mt-3">Bizi takip et, gelişmelerden haberdar ol.</p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <SocialCard 
              icon={<Camera className="h-6 w-6" />}
              name="Instagram"
              handle="@merkutech"
              href="#"
            />
            <SocialCard 
              icon={<MessageCircle className="h-6 w-6" />}
              name="Twitter / X"
              handle="@merkutech"
              href="#"
            />
            <SocialCard 
              icon={<Play className="h-6 w-6" />}
              name="YouTube"
              handle="Merkutech"
              href="#"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function SocialCard({ icon, name, handle, href }: {
  icon: React.ReactNode;
  name: string;
  handle: string;
  href: string;
}) {
  return (
    <motion.div variants={staggerItem}>
      <Link 
        href={href}
        className="group flex items-center gap-4 p-6 rounded-2xl glass hover:bg-white/[0.06] transition-all duration-500"
      >
        <div className="p-3 rounded-xl bg-white/5 text-white group-hover:bg-white/10 transition-colors">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-white">{name}</h3>
          <p className="text-sm text-neutral-400">{handle}</p>
        </div>
        <ArrowRight className="h-4 w-4 text-neutral-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
      </Link>
    </motion.div>
  );
}
