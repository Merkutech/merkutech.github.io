"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CircuitBoard, Home, SearchX } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";

export default function NotFound() {
  const { t, language } = useLanguage();

  const quickLinks = [
    { href: "/", label: t.nav.home, icon: Home },
    { href: "/projelerimiz", label: t.nav.projects, icon: CircuitBoard },
    { href: "/iletisim", label: t.nav.contact, icon: ArrowUpRight },
  ];

  const labels = {
    signal: language === "tr" ? "Sinyal kayboldu" : "Signal Lost",
    desc: language === "tr"
      ? "Aradığınız sayfa taşınmış, silinmiş ya da hiç oluşturulmamış olabilir. Ana sayfaya dönebilir veya projelerimizi inceleyerek devam edebilirsiniz."
      : "The page you're looking for may have been moved, deleted, or never existed. You can return to the home page or browse our projects.",
    home: t.notFound.home,
    projects: language === "tr" ? "Projeleri Gör" : "View Projects",
    routeScan: language === "tr" ? "Rota tarama" : "Route scan",
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-5 py-28 sm:px-8 lg:px-12">
      <div className="absolute inset-0 -z-10 grid-bg opacity-[0.035]" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-background to-transparent" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="mb-5 text-xs font-mono uppercase tracking-[0.3em] text-neutral-600">
            {labels.signal}
          </p>
          <h1 className="text-5xl font-bold tracking-tighter text-white sm:text-7xl lg:text-8xl">
            404
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-500 sm:text-lg">
            {labels.desc}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-black transition-colors hover:bg-neutral-200"
            >
              <ArrowLeft className="h-4 w-4" />
              {labels.home}
            </Link>
            <Link
              href="/projelerimiz"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-5 text-sm font-semibold text-white transition-all hover:border-white/[0.18] hover:bg-white/[0.08]"
            >
              {labels.projects}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-[34rem] rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-5 shadow-2xl shadow-black/30 backdrop-blur-sm">
            <div className="absolute inset-5 rounded-[1.5rem] border border-white/[0.05]" />
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[1.45rem] bg-black/20 p-5">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                </div>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-700">
                  {labels.routeScan}
                </span>
              </div>

              <div className="grid flex-1 place-items-center py-8">
                <div className="relative grid h-44 w-44 place-items-center rounded-full border border-white/[0.08]">
                  <span className="absolute h-32 w-32 rounded-full border border-dashed border-white/[0.12]" />
                  <span className="absolute h-56 w-56 rounded-full border border-white/[0.04]" />
                  <SearchX className="h-14 w-14 text-neutral-500" />
                </div>
              </div>

              <div className="space-y-2">
                {quickLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 transition-all hover:border-white/[0.14] hover:bg-white/[0.07]"
                    >
                      <span className="flex items-center gap-3 text-sm font-medium text-neutral-300 group-hover:text-white">
                        <Icon className="h-4 w-4 text-neutral-600 group-hover:text-neutral-300" />
                        {item.label}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-neutral-700 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
