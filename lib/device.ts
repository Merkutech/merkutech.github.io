/* Zayıf cihazda ve tasarruf modunda canlı 3B sahne yüklenmez, poster kalır */
export function isLowPowerDevice() {
  if (typeof navigator === "undefined") return false;
  const nav = navigator as Navigator & { deviceMemory?: number; connection?: { saveData?: boolean } };
  if (nav.connection?.saveData) return true;
  if (/Mobi|Android|iPhone|iPad/i.test(nav.userAgent)) return true;
  if (typeof nav.deviceMemory === "number" && nav.deviceMemory <= 4) return true;
  return typeof nav.hardwareConcurrency === "number" && nav.hardwareConcurrency <= 4;
}
