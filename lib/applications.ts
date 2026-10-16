export interface ApplicationTeam {
  id: string;
  formUrl: string;
  title: { tr: string; en: string };
}

export const applicationTeams: ApplicationTeam[] = [
  {
    id: "aviyonik",
    formUrl: "https://forms.gle/JqUoRptWSh6FzVVZ8",
    title: { tr: "Aviyonik (Elektronik)", en: "Avionics (Electronics)" },
  },
  {
    id: "mekanik",
    formUrl: "https://forms.gle/eW6efFevmsqpeuvi9",
    title: { tr: "Mekanik", en: "Mechanical" },
  },
  {
    id: "yazilim",
    formUrl: "https://forms.gle/A5htpUcn3cTQuM119",
    title: { tr: "Yazılım", en: "Software" },
  },
  {
    id: "tanitim-sponsorluk",
    formUrl: "https://forms.gle/PaJQsT6NNHk1aWMo8",
    title: { tr: "Tanıtım ve Sponsorluk", en: "Promotion & Sponsorship" },
  },
];
