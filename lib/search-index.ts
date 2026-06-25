import { teamMembers } from "./team";
import { projects } from "./projects";

export interface SearchEntry {
  href: string;
  hash?: string;
  title: { tr: string; en: string };
  description: { tr: string; en: string };
  content: { tr: string; en: string };
}

function pageIndex(): SearchEntry[] {
  return [
    {
      href: "/",
      title: { tr: "Ana Sayfa", en: "Home" },
      description: { tr: "İstanbul Arel Üniversitesi Robotik ve Teknoloji Kulübü", en: "Istanbul Arel University Robotics and Technology Club" },
      content: { tr: "robotik otonom sistemler drone teknolojileri yapay zeka projeler Teknofest uluslararası yarışmalar ROS OpenCV Python TensorFlow PyTorch Computer Vision MAVLink DroneKit Swarm AI STM32 Arduino Embedded C SolidWorks AutoCAD Gazebo gömülü sistemler 3D modelleme keşfet öğren üret başarılar Teknofest Şampiyonlar Ligi Şampiyonu SUAS AUVSI sponsorlar MCT Sensor MCT Technic Demsay Robomer çalışma alanları İstanbul Arel Üniversitesi", en: "robotics autonomous systems drone technologies artificial intelligence projects Teknofest international competitions ROS OpenCV Python TensorFlow PyTorch Computer Vision MAVLink DroneKit Swarm AI STM32 Arduino Embedded C SolidWorks AutoCAD Gazebo embedded systems 3D modeling explore learn build achievements Teknofest Champions League Champion SUAS AUVSI sponsors MCT Sensor MCT Technic Demsay Robomer work areas Istanbul Arel University" },
    },
    {
      href: "/projelerimiz",
      title: { tr: "Projelerimiz", en: "Our Projects" },
      description: { tr: "Merkutech ekibinin geliştirdiği tüm projeler", en: "All projects developed by the Merkutech team" },
      content: { tr: projects.map((p) => `${p.translations.tr.title} ${p.translations.tr.description}`).join(" "), en: projects.map((p) => `${p.translations.en.title} ${p.translations.en.description}`).join(" ") },
    },
    {
      href: "/iletisim",
      title: { tr: "İletişim", en: "Contact" },
      description: { tr: "Merkutech iletişim kanalları ve sosyal medya", en: "Merkutech contact channels and social media" },
      content: { tr: "iletişim sosyal medya Instagram YouTube LinkedIn GitHub WhatsApp Google Form başvuru takım Arel Savunma Sanayi @merkutech @arelsavunma", en: "contact social media Instagram YouTube LinkedIn GitHub WhatsApp Google Form application team Arel Defense Industry @merkutech @arelsavunma" },
    },
    {
      href: "/team",
      title: { tr: "Ekibimiz", en: "Our Team" },
      description: { tr: "Merkutech takım üyeleri", en: "Merkutech team members" },
      content: { tr: teamMembers.map((m) => `${m.name} ${m.role.tr}`).join(" ") + " takım üyeler ekip üyeleri roller", en: teamMembers.map((m) => `${m.name} ${m.role.en}`).join(" ") + " team members crew roles" },
    },
    {
      href: "/blog",
      title: { tr: "Blog", en: "Blog" },
      description: { tr: "Merkutech projeleri, etkinlikleri ve teknoloji yazıları", en: "Merkutech projects, events, and technology writings" },
      content: { tr: "blog yazılar projeler etkinlikler teknoloji robotik yapay zeka drone güncellemeler duyurular", en: "blog posts projects events technology robotics AI drone updates announcements" },
    },
  ];
}

function projectDetailIndex(): SearchEntry[] {
  return projects.map((p) => ({
    href: `/projelerimiz/${p.slug}/`,
    title: { tr: p.translations.tr.title, en: p.translations.en.title },
    description: { tr: p.translations.tr.description, en: p.translations.en.description },
    content: {
      tr: [p.translations.tr.title, p.translations.tr.description, p.translations.tr.longDescription, ...p.translations.tr.features].join(" "),
      en: [p.translations.en.title, p.translations.en.description, p.translations.en.longDescription, ...p.translations.en.features].join(" "),
    },
  }));
}

function teamMemberIndex(): SearchEntry[] {
  return teamMembers.map((m) => ({
    href: "/team/",
    hash: `#${m.id}`,
    title: { tr: m.name, en: m.name },
    description: { tr: m.role.tr, en: m.role.en },
    content: { tr: `${m.name} ${m.role.tr} ${m.bio.tr}`, en: `${m.name} ${m.role.en} ${m.bio.en}` },
  }));
}

function buildAllEntries(): SearchEntry[] {
  return [
    ...pageIndex(),
    ...projectDetailIndex(),
    ...teamMemberIndex(),
  ];
}

const allEntries = buildAllEntries();

export const searchIndex: SearchEntry[] = allEntries;
export const defaultSearchEntries: SearchEntry[] = [];

export function getAllSearchEntries(): SearchEntry[] {
  return allEntries;
}
