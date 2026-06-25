import type { ComponentType } from "react";

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

const rawPosts: { Component: ComponentType; metaModule: Record<string, unknown>; slug: string }[] = [];

export const blogPosts: BlogPost[] = rawPosts.map((p) => ({
  meta: {
    slug: p.slug,
    title: typeof p.metaModule.title === "string" ? p.metaModule.title : p.slug,
    date: typeof p.metaModule.date === "string" ? p.metaModule.date : new Date().toISOString().split("T")[0],
    excerpt: typeof p.metaModule.excerpt === "string" ? p.metaModule.excerpt : "",
    author: typeof p.metaModule.author === "string" ? p.metaModule.author : "Merkutech Team",
    tags: Array.isArray(p.metaModule.tags) ? p.metaModule.tags.filter((t): t is string => typeof t === "string") : [],
  },
  Component: p.Component,
}));

blogPosts.sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.meta.slug === slug);
}
