import { Code2, Cpu, Flame, Globe, Heart, Layers, Leaf, Shield, Waves, type LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = { Globe, Shield, Flame, Cpu, Heart, Layers, Waves, Leaf };

/* Gerçek görseli olmayan projeler için kapak: projeyle ilgisiz fotoğraf yerine simge */
export function ProjectCover({ icon, title }: { icon: string; title: string }) {
  const Icon = ICONS[icon] ?? Code2;
  return (
    <div className="project-cover" role="img" aria-label={title}>
      <Icon strokeWidth={1} />
    </div>
  );
}
