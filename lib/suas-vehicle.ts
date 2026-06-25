export interface VehicleSpec {
  label: { tr: string; en: string };
  value: { tr: string; en: string };
}

export interface VehicleComponent {
  name: { tr: string; en: string };
  description: { tr: string; en: string };
  image?: string;
}

export interface TestProcedure {
  title: { tr: string; en: string };
  description: { tr: string; en: string };
  steps: { tr: string[]; en: string[] };
}

export interface SuasVehicleData {
  name: { tr: string; en: string };
  description: { tr: string; en: string };
  specs: VehicleSpec[];
  components: VehicleComponent[];
  designPhilosophy: { tr: string; en: string };
  testing: {
    overview: { tr: string; en: string };
    procedures: TestProcedure[];
  };
  safety: { tr: string; en: string };
  gallery: string[];
}

export const suasVehicle: SuasVehicleData = {
  name: {
    tr: "Merkutech SUAS 2026 İHA",
    en: "Merkutech SUAS 2026 UAV",
  },
  description: {
    tr: "SUAS 2026 yarışması için geliştirilen, otonom görev icra edebilen insansız hava aracı. Sistem; otonom kalkış/iniş, waypoint navigasyonu, havadan nesne tanıma ve hedef tespiti, faydalı yük bırakma ve canlı görüntü aktarımı yeteneklerine sahiptir.",
    en: "An unmanned aerial vehicle developed for the SUAS 2026 competition, capable of executing autonomous missions. The system features autonomous takeoff/landing, waypoint navigation, aerial object recognition and target detection, payload delivery, and live video transmission.",
  },
  specs: [
    { label: { tr: "Kanat Açıklığı", en: "Wingspan" }, value: { tr: "2.5 m", en: "2.5 m" } },
    { label: { tr: "Gövde Uzunluğu", en: "Fuselage Length" }, value: { tr: "1.8 m", en: "1.8 m" } },
    { label: { tr: "Maksimum Kalkış Ağırlığı", en: "MTOW" }, value: { tr: "8 kg", en: "8 kg" } },
    { label: { tr: "Faydalı Yük Kapasitesi", en: "Payload Capacity" }, value: { tr: "2 kg", en: "2 kg" } },
    { label: { tr: "Uçuş Süresi", en: "Endurance" }, value: { tr: "45 dakika", en: "45 minutes" } },
    { label: { tr: "Menzil", en: "Range" }, value: { tr: "10 km", en: "10 km" } },
    { label: { tr: "Maksimum İrtifa", en: "Max Altitude" }, value: { tr: "500 m", en: "500 m" } },
    { label: { tr: "Seyir Hızı", en: "Cruise Speed" }, value: { tr: "15 m/s", en: "15 m/s" } },
    { label: { tr: "Motor Tipi", en: "Motor Type" }, value: { tr: "Fırçasız Elektrik", en: "Brushless Electric" } },
    { label: { tr: "Batarya", en: "Battery" }, value: { tr: "6S LiPo 22000mAh", en: "6S LiPo 22000mAh" } },
  ],
  components: [
    {
      name: { tr: "Uçuş Kontrolcüsü", en: "Flight Controller" },
      description: { tr: "Pixhawk Cube Orange+ otopilot sistemi, ArduPilot firmware ile otonom uçuş kontrolü sağlar.", en: "Pixhawk Cube Orange+ autopilot system with ArduPilot firmware for autonomous flight control." },
    },
    {
      name: { tr: "GPS / RTK Modülü", en: "GPS / RTK Module" },
      description: { tr: "Here3+ GPS modülü, santimetre hassasiyetinde konumlandırma için RTK desteği sunar.", en: "Here3+ GPS module with RTK support for centimeter-level positioning accuracy." },
    },
    {
      name: { tr: "Görev Bilgisayarı", en: "Mission Computer" },
      description: { tr: "NVIDIA Jetson Orin Nano, yapay zeka çıkarımı ve görüntü işleme için kullanılır.", en: "NVIDIA Jetson Orin Nano for AI inference and image processing." },
    },
    {
      name: { tr: "Kamera Sistemi", en: "Camera System" },
      description: { tr: "Sony IMX477 HQ kamera ve global shutter lens ile havadan nesne tanıma ve hedef tespiti.", en: "Sony IMX477 HQ camera with global shutter lens for aerial object recognition and target detection." },
    },
    {
      name: { tr: "Faydalı Yük Bırakma", en: "Payload Drop Mechanism" },
      description: { tr: "Servo kontrollü hassas bırakma mekanizması, otonom hedefe faydalı yük teslimatı sağlar.", en: "Servo-controlled precision drop mechanism for autonomous payload delivery to target." },
    },
    {
      name: { tr: "Haberleşme Sistemi", en: "Communication System" },
      description: { tr: "433MHz telemetri ve 5.8GHz video aktarımı ile uzun menzilli güvenilir bağlantı.", en: "433MHz telemetry and 5.8GHz video transmission for long-range reliable connection." },
    },
  ],
  designPhilosophy: {
    tr: "Aracımız, SUAS 2026 yarışmasının gereklilikleri göz önünde bulundurularak modüler, hafif ve güvenilir olacak şekilde tasarlanmıştır. Çift kuyruklu konfigürasyon, düşük sürükleme profili ve geniş faydalı yük bölmesi ile hem aerodinamik verimlilik hem de görev esnekliği hedeflenmiştir. 3D baskılı bileşenler ile hızlı prototipleme ve iteratif tasarım yaklaşımı benimsenmiştir.",
    en: "Our vehicle is designed to be modular, lightweight, and reliable, taking into account the SUAS 2026 competition requirements. The twin-boom configuration, low-drag profile, and spacious payload bay target both aerodynamic efficiency and mission flexibility. A rapid prototyping and iterative design approach is adopted using 3D-printed components.",
  },
  testing: {
    overview: {
      tr: "Uçuş testleri, yarışma öncesi kapsamlı doğrulama için aşamalı olarak gerçekleştirilmiştir. Her test aşaması, spesifik sistemlerin doğrulanmasına odaklanmıştır.",
      en: "Flight tests were conducted in phases for comprehensive validation before the competition. Each test phase focused on verifying specific systems.",
    },
    procedures: [
      {
        title: { tr: "Yer Testleri", en: "Ground Tests" },
        description: { tr: "Tüm elektronik sistemlerin, motorların ve kontrol yüzeylerinin çalışması yerde doğrulanır.", en: "All electronic systems, motors, and control surfaces are verified on the ground." },
        steps: {
          tr: ["Motor ve ESC kalibrasyonu", "Kontrol yüzeylerinin hareket kontrolü", "Telemetri bağlantı testi", "Failsafe (RTL) mekanizması testi", "Faydalı yük mekanizması testi"],
          en: ["Motor and ESC calibration", "Control surface movement check", "Telemetry link test", "Failsafe (RTL) mechanism test", "Payload mechanism test"],
        },
      },
      {
        title: { tr: "Manuel Uçuş Testleri", en: "Manual Flight Tests" },
        description: { tr: "Temel uçuş kararlılığı, kontrol cevapları ve manuel mod geçişleri test edilir.", en: "Basic flight stability, control responses, and manual mode transitions are tested." },
        steps: {
          tr: ["Stabilize mod kalkış ve iniş", "FBWA mod yatay uçuş", "Manual mod acil durum geçişi", "Düşük irtifa manevra testleri"],
          en: ["Stabilize mode takeoff and landing", "FBWA mode level flight", "Manual mode emergency transition", "Low altitude maneuver tests"],
        },
      },
      {
        title: { tr: "Otonom Uçuş Testleri", en: "Autonomous Flight Tests" },
        description: { tr: "Waypoint navigasyonu, otonom kalkış/iniş ve hedef tespiti yetenekleri doğrulanır.", en: "Waypoint navigation, autonomous takeoff/landing, and target detection capabilities are verified." },
        steps: {
          tr: ["AUTO mod kalkış testi", "Çoklu waypoint navigasyonu", "Otonom iniş testi", "Hedefe yaklaşma ve görüntü işleme testi", "Faydalı yük bırakma testi"],
          en: ["AUTO mode takeoff test", "Multi-waypoint navigation", "Autonomous landing test", "Target approach and image processing test", "Payload drop test"],
        },
      },
    ],
  },
  safety: {
    tr: "Tüm uçuş operasyonları, belirlenmiş güvenlik protokolleri çerçevesinde gerçekleştirilir. Manuel override (geçersiz kılma) mekanizması ve otomatik Return-to-Launch (RTL) özelliği, acil durumlarda güvenli iniş sağlar. Uçuş öncesi checklist ve güvenlik brifingi zorunludur.",
    en: "All flight operations are conducted within established safety protocols. The manual override mechanism and automatic Return-to-Launch (RTL) feature ensure safe landing in emergencies. Pre-flight checklist and safety briefing are mandatory.",
  },
  gallery: [],
};
