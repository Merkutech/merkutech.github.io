export interface ApplicationTeam {
  id: string;
  formUrl: string;
  title: { tr: string; en: string };
  description: { tr: string; en: string };
}

export const applicationTeams: ApplicationTeam[] = [
  {
    id: "aviyonik",
    formUrl: "https://forms.gle/JqUoRptWSh6FzVVZ8",
    title: { tr: "Aviyonik (Elektronik)", en: "Avionics (Electronics)" },
    description: {
      tr: "İHA'larımızın beynini ve sinir sistemini kuruyoruz: uçuş kontrolcüsü, sensörler, güç ve haberleşme.",
      en: "We build the brain and nerves of our UAVs: flight controllers, sensors, power and telemetry.",
    },
  },
  {
    id: "mekanik",
    formUrl: "https://forms.gle/eW6efFevmsqpeuvi9",
    title: { tr: "Mekanik", en: "Mechanical" },
    description: {
      tr: "Gövdeyi çiziyor, kesiyor, yapıştırıyor ve uçuruyoruz. CAD'den pistte kalkışa kadar.",
      en: "We design, cut, bond and fly the airframe — from CAD all the way to takeoff.",
    },
  },
  {
    id: "yazilim",
    formUrl: "https://forms.gle/A5htpUcn3cTQuM119",
    title: { tr: "Yazılım", en: "Software" },
    description: {
      tr: "Otonom uçuş, görüntü işleme ve yer istasyonu. Araç kendi kararını verirken arkasındaki kod biziz.",
      en: "Autonomous flight, computer vision and the ground station — the code behind every decision the vehicle makes.",
    },
  },
  {
    id: "tanitim-sponsorluk",
    formUrl: "https://forms.gle/PaJQsT6NNHk1aWMo8",
    title: { tr: "Tanıtım ve Sponsorluk", en: "Promotion & Sponsorship" },
    description: {
      tr: "Takımın hikayesini anlatıyor, sponsorlarla bağ kuruyor ve sosyal medyayı yönetiyoruz.",
      en: "We tell the team's story, build sponsor relationships and run our social media.",
    },
  },
];
