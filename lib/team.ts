export interface TeamMember {
  id: string;
  name: string;
  role: {
    tr: string;
    en: string;
  };
  image?: string;
  bio: {
    tr: string;
    en: string;
  };
  links?: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: "member-1",
    name: "Team Lead",
    role: {
      tr: "Takım Kaptanı",
      en: "Team Captain",
    },
    bio: {
      tr: "Takımın genel koordinasyonundan ve SUAS 2026 proje yönetiminden sorumlu.",
      en: "Responsible for overall team coordination and SUAS 2026 project management.",
    },
  },
  {
    id: "member-2",
    name: "Software Lead",
    role: {
      tr: "Yazılım Lideri",
      en: "Software Lead",
    },
    bio: {
      tr: "Otonom uçuş yazılımı, bilgisayarlı görü ve görüntü işleme algoritmalarından sorumlu.",
      en: "Responsible for autonomous flight software, computer vision, and image processing algorithms.",
    },
  },
  {
    id: "member-3",
    name: "Mechanical Lead",
    role: {
      tr: "Mekanik Lideri",
      en: "Mechanical Lead",
    },
    bio: {
      tr: "İHA gövde tasarımı, aerodinamik analiz ve 3D modellemeden sorumlu.",
      en: "Responsible for UAV airframe design, aerodynamic analysis, and 3D modeling.",
    },
  },
  {
    id: "member-4",
    name: "Avionics Lead",
    role: {
      tr: "Aviyonik Lideri",
      en: "Avionics Lead",
    },
    bio: {
      tr: "Uçuş kontrol sistemi, sensör entegrasyonu ve haberleşme sistemlerinden sorumlu.",
      en: "Responsible for flight control system, sensor integration, and communication systems.",
    },
  },
  {
    id: "member-5",
    name: "Pilot / Safety Officer",
    role: {
      tr: "Pilot / Güvenlik Sorumlusu",
      en: "Pilot / Safety Officer",
    },
    bio: {
      tr: "Uçuş operasyonları, güvenlik prosedürleri ve manuel kontrol görevlerinden sorumlu.",
      en: "Responsible for flight operations, safety procedures, and manual control duties.",
    },
  },
  {
    id: "member-6",
    name: "Mission Planner",
    role: {
      tr: "Görev Planlayıcı",
      en: "Mission Planner",
    },
    bio: {
      tr: "Otonom görev planlaması, waypoint navigasyonu ve ground station operasyonlarından sorumlu.",
      en: "Responsible for autonomous mission planning, waypoint navigation, and ground station operations.",
    },
  },
];
