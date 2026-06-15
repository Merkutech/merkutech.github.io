export interface Sponsor {
  name: string;
  url?: string;
  logo?: string;
}

export const sponsors: Sponsor[] = [
  { name: "İstanbul Arel Üniversitesi", url: "https://www.arel.edu.tr/", logo: "/4.png" },
  { name: "MCT Technic", url: "https://mcttechnic.com/", logo: "/3.png" },
  { name: "Demsay Elektronik", url: "https://demsay.com/", logo: "/1.png" },
  { name: "Robomer", url: "https://robomer.com/", logo: "/2.png" },
];
