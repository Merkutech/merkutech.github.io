import { teamMembers } from "./team";
import { suasVehicle } from "./suas-vehicle";
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
      description: { tr: "İstanbul Arel Üniversitesi Robotik ve Teknoloji Kulübü — Robotik, otonom sistemler, drone ve yapay zeka projeleri", en: "Istanbul Arel University Robotics and Technology Club — Robotics, autonomous systems, drone and AI projects" },
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
      description: { tr: "Merkutech takım üyeleri — tam liste", en: "Merkutech team members — full roster" },
      content: { tr: teamMembers.map((m) => `${m.name} ${m.role.tr}`).join(" ") + " takım üyeler ekip üyeleri roller", en: teamMembers.map((m) => `${m.name} ${m.role.en}`).join(" ") + " team members crew roles" },
    },
    {
      href: "/suas-2026",
      title: { tr: "SUAS 2026 Aracımız", en: "SUAS 2026 Vehicle" },
      description: { tr: "SUAS 2026 yarışması için İHA tasarım ve dokümantasyonu", en: "UAV design and documentation for SUAS 2026 competition" },
      content: { tr: [suasVehicle.name.tr, suasVehicle.description.tr, ...suasVehicle.specs.map((s) => `${s.label.tr} ${s.value.tr}`), ...suasVehicle.components.map((c) => `${c.name.tr} ${c.description.tr}`), suasVehicle.designPhilosophy.tr, suasVehicle.testing.overview.tr, ...suasVehicle.testing.procedures.flatMap((p) => [p.title.tr, p.description.tr, ...p.steps.tr]), suasVehicle.safety.tr].join(" "), en: [suasVehicle.name.en, suasVehicle.description.en, ...suasVehicle.specs.map((s) => `${s.label.en} ${s.value.en}`), ...suasVehicle.components.map((c) => `${c.name.en} ${c.description.en}`), suasVehicle.designPhilosophy.en, suasVehicle.testing.overview.en, ...suasVehicle.testing.procedures.flatMap((p) => [p.title.en, p.description.en, ...p.steps.en]), suasVehicle.safety.en].join(" ") },
    },
    {
      href: "/blog",
      title: { tr: "Blog", en: "Blog" },
      description: { tr: "Merkutech projeleri, etkinlikleri ve teknoloji yazıları", en: "Merkutech projects, events, and technology writings" },
      content: { tr: "blog yazılar projeler etkinlikler teknoloji robotik yapay zeka drone güncellemeler duyurular", en: "blog posts projects events technology robotics AI drone updates announcements" },
    },
    {
      href: "/suas-2026",
      hash: "#components",
      title: { tr: "SUAS 2026 Bileşenleri", en: "SUAS 2026 Components" },
      description: { tr: "Uçuş kontrolcüsü, GPS, kamera, haberleşme ve diğer bileşenler", en: "Flight controller, GPS, camera, communication and other components" },
      content: { tr: suasVehicle.components.map((c) => `${c.name.tr} ${c.description.tr}`).join(" "), en: suasVehicle.components.map((c) => `${c.name.en} ${c.description.en}`).join(" ") },
    },
    {
      href: "/suas-2026",
      hash: "#testing",
      title: { tr: "Test Süreçleri", en: "Testing Procedures" },
      description: { tr: "Yer testleri, manuel uçuş ve otonom uçuş test prosedürleri", en: "Ground tests, manual flight and autonomous flight test procedures" },
      content: { tr: [suasVehicle.testing.overview.tr, ...suasVehicle.testing.procedures.flatMap((p) => [p.title.tr, p.description.tr, ...p.steps.tr])].join(" "), en: [suasVehicle.testing.overview.en, ...suasVehicle.testing.procedures.flatMap((p) => [p.title.en, p.description.en, ...p.steps.en])].join(" ") },
    },
    {
      href: "/suas-2026",
      hash: "#safety",
      title: { tr: "Güvenlik Protokolleri", en: "Safety Protocols" },
      description: { tr: "Uçuş güvenliği, failsafe ve acil durum prosedürleri", en: "Flight safety, failsafe and emergency procedures" },
      content: { tr: suasVehicle.safety.tr, en: suasVehicle.safety.en },
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

function suasComponentIndex(): SearchEntry[] {
  return suasVehicle.components.map((c, i) => ({
    href: "/suas-2026/",
    hash: "#components",
    title: { tr: c.name.tr, en: c.name.en },
    description: { tr: "SUAS 2026 Bileşeni", en: "SUAS 2026 Component" },
    content: { tr: `${c.name.tr} ${c.description.tr} SUAS 2026`, en: `${c.name.en} ${c.description.en} SUAS 2026` },
  }));
}

function suasSpecIndex(): SearchEntry[] {
  return suasVehicle.specs.map((s) => ({
    href: "/suas-2026/",
    hash: "#specs",
    title: { tr: s.label.tr, en: s.label.en },
    description: { tr: s.value.tr, en: s.value.en },
    content: { tr: `${s.label.tr} ${s.value.tr} teknik özellik`, en: `${s.label.en} ${s.value.en} technical spec` },
  }));
}

function buildAllEntries(): SearchEntry[] {
  return [
    ...pageIndex(),
    ...projectDetailIndex(),
    ...teamMemberIndex(),
    ...suasComponentIndex(),
    ...suasSpecIndex(),
  ];
}

const allEntries = buildAllEntries();

export const searchIndex: SearchEntry[] = allEntries;
export const defaultSearchEntries: SearchEntry[] = [];

export function getAllSearchEntries(): SearchEntry[] {
  return allEntries;
}
