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
    id: "yusuf-ozdemir",
    name: "Yusuf ÖZDEMİR",
    image: "/team/yusuf-ozdemir.png",
    role: { tr: "Takım Kaptanı", en: "Team Captain" },
    bio: { tr: "", en: "" },
  },
  {
    id: "fatih-baran-aslan",
    name: "Fatih Baran ASLAN",
    image: "/team/fatih-baran-aslan.png",
    role: { tr: "Aviyonik Kaptanı", en: "Avionics Captain" },
    bio: { tr: "", en: "" },
  },
  {
    id: "furkan-kayra-aytug",
    name: "Furkan Kayra AYTUĞ",
    image: "/team/furkan-kayra-aytug.png",
    role: { tr: "Yazılım Kaptanı", en: "Software Captain" },
    bio: { tr: "", en: "" },
  },
  {
    id: "semih-can-karakus",
    name: "Semih Can KARAKUŞ",
    image: "/team/semih-can-karakus.png",
    role: { tr: "Yapay Zeka Kaptanı", en: "AI Captain" },
    bio: { tr: "", en: "" },
  },
  {
    id: "guney-duzgun",
    name: "Güney DÜZGÜN",
    image: "/team/guney-duzgun.png",
    role: { tr: "Aviyonik Ekip Üyesi", en: "Avionics Team Member" },
    bio: { tr: "", en: "" },
  },
  {
    id: "bugra-doyranli",
    name: "Buğra DOYRANLI",
    image: "/team/bugra-doyranli.png",
    role: { tr: "Yazılım Ekip Üyesi", en: "Software Team Member" },
    bio: { tr: "", en: "" },
  },
  {
    id: "hilal-coskun",
    name: "Hilal COŞKUN",
    image: "/team/hilal-coskun.png",
    role: { tr: "Aviyonik Ekip Üyesi", en: "Avionics Team Member" },
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
    id: "mehmetalp-sancakceken",
    name: "Mehmetalp SANCAKÇEKEN",
    image: "/team/mehmetalp-sancakceken.png",
    role: { tr: "Yazılım Ekip Üyesi ve Pilot", en: "Software Team Member & Pilot" },
    bio: { tr: "", en: "" },
  },
  {
    id: "oyku-aylin-baytore",
    name: "Öykü Aylin BAYTÖRE",
    image: "/team/oyku-aylin-baytore.png",
    role: { tr: "Yönetim Ekip Üyesi", en: "Management Team Member" },
    bio: { tr: "", en: "" },
  },
  {
    id: "merve-keziban-zerdali",
    name: "Merve Keziban ZERDALİ",
    image: "/team/merve-keziban-zerdali.png",
    role: { tr: "Aviyonik Ekip Üyesi", en: "Avionics Team Member" },
    bio: { tr: "", en: "" },
  },
  {
    id: "eren-cakar",
    name: "Eren ÇAKAR",
    image: "/team/erencakar.png",
    role: { tr: "Yazılım Ekip Üyesi", en: "Software Team Member" },
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
    id: "emir-kalfa",
    name: "Muhammet Emir KALFA",
    image: "/team/emir-kalfa.png",
    role: { tr: "Aviyonik Ekip Üyesi", en: "Avionics Team Member" },
    bio: { tr: "", en: "" },
  },
  {
    id: "muhammet-akin-avci",
    name: "Muhammet Akın AVCI",
    role: { tr: "Mekanik Ekip Üyesi ve GCS", en: "Mechanical Team Member & GCS" },
    bio: { tr: "", en: "" },
  },
];
