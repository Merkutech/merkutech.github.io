import { Award, FileCheck, Medal, Mic, Trophy, type LucideIcon } from "lucide-react";

/* Metindeki baştaki emojiyi ayıkla: yerine ikon kullanıyoruz */
const EMOJI_RE = /^[\p{Extended_Pictographic}\uFE0F\u200D\s]+/u;

export function stripEmoji(text: string) {
  return text.replace(EMOJI_RE, "");
}

const EMOJI_ICONS: [string, LucideIcon][] = [
  ["🏆", Trophy],
  ["🥇", Medal],
  ["🥈", Medal],
  ["🥉", Medal],
  ["🏅", Medal],
  ["🎖", Award],
  ["📋", FileCheck],
  ["🎤", Mic],
];

export function achievementParts(item: string): { Icon: LucideIcon; text: string } {
  const Icon = EMOJI_ICONS.find(([e]) => item.startsWith(e))?.[1] ?? Award;
  return { Icon, text: stripEmoji(item) };
}
