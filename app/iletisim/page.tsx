import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Camera, MessageCircle, Play } from "lucide-react";
import Link from "next/link";

export default function IletisimPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          İletişim
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Bizimle iletişime geçmek için aşağıdaki kanalları kullanabilirsiniz.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-6">İletişim Bilgileri</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Adres</h3>
                  <p className="text-muted-foreground text-sm">
                    İstanbul Arel Üniversitesi<br />
                    Teknopark Kampüsü<br />
                    İstanbul, Türkiye
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">E-posta</h3>
                  <p className="text-muted-foreground text-sm">
                    merkutech@arel.edu.tr
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Telefon</h3>
                  <p className="text-muted-foreground text-sm">
                    +90 (212) 000 00 00
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-6">Sosyal Medya</h2>
            <div className="space-y-4">
              <Link href="#" className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                <Camera className="h-6 w-6" />
                <div>
                  <h3 className="font-medium">Instagram</h3>
                  <p className="text-muted-foreground text-sm">@merkutech</p>
                </div>
              </Link>
              <Link href="#" className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                <MessageCircle className="h-6 w-6" />
                <div>
                  <h3 className="font-medium">Twitter / X</h3>
                  <p className="text-muted-foreground text-sm">@merkutech</p>
                </div>
              </Link>
              <Link href="#" className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                <Play className="h-6 w-6" />
                <div>
                  <h3 className="font-medium">YouTube</h3>
                  <p className="text-muted-foreground text-sm">Merkutech</p>
                </div>
              </Link>
            </div>
          </Card>
        </div>

        <Card className="p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Bize Ulaşın</h2>
          <form className="space-y-4 max-w-lg mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Adınız</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                  placeholder="Adınız"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Soyadınız</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                  placeholder="Soyadınız"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">E-posta</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                placeholder="ornek@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Konu</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                placeholder="Mesajınızın konusu"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Mesajınız</label>
              <textarea 
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-input bg-background resize-none"
                placeholder="Mesajınızı buraya yazın..."
              />
            </div>
            <button 
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Gönder
            </button>
          </form>
        </Card>
      </div>
    </div>
  );
}
