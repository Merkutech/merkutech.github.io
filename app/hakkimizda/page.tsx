import { Card } from "@/components/ui/card";
import { Target, Users, Zap, BookOpen } from "lucide-react";

export default function HakkimizdaPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Hakkımızda
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          İstanbul Arel Üniversitesi&apos;nde teknoloji ve inovasyonun merkeziyiz.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8">
            <Target className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Misyonumuz</h3>
            <p className="text-muted-foreground">
              Öğrencilere teknoloji alanında pratik deneyim kazandırmak, 
              yenilikçi projeler geliştirmek ve teknoloji topluluğunu bir araya getirmek.
            </p>
          </Card>
          <Card className="p-8">
            <Zap className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Vizyonumuz</h3>
            <p className="text-muted-foreground">
              Türkiye&apos;nin önde gelen üniversite teknoloji kulüplerinden biri olmak 
              ve mezunlarımızı sektörün en iyileri arasına taşımak.
            </p>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Değerlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ValueCard 
              icon={<Users className="h-8 w-8" />}
              title="İş Birliği"
              description="Birlikte daha güçlüyüz. Takım çalışması ve bilgi paylaşımı bizim temel prensibimiz."
            />
            <ValueCard 
              icon={<Zap className="h-8 w-8" />}
              title="Yenilikçilik"
              description="Yeni teknolojileri keşfetmek ve uygulamak için sürekli öğreniyoruz."
            />
            <ValueCard 
              icon={<BookOpen className="h-8 w-8" />}
              title="Sürekli Öğrenme"
              description="Teknoloji hızla değişiyor, biz de bu değişime ayak uyduruyoruz."
            />
          </div>
        </div>

        <div className="bg-neutral-950 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Hikayemiz</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Merkutech, İstanbul Arel Üniversitesi öğrencilerinin teknolojiye olan tutkusunu 
            bir araya getirmek amacıyla kuruldu. Kısa sürede büyüyen kulübümüz, 
            onlarca projeye imza attı ve yüzlerce öğrenciye teknoloji dünyasının kapılarını açtı.
          </p>
        </div>
      </div>
    </div>
  );
}

function ValueCard({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) {
  return (
    <Card className="p-6 text-center hover:shadow-lg transition-shadow">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </Card>
  );
}
