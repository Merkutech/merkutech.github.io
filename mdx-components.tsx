import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl sm:text-4xl font-bold text-white mt-10 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl sm:text-3xl font-semibold text-white mt-8 mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-white/90 mt-6 mb-2">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-neutral-300 leading-relaxed mb-4">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside text-neutral-300 space-y-1 mb-4 ml-2">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside text-neutral-300 space-y-1 mb-4 ml-2">{children}</ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    a: ({ href, children }) => (
      <a
        href={href}
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
        className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
      >
        {children}
      </a>
    ),
    img: ({ src, alt }) => (
      <img
        src={src}
        alt={alt || ""}
        className="rounded-lg border border-white/[0.08] my-6 max-w-full"
      />
    ),
    pre: ({ children }) => (
      <pre className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-4 overflow-x-auto text-sm mb-4">
        {children}
      </pre>
    ),
    code: ({ children }) => (
      <code className="text-sm bg-white/[0.06] rounded px-1.5 py-0.5 font-mono">{children}</code>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-primary/30 pl-4 italic text-neutral-400 my-4">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="border-white/[0.08] my-8" />,
    table: ({ children }) => (
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm text-left border border-white/[0.08] rounded-lg">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="px-4 py-2 bg-white/[0.04] text-white font-medium border-b border-white/[0.08]">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-2 text-neutral-300 border-b border-white/[0.04]">{children}</td>
    ),
    strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
    ...components,
  };
}
