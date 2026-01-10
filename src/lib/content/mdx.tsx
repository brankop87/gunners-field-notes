import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";

const components = {
  a: (props: any) => (
    <a
      {...props}
      className="underline underline-offset-4 text-white hover:text-white/80"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noreferrer" : undefined}
    />
  ),
  h1: (props: any) => <h1 className="mt-8 text-4xl font-semibold" {...props} />,
  h2: (props: any) => <h2 className="mt-8 text-2xl font-semibold" {...props} />,
  h3: (props: any) => <h3 className="mt-6 text-xl font-semibold" {...props} />,
  p: (props: any) => <p className="mt-4 text-white/80 leading-7" {...props} />,
  ul: (props: any) => <ul className="mt-4 list-disc pl-6 text-white/80" {...props} />,
  ol: (props: any) => <ol className="mt-4 list-decimal pl-6 text-white/80" {...props} />,
  li: (props: any) => <li className="mt-2" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="mt-6 border-l-2 border-white/20 pl-4 text-white/75" {...props} />
  ),
  code: (props: any) => (
    <code className="rounded bg-white/10 px-1 py-0.5 text-white" {...props} />
  ),
  pre: (props: any) => (
    <pre className="mt-6 overflow-x-auto rounded-xl border border-white/10 bg-white/5 p-4 text-white" {...props} />
  ),
};

export function renderMdx(source: string) {
  return <MDXRemote source={source} components={components} />;
}
