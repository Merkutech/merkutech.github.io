import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="text-sm font-mono text-primary/80 mb-2">SUAS 2026</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Blog / Build Log
          </h1>
          <p className="text-neutral-400 text-lg">
            Development process logs and updates for SUAS 2026
          </p>
        </div>

        {blogPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-neutral-500">No posts yet. Check back soon.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {blogPosts.map((post) => (
              <Link
                key={post.meta.slug}
                href={`/blog/${post.meta.slug}/`}
                className="group block p-5 sm:p-6 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.14] transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-flex items-center gap-1 text-xs text-neutral-500">
                        <Calendar className="h-3 w-3" />
                        {post.meta.date}
                      </span>
                      {post.meta.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.05] text-neutral-400 border border-white/[0.06]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-lg font-semibold text-white group-hover:text-primary transition-colors mb-1.5">
                      {post.meta.title}
                    </h2>
                    <p className="text-sm text-neutral-400 line-clamp-2">
                      {post.meta.excerpt}
                    </p>
                    <p className="text-xs text-neutral-600 mt-2">
                      {post.meta.author}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-neutral-600 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
