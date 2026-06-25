export type Language = "tr" | "en";

export const translations = {
  tr: {
    nav: {
      home: "Ana Sayfa",
      projects: "Projelerimiz",
      suas: "SUAS 2026",
      team: "Ekibimiz",
      blog: "Blog",
      contact: "İletişim",
    },
    cta: {
      apply: "Takıma Başvur",
    },
    home: {
      brand: "MCT Sensor Merkutech",
      subtitle: "İstanbul Arel Üniversitesi Robotik ve Teknoloji Kulübü",
      description:
        "Robotik, otonom sistemler, drone teknolojileri ve yapay zeka alanlarında projeler üreten; Teknofest ve uluslararası yarışmalara katılan bir öğrenci topluluğu.",
      heroCta: {
        projects: "Projelerimiz",
        contact: "İletişim",
      },
      marquee: [
        "🏆 Teknofest Şampiyonlar Ligi Şampiyonu",
        "🥈 Teknofest 2025 Turizm",
        "🥉 Teknofest 2024 İYT",
        "🎖️ AUVSI SUAS 2024 — USA",
      ],
      about: {
        label: "Hakkımızda",
        title: "Biz Kimiz?",
        p1: "Merkutech, İstanbul Arel Üniversitesi bünyesinde faaliyet gösteren bir robotik ve teknoloji kulübüdür. Öğrencilerin teorik bilgiyi pratiğe dökmesi, yenilikçi projeler geliştirmesi ve teknoloji dünyasında kendini kanıtlaması için gereken ortamı ve kaynakları sunuyoruz.",
        p2: "Teknofest ve uluslararası robotik yarışmalarına aktif olarak katılıyor, otonom sistemler, robotik manipülatörler, drone teknolojileri ve yapay zeka alanlarında projeler üretiyoruz.",
        achievements: "Sahip olduğumuz başarılar:",
        achievementsList: [
          "🏆 Teknofest Şampiyonlar Ligi Şampiyonu",
          "🥈 Teknofest 2025 Turizm İkincisi",
          "🥉 Teknofest 2024 İnsansız Yerleşim Takımı Üçüncüsü",
          "🎖️ AUVSI SUAS 2024 - USA",
        ],
      },
      projects: {
        label: "Projelerimiz",
        title: "Öne Çıkanlar",
        viewAll: "Tümünü Gör",
      },
      areas: {
        label: "Çalışma Alanları",
        title: "Neler Yapıyoruz?",
        items: [
          { num: "01", title: "Robotik Projeler", desc: "ROS tabanlı otonom sistemler, sensör füzyonu ve gerçek zamanlı kontrol algoritmaları ile robotlar geliştiriyoruz.", tags: ["ROS", "OpenCV", "Python"] },
          { num: "02", title: "Yapay Zeka", desc: "Derin öğrenme ve bilgisayarlı görü ile robotlara karar verme yetisi kazandırıyoruz.", tags: ["TensorFlow", "PyTorch", "Computer Vision"] },
          { num: "03", title: "Drone Teknolojisi", desc: "Sürü algoritmaları, otonom uçuş ve çoklu drone koordinasyonu çalışmaları yürütüyoruz.", tags: ["MAVLink", "DroneKit", "Swarm AI"] },
          { num: "04", title: "Gömülü Sistemler", desc: "Mikrodenetleyiciler, PCB tasarımı ve gerçek zamanlı gömülü yazılım geliştirme.", tags: ["STM32", "Arduino", "Embedded C"] },
          { num: "05", title: "3D Modelleme", desc: "CAD, simülasyon ve hızlı prototipleme ile fikirden ürüne geçiş süreci.", tags: ["SolidWorks", "AutoCAD", "Gazebo"] },
          { num: "06", title: "Yarışmalar", desc: "Teknofest ve uluslararası robotik yarışmalarına aktif katılım ve hazırlık.", tags: ["Teknofest", "Robotaksi", "Uluslararası"] },
        ],
      },
      process: {
        label: "Nasıl Başlarız",
        title: "Süreç",
        steps: [
          { num: "01", title: "Keşfet", desc: "Kulübümüzü ziyaret et, mevcut projeleri gör ve hangi alan sana uygun keşfet." },
          { num: "02", title: "Öğren", desc: "Atölye çalışmaları, eğitimler ve mentorluk ile yeni beceriler kazan." },
          { num: "03", title: "Üret", desc: "Kendi projeni başlat veya mevcut bir ekibe katıl. Beraber üret, beraber büyü." },
        ],
      },
    },
    sponsors: {
      label: "Sponsorlarımız",
      title: "Bize Destek Verenler",
      description: "Çalışmalarımızı destekleyen kurum ve kuruluşlar.",
    },
    projects: {
      label: "Merkutech",
      title: "Projeler",
      detail: "Detayları İncele",
    },
    contact: {
      label: "Merkutech",
      title: "Bize Ulaşın",
      description: "Tüm sosyal medya hesaplarımız ve iletişim kanallarımız burada. Takip et, bize katıl.",
      links: [
        { name: "Takıma Başvur", handle: "Google Form" },
        { name: "Arel Savunma Sanayi Kulübü WhatsApp Grubu", handle: "WhatsApp Community" },
        { name: "Merkutech Instagram", handle: "@merkutech" },
        { name: "Arel Savunma Sanayi Kulübü Instagram", handle: "@arelsavunma" },
        { name: "Merkutech YouTube", handle: "Merkutech" },
        { name: "Merkutech LinkedIn", handle: "Merkutech" },
        { name: "Merkutech GitHub", handle: "Merkutech" },
      ],
    },
    footer: {
      brand: "MCT SENSOR Merkutech",
      apply: "Takım Başvurusu",
      whatsapp: "Arel Savunma Sanayi WhatsApp",
      instagram: "Arel Savunma Sanayi Instagram",
      copyright: "©",
    },
    notFound: {
      title: "Sayfa Bulunamadı",
      description: "Aradığın sayfa burada değil. Ana sayfaya dönmek ister misin?",
      home: "Ana Sayfa",
      back: "Geri Dön",
    },
    language: {
      tr: "Türkçe",
      en: "English",
    },
  },
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      suas: "SUAS 2026",
      team: "Our Team",
      blog: "Blog",
      contact: "Contact",
    },
    cta: {
      apply: "Apply to Team",
    },
    home: {
      brand: "MCT Sensor Merkutech",
      subtitle: "Istanbul Arel University Robotics and Technology Club",
      description:
        "A student community producing projects in robotics, autonomous systems, drone technologies and artificial intelligence; participating in Teknofest and international competitions.",
      heroCta: {
        projects: "Projects",
        contact: "Contact",
      },
      marquee: [
        "🏆 Teknofest Champions League Champion",
        "🥈 Teknofest 2025 Tourism",
        "🥉 Teknofest 2024 IYT",
        "🎖️ AUVSI SUAS 2024 — USA",
      ],
      about: {
        label: "About Us",
        title: "Who We Are?",
        p1: "Merkutech is a robotics and technology club operating under Istanbul Arel University. We provide the environment and resources students need to put theoretical knowledge into practice, develop innovative projects, and prove themselves in the technology world.",
        p2: "We actively participate in Teknofest and national/international robotics competitions, producing projects in autonomous systems, robotic manipulators, drone technologies, and artificial intelligence.",
        achievements: "Our achievements:",
        achievementsList: [
          "🏆 Teknofest Champions League Champion",
          "🥈 Teknofest 2025 Tourism Runner-up",
          "🥉 Teknofest 2024 Unmanned Settlement Team Third",
          "🎖️ AUVSI SUAS 2024 - USA",
        ],
      },
      projects: {
        label: "Our Projects",
        title: "Featured",
        viewAll: "View All",
      },
      areas: {
        label: "Work Areas",
        title: "What We Do?",
        items: [
          { num: "01", title: "Robotics Projects", desc: "We develop robots with ROS-based autonomous systems, sensor fusion and real-time control algorithms.", tags: ["ROS", "OpenCV", "Python"] },
          { num: "02", title: "Artificial Intelligence", desc: "We give robots the ability to make decisions with deep learning and computer vision.", tags: ["TensorFlow", "PyTorch", "Computer Vision"] },
          { num: "03", title: "Drone Technology", desc: "We work on swarm algorithms, autonomous flight and multi-drone coordination.", tags: ["MAVLink", "DroneKit", "Swarm AI"] },
          { num: "04", title: "Embedded Systems", desc: "Microcontrollers, PCB design and real-time embedded software development.", tags: ["STM32", "Arduino", "Embedded C"] },
          { num: "05", title: "3D Modeling", desc: "From idea to product with CAD, simulation and rapid prototyping.", tags: ["SolidWorks", "AutoCAD", "Gazebo"] },
          { num: "06", title: "Competitions", desc: "Active participation and preparation for Teknofest and international robotics competitions.", tags: ["Teknofest", "Robotaxi", "International"] },
        ],
      },
      process: {
        label: "How We Start",
        title: "Process",
        steps: [
          { num: "01", title: "Explore", desc: "Visit our club, see current projects and discover which area suits you." },
          { num: "02", title: "Learn", desc: "Gain new skills through workshops, trainings and mentoring." },
          { num: "03", title: "Build", desc: "Start your own project or join an existing team. Build together, grow together." },
        ],
      },
    },
    sponsors: {
      label: "Our Sponsors",
      title: "Our Supporters",
      description: "Institutions and organizations that support our work.",
    },
    projects: {
      label: "Merkutech",
      title: "Projects",
      detail: "View Details",
    },
    contact: {
      label: "Merkutech",
      title: "Contact Us",
      description: "All our social media accounts and communication channels are here. Follow us, join us.",
      links: [
        { name: "Apply to Team", handle: "Google Form" },
        { name: "Arel Defense Industry Club WhatsApp Group", handle: "WhatsApp Community" },
        { name: "Merkutech Instagram", handle: "@merkutech" },
        { name: "Arel Defense Industry Club Instagram", handle: "@arelsavunma" },
        { name: "Merkutech YouTube", handle: "Merkutech" },
        { name: "Merkutech LinkedIn", handle: "Merkutech" },
        { name: "Merkutech GitHub", handle: "Merkutech" },
      ],
    },
    footer: {
      brand: "MCT SENSOR Merkutech",
      apply: "Team Application",
      whatsapp: "Arel Defense Industry WhatsApp",
      instagram: "Arel Defense Industry Instagram",
      copyright: "©",
    },
    notFound: {
      title: "Page Not Found",
      description: "The page you're looking for isn't here. Would you like to return to the home page?",
      home: "Home",
      back: "Go Back",
    },
    language: {
      tr: "Türkçe",
      en: "English",
    },
  },
} as const;

export type Translations = (typeof translations)["tr"];
