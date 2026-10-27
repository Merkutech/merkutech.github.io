export interface Sponsor {
  name: string;
  url?: string;
  logo?: string;
  /* Logo genişlik/yükseklik oranı — logolar eşit alan kaplasın diye */
  logoRatio?: number;
}

export const sponsors: Sponsor[] = [
  { name: "İstanbul Arel Üniversitesi", url: "https://www.arel.edu.tr/", logo: "/sponsors/arel.png", logoRatio: 480 / 466 },
  { name: "MCT Technic", url: "https://mcttechnic.com/", logo: "/sponsors/mct-technic.png", logoRatio: 480 / 360 },
  { name: "Würth", url: "https://www.wurth.com.tr/", logo: "/sponsors/wurth.png", logoRatio: 480 / 103 },
  { name: "Ekom", url: "https://www.e-kom.com/", logo: "/sponsors/ekom.png", logoRatio: 480 / 201 },
  { name: "Robomer", url: "https://robomer.com/", logo: "/sponsors/robomer.png", logoRatio: 480 / 157 },
];
