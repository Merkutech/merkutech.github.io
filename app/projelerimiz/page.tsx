import { Card } from "@/components/ui/card";
import { ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Akıllı Kampüs Sistemi",
    description: "Üniversite kampüsü için geliştirilen IoT tabanlı akıllı yönetim sistemi. Enerji verimliliği ve güvenlik çözümleri içerir.",
    tags: ["IoT", "React", "Node.js"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    link: "#"
  },
  {
    title: "Eğitim Platformu",
    description: "Öğrenciler için interaktif online eğitim platformu. Video dersler, quizler ve canlı yayın özellikleri.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    link: "#"
  },
  {
    title: "Yapay Zeka Asistanı",
    description: "Üniversite öğrencileri için tasarlanmış yapay zeka destekli kişisel asistan uygulaması.",
    tags: ["Python", "OpenAI", "Flutter"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    link: "#"
  },
  {
    title: "Sosyal Etkinlik Uygulaması",
    description: "Kampüs içi etkinlikleri organize etmek ve katılımcıları bir araya getirmek için mobil uygulama.",
    tags: ["React Native", "Firebase"],
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80",
    link: "#"
  },
  {
    title: "Veri Analiz Platformu",
    description: "Üniversite verilerini analiz eden ve görselleştiren kapsamlı bir platform.",
    tags: ["Python", "Django", "D3.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    link: "#"
  },
  {
    title: "Güvenlik Araştırma Projesi",
    description: "Siber güvenlik alanında yapılan araştırmalar ve geliştirilen güvenlik araçları.",
    tags: ["Python", "Kali Linux", "Docker"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
    link: "#"
  }
];

export default function ProjelerimizPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Projelerimiz
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Merkutech olarak geliştirdiğimiz projelerle teknolojiye katkı sağlıyoruz.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ title, description, tags, image, link }: {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="aspect-video overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span key={i} className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <Link 
            href={link}
            className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
          >
            <ExternalLink className="h-4 w-4" />
            Detaylar
          </Link>
          <Link 
            href={link}
            className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
          >
            <Code2 className="h-4 w-4" />
            Kod
          </Link>
        </div>
      </div>
    </Card>
  );
}
