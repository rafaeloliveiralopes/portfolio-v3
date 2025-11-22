import { MDXProvider } from "@mdx-js/react";
import React from "react";

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="text-4xl font-bold mt-12 mb-6 scroll-mt-20 text-snow-100"
      {...props}
    />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="text-3xl font-bold mt-10 mb-4 scroll-mt-20 text-snow-100"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="text-2xl font-semibold mt-8 mb-3 scroll-mt-20 text-snow-100"
      {...props}
    />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className="text-xl font-semibold mt-6 mb-2 scroll-mt-20 text-snow-100"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-snow-200 leading-7 mb-4" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="!text-blue-400 hover:!text-blue-300 break-words !underline hover:!no-underline transition-colors !font-medium cursor-pointer"
      style={{ color: "#60a5fa", textDecoration: "underline" }}
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="mt-4 mb-4 ml-6 list-disc space-y-2 text-snow-200"
      {...props}
    />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="mt-4 mb-4 ml-6 list-decimal space-y-2 text-snow-200"
      {...props}
    />
  ),
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className="leading-7 text-snow-200" {...props} />
  ),
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="mt-6 mb-6 border-l-4 border-primary pl-6 py-2 italic text-snow-200 bg-zinc-900/50 rounded-r"
      {...props}
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
      {...props}
    />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="mt-4 mb-4 overflow-x-auto rounded-lg bg-muted p-4 font-mono text-sm"
      {...props}
    />
  ),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img
      className="mt-6 mb-6 rounded-lg border shadow-md w-full"
      loading="lazy"
      {...props}
    />
  ),
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-8 border-muted" {...props} />
  ),
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 overflow-x-auto">
      <table
        className="w-full border-collapse rounded-lg overflow-hidden"
        {...props}
      />
    </div>
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th
      className="border border-zinc-700 px-4 py-2 text-left font-semibold bg-zinc-900 text-snow-200"
      {...props}
    />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td className="border border-zinc-700 px-4 py-2 text-snow-200" {...props} />
  ),
};

export const MdxProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => <MDXProvider components={components}>{children}</MDXProvider>;
