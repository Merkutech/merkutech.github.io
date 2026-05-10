export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  icon: string;
}

export const projects: Project[] = [
  {
    slug: "otonom-robotaksi",
    title: "Otonom Robotaksi",
    description: "Teknofest Robotaksi Binek Otonom Araç Yarışması için geliştirilen tam otonom araç projesi.",
    longDescription: "Teknofest kapsamında düzenlenen Robotaksi Binek Otonom Araç Yarışması'na katılmak üzere geliştirilen bu projede, LIDAR ve kamera sensörleriyle donatılmış tam otonom bir araç tasarlandı. ROS tabanlı yazılım mimarisi, gerçek zamanlı nesne tespiti ve yol planlama algoritmaları ile araç, trafik kurallarına uygun şekilde otonom sürüş gerçekleştirebiliyor.",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&q=80",
    icon: "Bot"
  },
  {
    slug: "insansi-robot-kol",
    title: "İnsansı Robot Kol",
    description: "6 eksenli serbestlik derecesine sahip, görüntü işleme destekli robotik manipülatör.",
    longDescription: "Endüstriyel ve araştırma amaçlı kullanıma uygun 6 eksenli robotik kol projesi. Bilgisayarlı görü ile nesne tanıma, derin öğrenme tabanlı grasp planlama ve ters kinematik hesaplamalar entegre edilerek hassas manipülasyon görevleri gerçekleştirilebiliyor.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80",
    icon: "Cpu"
  },
  {
    slug: "akilli-drone",
    title: "Akıllı Drone Sistemi",
    description: "Otonom uçuş, görüntü işleme ve nesne takibi yeteneklerine sahip insansız hava aracı.",
    longDescription: "Görüntü işleme algoritmalarıyla donatılmış otonom drone projesi. Gerçek zamanlı nesne takibi, yüz tanıma ve haritalama yetenekleri sayesinde arama kurtarma, envanter takibi ve güvenlik uygulamalarında kullanılabiliyor.",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1200&q=80",
    icon: "Radio"
  },
  {
    slug: "cizgi-izleyen-robot",
    title: "Çizgi İzleyen Robot",
    description: "Yüksek hızlı, sensör füzyonlu yarışma robotu.",
    longDescription: "Teknofest ve çeşitli robotik yarışmalara katılmak üzere geliştirilen yüksek hızlı çizgi izleyen robot. PID kontrol, sensör füzyonu ve adaptif hız kontrolü ile optimize edilen platform, katıldığı yarışmalarda başarılı sonuçlar elde etti.",
    image: "https://images.unsplash.com/photo-1518314917860-60116010f935?w=1200&q=80",
    icon: "Trophy"
  },
  {
    slug: "sumo-robot",
    title: "Sumo Robot",
    description: "Rakibi ring dışına itmek için tasarlanmış, stratejik savaş robotu.",
    longDescription: "Robotik sumo yarışmaları için geliştirilen bu projede, rakip algılama sensörleri, güçlü tahrik sistemi ve stratejik hareket algoritmaları bir araya getirildi. Dar alanda manevra kabiliyeti ve hızlı tepki süresi ile rakiplerine üstünlük sağlıyor.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    icon: "CircuitBoard"
  },
  {
    slug: "robot-kol-simulasyon",
    title: "Robot Kol Simülasyonu",
    description: "Gazebo ve ROS entegreli robotik kol simülasyon ortamı.",
    longDescription: "Gazebo simülasyon ortamında ROS tabanlı robotik kol kontrolü projesi. Simülasyon üzerinde ters kinematik, yol planlama ve nesne manipülasyon algoritmaları test edilerek gerçek donanıma geçiş öncesi maliyet ve zaman tasarrufu sağlanıyor.",
    image: "https://images.unsplash.com/photo-1631541909061-71e349d1f203?w=1200&q=80",
    icon: "Layers"
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
