export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  status: "Aktif" | "Tamamlandı" | "Geliştirme";
  image: string;
  icon: string;
  team: string[];
  timeline: string;
}

export const projects: Project[] = [
  {
    slug: "otonom-robotaksi",
    title: "Otonom Robotaksi",
    description: "Teknofest Robotaksi Binek Otonom Araç Yarışması için geliştirilen tam otonom araç projesi. LIDAR, kamera ve yapay zeka ile çevre algılama.",
    longDescription: "Bu proje kapsamında tam otonom bir binek araç geliştirildi. ROS tabanlı yazılım mimarisi, LIDAR ve kamera sensör füzyonu, derin öğrenme tabanlı nesne tespiti ve yol planlama algoritmaları kullanıldı. Araç, gerçek zamanlı olarak çevresini algılayarak trafik kurallarına uygun şekilde otonom sürüş gerçekleştirebiliyor.",
    tags: ["ROS", "Python", "OpenCV", "LIDAR", "Deep Learning"],
    status: "Aktif",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    icon: "Bot",
    team: ["Ahmet Yılmaz", "Zeynep Kaya", "Mehmet Demir"],
    timeline: "2023 - Devam Ediyor"
  },
  {
    slug: "insansi-robot-kol",
    title: "İnsansı Robot Kol",
    description: "6 eksenli serbestlik derecesine sahip robotik kol. Görüntü işleme ile nesne tanıma ve manipülasyon yetenekleri.",
    longDescription: "6 eksenli serbestlik derecesine sahip robotik kol, endüstriyel ve araştırma amaçlı kullanım için tasarlandı. Computer Vision ile nesne tanıma, derin öğrenme tabanlı grasp planlama ve inverse kinematics hesaplamaları entegre edildi. Kol, hassas manipülasyon görevlerini yerine getirebiliyor.",
    tags: ["Inverse Kinematics", "Computer Vision", "C++", "ROS"],
    status: "Tamamlandı",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    icon: "Cpu",
    team: ["Burak Özdemir", "Selin Yıldız"],
    timeline: "2022 - 2024"
  },
  {
    slug: "akilli-ilac-dagitim",
    title: "Akıllı İlaç Dağıtım Sistemi",
    description: "Hastaneler için otonom ilaç ve malzeme taşıma robotu. RFID tabanlı envanter yönetimi ve otonom navigasyon.",
    longDescription: "Hastane ortamında otonom ilaç ve tıbbi malzeme taşıma için geliştirilen mobil robot. RFID tabanlı envanter takibi, otonom navigasyon ve asansör entegrasyonu özelliklerine sahip. MQTT protokolü üzerinden merkezi sistemle iletişim kuruyor.",
    tags: ["Arduino", "RFID", "IoT", "MQTT", "Autonomous Navigation"],
    status: "Aktif",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    icon: "CircuitBoard",
    team: ["Elif Şahin", "Mehmet Demir"],
    timeline: "2024 - Devam Ediyor"
  },
  {
    slug: "drone-surusu",
    title: "Drone Sürüsü",
    description: "Çoklu drone koordinasyonu ve sürü algoritmaları. Formasyon uçuşu ve ortak görev planlama sistemi.",
    longDescription: "Birden fazla drone'un eşzamanlı olarak koordineli uçuşunu sağlayan sürü algoritmaları geliştirildi. Formasyon uçuşu, görev paylaşımı ve gerçek zamanlı iletişim protokolleri üzerine çalışıldı. MAVLink protokolü ve DroneKit kütüphaneleri kullanıldı.",
    tags: ["DroneKit", "MAVLink", "Swarm AI", "Python"],
    status: "Geliştirme",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80",
    icon: "Radio",
    team: ["Ahmet Yılmaz", "Zeynep Kaya"],
    timeline: "2024 - Devam Ediyor"
  },
  {
    slug: "3d-yazici-kontrol",
    title: "3D Yazıcı Kontrol Sistemi",
    description: "Özel tasarım 3D yazıcı için geliştirilen kontrol yazılımı ve uzaktan izleme sistemi.",
    longDescription: "Özel tasarım bir 3D yazıcı için Marlin firmware üzerine kurulu özel kontrol yazılımı geliştirildi. Web tabanlı uzaktan izleme ve kontrol arayüzü, baskı önizleme ve hata tespiti özellikleri eklendi. WebSockets ile gerçek zamanlı veri akışı sağlandı.",
    tags: ["Marlin", "React", "Node.js", "WebSockets"],
    status: "Tamamlandı",
    image: "https://images.unsplash.com/photo-1631541909061-71e349d1f203?w=800&q=80",
    icon: "Layers",
    team: ["Burak Özdemir"],
    timeline: "2023 - 2024"
  },
  {
    slug: "cizgi-izleyen-robot",
    title: "Çizgi İzleyen Robot",
    description: "PID kontrol algoritmaları ile optimize edilmiş, sensör füzyonu kullanan yarışma robotu.",
    longDescription: "Yarışma kategorileri için tasarlanan yüksek hızlı çizgi izleyen robot. PID kontrol algoritmaları, sensör füzyonu ve adaptif hız kontrolü ile optimize edildi. Katıldığı yarışmalarda dereceler elde etti.",
    tags: ["PID Control", "Embedded C", "Sensors", "STM32"],
    status: "Tamamlandı",
    image: "https://images.unsplash.com/photo-1518314917860-60116010f935?w=800&q=80",
    icon: "Trophy",
    team: ["Selin Yıldız", "Mehmet Demir"],
    timeline: "2022 - 2023"
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
