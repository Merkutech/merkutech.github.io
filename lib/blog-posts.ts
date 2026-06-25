import type { ComponentType } from "react";
import KickoffPost, * as kickoffMeta from "@/content/blog/kickoff.mdx";

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  tags: string[];
}

export interface BlogPost {
  meta: BlogPostMeta;
  Component: ComponentType;
}

function parseMeta(slug: string, mod: Record<string, unknown>): BlogPostMeta {
  const get = (key: string, fallback: string) =>
    typeof mod[key] === "string" ? (mod[key] as string) : fallback;
  const rawTags = mod.tags;
  const tags: string[] = Array.isArray(rawTags)
    ? rawTags.filter((t): t is string => typeof t === "string")
    : [];

  return {
    slug,
    title: get("title", slug),
    date: get("date", new Date().toISOString().split("T")[0]),
    excerpt: get("excerpt", ""),
    author: get("author", "Merkutech Team"),
    tags,
  };
}

const rawPosts: { Component: ComponentType; metaModule: Record<string, unknown>; slug: string }[] = [
  { slug: "kickoff", Component: KickoffPost, metaModule: kickoffMeta },
];

export const blogPosts: BlogPost[] = rawPosts.map((p) => ({
  meta: parseMeta(p.slug, p.metaModule),
  Component: p.Component,
}));

blogPosts.sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.meta.slug === slug);
}
