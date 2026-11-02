export interface ProjectTranslation {
  title: string;
  description: string;
  longDescription: string;
  features: string[];
}

export interface Project {
  slug: string;
  icon: string;
  image?: string;
  gallery?: string[];
  translations: {
    tr: ProjectTranslation;
    en: ProjectTranslation;
  };
}

export const projects: Project[] = [
  {
    slug: "warscope",
    icon: "Globe",
    image: "/projects/warscope.webp",
    gallery: ["/projects/warscope-2.webp", "/projects/warscope-3.webp", "/projects/warscope-4.webp"],
    translations: {
      tr: {
        title: "Warscope",
        description: "Dünya genelindeki savaş ve kriz verilerini gerçek zamanlı analiz edip harita üzerinde görselleştiren web tabanlı platform.",
        longDescription: "Warscope, dünya genelindeki savaş ve kriz verilerini gerçek zamanlı olarak analiz edip harita üzerinde görselleştiren web tabanlı bir platformdur. Sistem; çatışma bölgeleri, insani krizler ve güncel olaylarla ilgili verileri kullanıcıya anlaşılır ve interaktif bir şekilde sunmayı amaçlar. Proje, sosyal farkındalık oluşturma ve veri odaklı analiz sağlama amacıyla geliştirilmiştir. TEKNOFEST Şampiyonlar Ligi'nde birincilik elde eden takımın öne çıkan projelerinden biridir.",
        features: [
          "TEKNOFEST 2024 Şampiyonlar Ligi Birincisi",
          "Gerçek zamanlı veri görselleştirme",
          "Dünya haritası entegrasyonu",
          "Kriz ve savaş analizi",
          "Web tabanlı arayüz",
          "Sosyal farkındalık odaklı yapı",
        ],
      },
      en: {
        title: "Warscope",
        description: "Web-based platform that analyzes and visualizes real-time war and crisis data on a global map.",
        longDescription: "Warscope is a web-based platform that analyzes and visualizes real-time war and crisis data on a global map. The system aims to present data about conflict zones, humanitarian crises, and current events to users in an understandable and interactive way. The project was developed to create social awareness and provide data-driven analysis. It is one of the standout projects from the team that won first place in the TEKNOFEST Champions League.",
        features: [
          "Winner, TEKNOFEST 2024 Champions League",
          "Real-time data visualization",
          "World map integration",
          "Crisis and war analysis",
          "Web-based interface",
          "Social awareness-driven structure",
        ],
      },
    },
  },
  {
    slug: "polis-drone-sistemi",
    icon: "Shield",
    image: "/projects/polis-drone.webp",
    translations: {
      tr: {
        title: "Polis Drone Sistemi",
        description: "Güvenlik güçlerine saha desteği sağlayan, yapay zeka destekli gelişmiş insansız hava aracı çözümü.",
        longDescription: "Polis Drone Sistemi, güvenlik güçlerine saha desteği sağlamak amacıyla geliştirilen gelişmiş bir insansız hava aracı çözümüdür. Sistem; canlı görüntü aktarımı, plaka tanıma, kişi sayma ve eşkal tespiti gibi yapay zeka destekli özelliklere sahiptir. Drone platformu, geniş alanlarda hızlı gözlem ve analiz yapabilmesi sayesinde operasyonel süreçlerde etkin kullanım hedeflenerek tasarlanmıştır.",
        features: [
          "Canlı görüntü aktarımı",
          "Yapay zeka destekli analiz",
          "Plaka tanıma sistemi",
          "Kişi ve nesne tespiti",
          "Güvenlik odaklı kullanım senaryoları",
        ],
      },
      en: {
        title: "Police Drone System",
        description: "AI-powered advanced UAV solution providing field support to security forces.",
        longDescription: "The Police Drone System is an advanced unmanned aerial vehicle solution developed to provide field support to security forces. The system features AI-powered capabilities such as live image transmission, license plate recognition, person counting, and profile detection. The drone platform is designed for effective use in operational processes through rapid observation and analysis across large areas.",
        features: [
          "Live image transmission",
          "AI-powered analysis",
          "License plate recognition system",
          "Person and object detection",
          "Security-focused use cases",
        ],
      },
    },
  },
  {
    slug: "f-rone-iha",
    icon: "Flame",
    image: "/projects/f-rone.webp",
    translations: {
      tr: {
        title: "F-Rone İHA Sistemi",
        description: "Yangın ve afet bölgelerinde kullanılan, 3D haritalama ve yangın koordinatı tespiti yapabilen otonom insansız hava aracı.",
        longDescription: "F-Rone, özellikle yangın ve afet bölgelerinde kullanılmak üzere geliştirilen otonom insansız hava aracı sistemidir. Sistem, afet alanlarının üç boyutlu haritasını oluşturabilir ve görüntü işleme algoritmaları sayesinde yangın koordinatlarını anlık olarak tespit edebilir. Afet yönetim süreçlerinde hızlı analiz ve koordinasyon desteği sunmayı hedefleyen proje, otonom uçuş yetenekleriyle dikkat çekmektedir.",
        features: [
          "3D haritalama sistemi",
          "Yangın koordinatı tespiti",
          "Görüntü işleme teknolojileri",
          "Otonom uçuş desteği",
          "Afet yönetimi odaklı kullanım",
        ],
      },
      en: {
        title: "F-Rone UAV System",
        description: "Autonomous unmanned aerial vehicle used in fire and disaster zones, capable of 3D mapping and fire coordinate detection.",
        longDescription: "F-Rone is an autonomous unmanned aerial vehicle system developed for use in fire and disaster zones. The system can create three-dimensional maps of disaster areas and instantly detect fire coordinates through image processing algorithms. Aimed at providing rapid analysis and coordination support in disaster management processes, the project stands out with its autonomous flight capabilities.",
        features: [
          "3D mapping system",
          "Fire coordinate detection",
          "Image processing technologies",
          "Autonomous flight support",
          "Disaster management-focused use",
        ],
      },
    },
  },
  {
    slug: "t-rone",
    icon: "Cpu",
    image: "/projects/t-rone.webp",
    translations: {
      tr: {
        title: "T-Rone",
        description: "Otonom kontrol sistemleri ve akıllı hareket mekanizmasıyla donatılmış, inovasyon yarışmalarında finalist olan sistem.",
        longDescription: "T-Rone, Merkutech ekibi tarafından geliştirilen ve inovasyon yarışmalarında finalist olan otonom sistem projesidir. Proje; akıllı kontrol sistemleri, otonom hareket kabiliyeti ve gelişmiş mühendislik yaklaşımı üzerine kurulmuştur.",
        features: [
          "Otonom kontrol sistemleri",
          "Akıllı hareket mekanizması",
          "Yarışma odaklı mühendislik yaklaşımı",
          "Yenilikçi teknoloji altyapısı",
        ],
      },
      en: {
        title: "T-Rone",
        description: "System equipped with autonomous control systems and intelligent movement mechanism, finalist in innovation competitions.",
        longDescription: "T-Rone is an autonomous system project developed by the Merkutech team, finalist in innovation competitions. The project is built on intelligent control systems, autonomous movement capabilities, and an advanced engineering approach.",
        features: [
          "Autonomous control systems",
          "Intelligent movement mechanism",
          "Competition-driven engineering approach",
          "Innovative technology infrastructure",
        ],
      },
    },
  },
  {
    slug: "aquavista",
    icon: "Waves",
    image: "/projects/aquavista.webp",
    translations: {
      tr: {
        title: "AquaVista",
        description: "Su altı ekosistemlerini keşfetmek ve korumak için drone tabanlı 3B haritalama ve sanal müze teknolojisi.",
        longDescription: "AquaVista, su altı ekosistemlerinin keşfedilmesi ve korunması için drone tabanlı üç boyutlu haritalama ve sanal müze teknolojisi geliştiren projemizdir. Teknofest KKTC 2025 Turizm Teknolojileri kategorisinde ikincilik kazandı.",
        features: [
          "Teknofest KKTC 2025 Turizm Teknolojileri İkincisi",
          "Drone tabanlı 3B haritalama",
          "Sanal müze teknolojisi",
          "Su altı ekosistemlerinin korunması",
        ],
      },
      en: {
        title: "AquaVista",
        description: "Drone-based 3D mapping and virtual museum technology for exploring and protecting underwater ecosystems.",
        longDescription: "AquaVista develops drone-based 3D mapping and virtual museum technology for exploring and protecting underwater ecosystems. It won second place in the Tourism Technologies category at Teknofest TRNC 2025.",
        features: [
          "Runner-up, Teknofest TRNC 2025 Tourism Technologies",
          "Drone-based 3D mapping",
          "Virtual museum technology",
          "Protecting underwater ecosystems",
        ],
      },
    },
  },
  {
    slug: "biodivmap",
    icon: "Leaf",
    image: "/projects/biodivmap.webp",
    translations: {
      tr: {
        title: "BioDivMap",
        description: "Koruma alanlarındaki biyoçeşitliliği izlemek ve modellemek için geliştirilen drone tabanlı proje.",
        longDescription: "BioDivMap, koruma alanlarındaki biyoçeşitliliği izlemek ve modellemek için geliştirdiğimiz drone tabanlı projedir. 5G haberleşme, gerçek zamanlı görüntü işleme ve tam otonom uçuş gibi drone teknolojilerini veri analitiğiyle birleştirir. Teknofest KKTC 2025 finalistidir.",
        features: [
          "Teknofest KKTC 2025 Finalisti",
          "5G haberleşme",
          "Gerçek zamanlı görüntü işleme",
          "Tam otonom uçuş",
        ],
      },
      en: {
        title: "BioDivMap",
        description: "A drone-based project for monitoring and modelling biodiversity in protected areas.",
        longDescription: "BioDivMap is our drone-based project for monitoring and modelling biodiversity in protected areas. It combines 5G communication, real-time image processing and fully autonomous flight with data analytics. It was a finalist at Teknofest TRNC 2025.",
        features: [
          "Finalist, Teknofest TRNC 2025",
          "5G communication",
          "Real-time image processing",
          "Fully autonomous flight",
        ],
      },
    },
  },
  {
    slug: "tespit-ve-mudahale-dronu",
    icon: "Flame",
    image: "/projects/tespit-dronu.webp",
    translations: {
      tr: {
        title: "Tespit ve Müdahale Dronu",
        description: "Yangını erken tespit edip analiz eden, taşıdığı söndürücü kapsüllerle küçük yangınlara anında müdahale eden dron. Takımın ilk projesi.",
        longDescription: "Takımımızın ilk projesi olan bu dron, yangını erken tespit edip analiz eder ve üzerinde taşıdığı kimyevi söndürücü içerikli kapsülleri yangına bırakarak çok küçük çaplı yangınları tespit edildiği anda söndürebilir. Başakşehir Living Lab 10. İnovasyon Yarışması'nın üniversite kategorisinde birincilik kazandı.",
        features: [
          "10. İnovasyon Yarışması Üniversite Kategorisi Birincisi",
          "Erken yangın tespiti ve analizi",
          "Söndürücü kapsül bırakma",
        ],
      },
      en: {
        title: "Detection and Intervention Drone",
        description: "A drone that detects and analyses fires early and responds to small fires at once with extinguisher capsules. The team's first project.",
        longDescription: "Our team's first project, this drone detects and analyses fires early, then drops the chemical extinguisher capsules it carries to put out very small fires as soon as they are found. It won first place in the university category of the 10th Innovation Competition at Başakşehir Living Lab.",
        features: [
          "Winner, 10th Innovation Competition, University Category",
          "Early fire detection and analysis",
          "Extinguisher capsule release",
        ],
      },
    },
  },
  {
    slug: "insanlik-yarina-teknoloji",
    icon: "Heart",
    image: "/projects/insanlik.webp",
    translations: {
      tr: {
        title: "İnsanlık Yararına Teknoloji",
        description: "Afet yönetimi, veri analizi ve otonom sistemler alanlarında sosyal fayda odaklı teknoloji projeleri.",
        longDescription: "Merkutech ekibi, insanlık yararına teknoloji yaklaşımıyla çeşitli sosyal fayda projeleri geliştirmektedir. Bu projeler; afet yönetimi, veri analizi, görüntü işleme ve otonom sistemler gibi alanlarda çözümler üretmeyi hedeflemektedir. Takım, özellikle TEKNOFEST ve benzeri teknoloji yarışmalarında geliştirdiği yenilikçi projelerle çalışmalarını sürdürmektedir.",
        features: [
          "Yapay zeka destekli sistemler",
          "Sosyal fayda odaklı yaklaşım",
          "Afet ve kriz yönetimi çözümleri",
          "Otonom teknolojiler",
          "Yenilikçi mühendislik çalışmaları",
        ],
      },
      en: {
        title: "Technology for Humanity",
        description: "Social benefit-focused technology projects in disaster management, data analysis, and autonomous systems.",
        longDescription: "The Merkutech team develops various social benefit projects with a technology-for-humanity approach. These projects aim to produce solutions in areas such as disaster management, data analysis, image processing, and autonomous systems. The team continues its work with innovative projects, especially in TEKNOFEST and similar technology competitions.",
        features: [
          "AI-powered systems",
          "Social benefit-focused approach",
          "Disaster and crisis management solutions",
          "Autonomous technologies",
          "Innovative engineering work",
        ],
      },
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
