export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  icon: string;
  features: string[];
}

export const projects: Project[] = [
  {
    slug: "warscope",
    title: "Warscope",
    description: "Dünya genelindeki savaş ve kriz verilerini gerçek zamanlı analiz edip harita üzerinde görselleştiren web tabanlı platform.",
    longDescription: "Warscope, dünya genelindeki savaş ve kriz verilerini gerçek zamanlı olarak analiz edip harita üzerinde görselleştiren web tabanlı bir platformdur. Sistem; çatışma bölgeleri, insani krizler ve güncel olaylarla ilgili verileri kullanıcıya anlaşılır ve interaktif bir şekilde sunmayı amaçlar. Proje, sosyal farkındalık oluşturma ve veri odaklı analiz sağlama amacıyla geliştirilmiştir. TEKNOFEST Şampiyonlar Ligi'nde birincilik elde eden takımın öne çıkan projelerinden biridir.",
    image: "https://arel.edu.tr/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-07-at-09.24.16.jpeg",
    icon: "Globe",
    features: [
      "Gerçek zamanlı veri görselleştirme",
      "Dünya haritası entegrasyonu",
      "Kriz ve savaş analizi",
      "Web tabanlı arayüz",
      "Sosyal farkındalık odaklı yapı",
    ],
  },
  {
    slug: "polis-drone-sistemi",
    title: "Polis Drone Sistemi",
    description: "Güvenlik güçlerine saha desteği sağlayan, yapay zeka destekli gelişmiş insansız hava aracı çözümü.",
    longDescription: "Polis Drone Sistemi, güvenlik güçlerine saha desteği sağlamak amacıyla geliştirilen gelişmiş bir insansız hava aracı çözümüdür. Sistem; canlı görüntü aktarımı, plaka tanıma, kişi sayma ve eşkal tespiti gibi yapay zeka destekli özelliklere sahiptir. Drone platformu, geniş alanlarda hızlı gözlem ve analiz yapabilmesi sayesinde operasyonel süreçlerde etkin kullanım hedeflenerek tasarlanmıştır.",
    image: "https://mcttechnic.com/wp-content/uploads/2024/12/merkutech-teknofest.webp",
    icon: "Shield",
    features: [
      "Canlı görüntü aktarımı",
      "Yapay zeka destekli analiz",
      "Plaka tanıma sistemi",
      "Kişi ve nesne tespiti",
      "Güvenlik odaklı kullanım senaryoları",
    ],
  },
  {
    slug: "f-rone-iha",
    title: "F-Rone İHA Sistemi",
    description: "Yangın ve afet bölgelerinde kullanılan, 3D haritalama ve yangın koordinatı tespiti yapabilen otonom insansız hava aracı.",
    longDescription: "F-Rone, özellikle yangın ve afet bölgelerinde kullanılmak üzere geliştirilen otonom insansız hava aracı sistemidir. Sistem, afet alanlarının üç boyutlu haritasını oluşturabilir ve görüntü işleme algoritmaları sayesinde yangın koordinatlarını anlık olarak tespit edebilir. Afet yönetim süreçlerinde hızlı analiz ve koordinasyon desteği sunmayı hedefleyen proje, otonom uçuş yetenekleriyle dikkat çekmektedir.",
    image: "https://www.aa.com.tr/uploads/userFiles/3c0477cc-1528-4d10-b3eb-d9ec28a91d64/eyl%C3%BCl%2F18%2F20250918_2_70818000_117163051.jpg",
    icon: "Flame",
    features: [
      "3D haritalama sistemi",
      "Yangın koordinatı tespiti",
      "Görüntü işleme teknolojileri",
      "Otonom uçuş desteği",
      "Afet yönetimi odaklı kullanım",
    ],
  },
  {
    slug: "t-rone",
    title: "T-Rone",
    description: "Otonom kontrol sistemleri ve akıllı hareket mekanizmasıyla donatılmış, inovasyon yarışmalarında finalist olan sistem.",
    longDescription: "T-Rone, Merkutech ekibi tarafından geliştirilen ve inovasyon yarışmalarında finalist olan otonom sistem projesidir. Proje; akıllı kontrol sistemleri, otonom hareket kabiliyeti ve gelişmiş mühendislik yaklaşımı üzerine kurulmuştur.",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=1200&q=80",
    icon: "Cpu",
    features: [
      "Otonom kontrol sistemleri",
      "Akıllı hareket mekanizması",
      "Yarışma odaklı mühendislik yaklaşımı",
      "Yenilikçi teknoloji altyapısı",
    ],
  },
  {
    slug: "insanlik-yarina-teknoloji",
    title: "İnsanlık Yararına Teknoloji",
    description: "Afet yönetimi, veri analizi ve otonom sistemler alanlarında sosyal fayda odaklı teknoloji projeleri.",
    longDescription: "Merkutech ekibi, insanlık yararına teknoloji yaklaşımıyla çeşitli sosyal fayda projeleri geliştirmektedir. Bu projeler; afet yönetimi, veri analizi, görüntü işleme ve otonom sistemler gibi alanlarda çözümler üretmeyi hedeflemektedir. Takım, özellikle TEKNOFEST ve benzeri teknoloji yarışmalarında geliştirdiği yenilikçi projelerle çalışmalarını sürdürmektedir.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    icon: "Heart",
    features: [
      "Yapay zeka destekli sistemler",
      "Sosyal fayda odaklı yaklaşım",
      "Afet ve kriz yönetimi çözümleri",
      "Otonom teknolojiler",
      "Yenilikçi mühendislik çalışmaları",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
