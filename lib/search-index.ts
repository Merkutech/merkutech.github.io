export interface SearchEntry {
  href: string;
  title: { tr: string; en: string };
  description: { tr: string; en: string };
  content: { tr: string; en: string };
}

export const searchIndex: SearchEntry[] = [
  {
    href: "/",
    title: { tr: "Ana Sayfa", en: "Home" },
    description: {
      tr: "İstanbul Arel Üniversitesi Robotik ve Teknoloji Kulübü",
      en: "Istanbul Arel University Robotics and Technology Club",
    },
    content: {
      tr: "Robotik otonom sistemler drone teknolojileri yapay zeka projeler Teknofest uluslararası yarışmalar ROS OpenCV Python TensorFlow PyTorch Computer Vision MAVLink DroneKit Swarm AI STM32 Arduino Embedded C SolidWorks AutoCAD Gazebo robotik projeler gömülü sistemler 3D modelleme çalışma alanları süreç keşfet öğren üret başarılar Teknofest Şampiyonlar Ligi Şampiyonu SUAS AUVSI",
      en: "Robotics autonomous systems drone technologies artificial intelligence projects Teknofest international competitions ROS OpenCV Python TensorFlow PyTorch Computer Vision MAVLink DroneKit Swarm AI STM32 Arduino Embedded C SolidWorks AutoCAD Gazebo robotics projects embedded systems 3D modeling work areas process explore learn build achievements Teknofest Champions League Champion SUAS AUVSI",
    },
  },
  {
    href: "/projelerimiz",
    title: { tr: "Projelerimiz", en: "Our Projects" },
    description: {
      tr: "Merkutech ekibinin geliştirdiği projeler",
      en: "Projects developed by Merkutech team",
    },
    content: {
      tr: "Warscope Polis Drone Sistemi F-Rone İHA T-Rone İnsanlık Yararına Teknoloji gerçek zamanlı veri görselleştirme kriz analizi yapay zeka plaka tanıma yangın koordinatı 3D haritalama otonom kontrol sistemleri afet yönetimi sosyal fayda",
      en: "Warscope Police Drone System F-Rone UAV T-Rone Technology for Humanity real-time data visualization crisis analysis AI license plate recognition fire coordinate 3D mapping autonomous control systems disaster management social benefit",
    },
  },
  {
    href: "/iletisim",
    title: { tr: "İletişim", en: "Contact" },
    description: {
      tr: "Merkutech iletişim kanalları ve sosyal medya hesapları",
      en: "Merkutech contact channels and social media accounts",
    },
    content: {
      tr: "iletişim sosyal medya Instagram YouTube LinkedIn GitHub WhatsApp Google Form başvuru takım Arel Savunma Sanayi",
      en: "contact social media Instagram YouTube LinkedIn GitHub WhatsApp Google Form application team Arel Defense Industry",
    },
  },
  {
    href: "/team",
    title: { tr: "Ekibimiz", en: "Our Team" },
    description: {
      tr: "Merkutech takım üyeleri",
      en: "Merkutech team members",
    },
    content: {
      tr: "takım üyeler ekip üyeleri roller yazılım mekanik aviyonik pilot görev planlama bilgisayarlı görü yer istasyonu",
      en: "team members crew roles software mechanical avionics pilot mission planning computer vision ground station",
    },
  },
  {
    href: "/suas-2026",
    title: { tr: "SUAS 2026 Aracımız", en: "SUAS 2026 Vehicle" },
    description: {
      tr: "SUAS 2026 yarışması için geliştirilen insansız hava aracı tasarım ve dokümantasyonu",
      en: "Unmanned aerial vehicle design and documentation developed for SUAS 2026 competition",
    },
    content: {
      tr: "SUAS 2026 insansız hava aracı İHA UAV tasarım dokümantasyon teknik özellikler bileşenler test süreçleri uçuş kontrol otonom navigasyon görüntü işleme payload faydalı yük aerodinamik gövde kanat iniş takımı batarya motor pervane aviyonik otopilot yer kontrol istasyonu telemetri haberleşme sensörler GPS IMU kamera LIDAR radyo frekans güvenlik prosedürler montaj entegrasyon kalibrasyon uçuş testi performans menzil irtifa hız dayanıklılık",
      en: "SUAS 2026 unmanned aerial vehicle UAV design documentation technical specifications components testing processes flight control autonomous navigation image processing payload aerodynamics airframe wing landing gear battery motor propeller avionics autopilot ground control station telemetry communication sensors GPS IMU camera LIDAR radio frequency safety procedures assembly integration calibration flight test performance range altitude speed endurance",
    },
  },
  {
    href: "/blog",
    title: { tr: "Blog / Build Log", en: "Blog / Build Log" },
    description: {
      tr: "SUAS 2026 için geliştirme süreci kayıtları ve güncellemeler",
      en: "Development process logs and updates for SUAS 2026",
    },
    content: {
      tr: "blog build log geliştirme süreci günlük kayıtlar ilerleme güncellemeler SUAS 2026 yapım aşamaları test entegrasyon montaj haftalık rapor",
      en: "blog build log development process daily records progress updates SUAS 2026 build phases testing integration assembly weekly report",
    },
  },
];

export const defaultSearchEntries: SearchEntry[] = [
  {
    href: "/projelerimiz/warscope",
    title: { tr: "Warscope", en: "Warscope" },
    description: {
      tr: "Gerçek zamanlı savaş ve kriz verisi görselleştirme platformu",
      en: "Real-time war and crisis data visualization platform",
    },
    content: {
      tr: "Warscope dünya haritası kriz savaş analizi gerçek zamanlı veri TEKNOFEST Şampiyonlar Ligi birincilik web tabanlı",
      en: "Warscope world map crisis war analysis real-time data TEKNOFEST Champions League first place web based",
    },
  },
  {
    href: "/projelerimiz/polis-drone-sistemi",
    title: { tr: "Polis Drone Sistemi", en: "Police Drone System" },
    description: {
      tr: "Yapay zeka destekli güvenlik İHA çözümü",
      en: "AI-powered security UAV solution",
    },
    content: {
      tr: "polis drone güvenlik yapay zeka plaka tanıma canlı görüntü aktarımı kişi sayma eşkal tespiti İHA",
      en: "police drone security AI license plate recognition live image transmission person counting profile detection UAV",
    },
  },
  {
    href: "/projelerimiz/f-rone-iha",
    title: { tr: "F-Rone İHA", en: "F-Rone UAV" },
    description: {
      tr: "Yangın ve afet bölgeleri için otonom İHA",
      en: "Autonomous UAV for fire and disaster zones",
    },
    content: {
      tr: "F-Rone yangın afet 3D haritalama yangın koordinatı görüntü işleme otonom uçuş İHA",
      en: "F-Rone fire disaster 3D mapping fire coordinate image processing autonomous flight UAV",
    },
  },
  {
    href: "/projelerimiz/t-rone",
    title: { tr: "T-Rone", en: "T-Rone" },
    description: {
      tr: "Otonom kontrol sistemleri ve akıllı hareket mekanizması",
      en: "Autonomous control systems and intelligent movement mechanism",
    },
    content: {
      tr: "T-Rone otonom kontrol sistemleri akıllı hareket mekanizması inovasyon yarışmaları finalist",
      en: "T-Rone autonomous control systems intelligent movement mechanism innovation competitions finalist",
    },
  },
  {
    href: "/projelerimiz/insanlik-yarina-teknoloji",
    title: { tr: "İnsanlık Yararına Teknoloji", en: "Technology for Humanity" },
    description: {
      tr: "Sosyal fayda odaklı teknoloji projeleri",
      en: "Social benefit-focused technology projects",
    },
    content: {
      tr: "insanlık yararına teknoloji sosyal fayda afet yönetimi veri analizi yapay zeka otonom sistemler TEKNOFEST",
      en: "technology for humanity social benefit disaster management data analysis AI autonomous systems TEKNOFEST",
    },
  },
];

export function getAllSearchEntries(): SearchEntry[] {
  return [...searchIndex, ...defaultSearchEntries];
}
