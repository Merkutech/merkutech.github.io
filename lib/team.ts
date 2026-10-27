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
    id: "mehmetalp-sancakceken",
    name: "Mehmetalp SANCAKÇEKEN",
    image: "/team/mehmetalp-sancakceken.png",
    role: { tr: "Takım Kaptanı", en: "Team Captain" },
    bio: { tr: "", en: "" },
  },
  {
    id: "emir-kalfa",
    name: "Muhammet Emir KALFA",
    image: "/team/emir-kalfa.png",
    role: { tr: "Aviyonik Kaptanı", en: "Avionics Captain" },
    bio: { tr: "", en: "" },
  },
  {
    id: "eren-cakar",
    name: "Eren ÇAKAR",
    image: "/team/erencakar.png",
    role: { tr: "Yazılım Kaptanı", en: "Software Captain" },
    bio: { tr: "", en: "" },
  },
  {
    id: "ahmet-yusuf-can",
    name: "Ahmet Yusuf CAN",
    image: "/team/ahmet-yusuf-can.png",
    role: { tr: "Mekanik Kaptanı", en: "Mechanical Captain" },
    bio: { tr: "", en: "" },
  },
  {
    id: "idil-ture",
    name: "İdil TÜRE",
    image: "/team/idil-ture.png",
    role: { tr: "Yazılım Ekip Üyesi", en: "Software Team Member" },
    bio: { tr: "", en: "" },
  },
  {
    id: "basak-erdag",
    name: "Başak ERDAĞ",
    image: "/team/basak-erdag.png",
    role: { tr: "Yazılım Ekip Üyesi", en: "Software Team Member" },
    bio: { tr: "", en: "" },
  },
  {
    id: "beyzanur-musul",
    name: "Beyzanur MUSUL",
    image: "/team/beyzanur-musul.png",
    role: { tr: "Yazılım Ekip Üyesi", en: "Software Team Member" },
    bio: { tr: "", en: "" },
  },
  {
    id: "merve-keziban-zerdali",
    name: "Merve Keziban ZERDALİ",
    image: "/team/merve-keziban-zerdali.png",
    role: { tr: "Tanıtım ve Sponsorluk Ekip Üyesi", en: "Promotion & Sponsorship Team Member" },
    bio: { tr: "", en: "" },
  },
  {
    id: "irem-yaman",
    name: "İrem YAMAN",
    image: "/team/irem-yaman.png",
    role: { tr: "Tanıtım ve Sponsorluk Ekip Üyesi", en: "Promotion & Sponsorship Team Member" },
    bio: { tr: "", en: "" },
  },
  {
    id: "ibrahim-toprak",
    name: "İbrahim TOPRAK",
    image: "/team/ibrahim-toprak.png",
    role: { tr: "Tanıtım ve Sponsorluk Ekip Üyesi", en: "Promotion & Sponsorship Team Member" },
    bio: { tr: "", en: "" },
  },
];
