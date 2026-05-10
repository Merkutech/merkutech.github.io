import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { SpotlightCursor } from "@/components/ui/spotlight-cursor"
import Link from "next/link";
import { ArrowRight, Code2, Cpu, Lightbulb } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full">
        <Card className="w-full min-h-[600px] bg-black/[0.96] relative overflow-hidden border-0 rounded-none">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          
          <div className="flex flex-col md:flex-row h-full min-h-[600px]">
            {/* Left content */}
            <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                Merkutech
              </h1>
              <p className="mt-4 text-lg text-neutral-300 max-w-lg">
                İstanbul Arel Üniversitesi&apos;nin teknoloji ve inovasyon kulübü. 
                Geleceği birlikte şekillendiriyoruz.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link 
                  href="/projelerimiz"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-neutral-200"
                >
                  Projelerimizi Keşfet
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link 
                  href="/hakkimizda"
                  className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
                >
                  Hakkımızda
                </Link>
              </div>
            </div>

            {/* Right content */}
            <div className="flex-1 relative min-h-[400px]">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 md:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Neler Yapıyoruz?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Teknolojiyi takip etmekle kalmıyor, onu şekillendiriyoruz.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Code2 className="h-8 w-8" />}
            title="Yazılım Geliştirme"
            description="Web, mobil ve yapay zeka projeleri geliştiriyoruz. Modern teknolojilerle çözümler üretiyoruz."
          />
          <FeatureCard 
            icon={<Cpu className="h-8 w-8" />}
            title="Teknoloji Etkinlikleri"
            description="Hackathonlar, workshoplar ve seminerler düzenleyerek teknoloji tutkunlarını bir araya getiriyoruz."
          />
          <FeatureCard 
            icon={<Lightbulb className="h-8 w-8" />}
            title="İnovasyon"
            description="Yaratıcı fikirleri hayata geçiriyor, geleceğin teknolojilerini bugünden keşfediyoruz."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-neutral-950 text-white py-20 overflow-hidden">
        <SpotlightCursor 
          size={300}
          className="from-zinc-100/20 via-zinc-200/20 to-zinc-300/20"
        />
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Aramıza Katıl
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto mb-8 text-lg">
            Teknolojiye ilgi duyuyorsan, kendini geliştirmek istiyorsan ve harika projelerde yer almak istiyorsan 
            Merkutech ailesine katıl.
          </p>
          <Link 
            href="/iletisim"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-sm font-medium text-black transition-colors hover:bg-neutral-200"
          >
            Bizimle İletişime Geç
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
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
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
}
