import { Card } from "@/components/ui/card";
import { Code2, Link2, MessageCircle } from "lucide-react";
import Link from "next/link";

const teamMembers = [
  {
    name: "Ahmet Yılmaz",
    role: "Kulüp Başkanı",
    department: "Bilgisayar Mühendisliği",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Zeynep Kaya",
    role: "Teknik Lider",
    department: "Yazılım Mühendisliği",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Mehmet Demir",
    role: "Proje Yöneticisi",
    department: "Bilgisayar Mühendisliği",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Elif Şahin",
    role: "Etkinlik Koordinatörü",
    department: "Endüstri Mühendisliği",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Burak Özdemir",
    role: "Siber Güvenlik Lideri",
    department: "Bilgisayar Mühendisliği",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Selin Yıldız",
    role: "Tasarım Lideri",
    department: "Grafik Tasarım",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#"
    }
  }
];

export default function EkibimizPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Ekibimiz
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Merkutech&apos;i oluşturan tutkulu ve yetenekli ekip üyelerimiz.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TeamMemberCard({ name, role, department, image, social }: {
  name: string;
  role: string;
  department: string;
  image: string;
  social: { github: string; linkedin: string; twitter: string };
}) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow text-center p-6">
      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-primary font-medium text-sm mb-1">{role}</p>
      <p className="text-muted-foreground text-sm mb-4">{department}</p>
      <div className="flex justify-center gap-3">
          <Link href={social.github} className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
          <Code2 className="h-4 w-4" />
        </Link>
        <Link href={social.linkedin} className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
          <Link2 className="h-4 w-4" />
        </Link>
        <Link href={social.twitter} className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
          <MessageCircle className="h-4 w-4" />
        </Link>
      </div>
    </Card>
  );
}
