export type TeamGroup = "takim" | "aviyonik" | "mekanik" | "yazilim" | "tanitim-sponsorluk";

export interface TeamMember {
  id: string;
  name: string;
  team: TeamGroup;
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
    id: "mehmetalp-sancakceken",
    team: "takim",
    name: "Mehmetalp SANCAKÇEKEN",
    image: "/team/mehmetalp-sancakceken.png",
    role: { tr: "Takım Kaptanı", en: "Team Captain" },
    bio: { tr: "", en: "" },
  },
  {
    id: "emir-kalfa",
    team: "aviyonik",
    name: "Muhammet Emir KALFA",
    image: "/team/emir-kalfa.png",
    role: { tr: "Aviyonik Kaptanı", en: "Avionics Captain" },
    bio: { tr: "", en: "" },
  },
  {
    id: "eren-cakar",
    team: "yazilim",
    name: "Eren ÇAKAR",
    image: "/team/erencakar.png",
    role: { tr: "Yazılım Kaptanı", en: "Software Captain" },
    bio: { tr: "", en: "" },
  },
  {
    id: "ahmet-yusuf-can",
    team: "mekanik",
    name: "Ahmet Yusuf CAN",
    image: "/team/ahmet-yusuf-can.png",
    role: { tr: "Mekanik Kaptanı", en: "Mechanical Captain" },
    bio: { tr: "", en: "" },
  },
  {
    id: "idil-ture",
    team: "yazilim",
    name: "İdil TÜRE",
    image: "/team/idil-ture.png",
    role: { tr: "Yazılım Ekip Üyesi", en: "Software Team Member" },
    bio: { tr: "", en: "" },
  },
  {
    id: "basak-erdag",
    team: "yazilim",
    name: "Başak ERDAĞ",
    image: "/team/basak-erdag.png",
    role: { tr: "Yazılım Ekip Üyesi", en: "Software Team Member" },
    bio: { tr: "", en: "" },
  },
  {
    id: "beyzanur-musuk",
    team: "yazilim",
    name: "Beyzanur MUSUK",
    image: "/team/beyzanur-musuk.png",
    role: { tr: "Yazılım Ekip Üyesi", en: "Software Team Member" },
    bio: { tr: "", en: "" },
  },
  {
    id: "merve-keziban-zerdali",
    team: "tanitim-sponsorluk",
    name: "Merve Keziban ZERDALİ",
    image: "/team/merve-keziban-zerdali.png",
    role: { tr: "Tanıtım ve Sponsorluk Ekip Üyesi", en: "Promotion & Sponsorship Team Member" },
    bio: { tr: "", en: "" },
  },
  {
    id: "irem-yaman",
    team: "tanitim-sponsorluk",
    name: "İrem YAMAN",
    image: "/team/irem-yaman.png",
    role: { tr: "Tanıtım ve Sponsorluk Ekip Üyesi", en: "Promotion & Sponsorship Team Member" },
    bio: { tr: "", en: "" },
  },
  {
    id: "ibrahim-toprak",
    team: "tanitim-sponsorluk",
    name: "İbrahim TOPRAK",
    image: "/team/ibrahim-toprak.png",
    role: { tr: "Tanıtım ve Sponsorluk Ekip Üyesi", en: "Promotion & Sponsorship Team Member" },
    bio: { tr: "", en: "" },
  },
];

export const teamGroups: { id: TeamGroup; title: { tr: string; en: string } }[] = [
  { id: "takim", title: { tr: "Takım", en: "Team" } },
  { id: "aviyonik", title: { tr: "Aviyonik", en: "Avionics" } },
  { id: "mekanik", title: { tr: "Mekanik", en: "Mechanical" } },
  { id: "yazilim", title: { tr: "Yazılım", en: "Software" } },
  { id: "tanitim-sponsorluk", title: { tr: "Tanıtım ve Sponsorluk", en: "Promotion & Sponsorship" } },
];
