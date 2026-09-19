import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CodeBlock } from "@/components/ui/code-block";
import { DemoClient } from "@/components/demo/demo-client";

const SAMPLE_MD = `# Demo Page

This page shows the core wiring of the template:

- **Server component** renders this markdown via \`react-markdown\` + \`remark-gfm\`
- **Shiki** highlights code blocks server-side
- **React Query** fetches \`/api/items\`
- **React Hook Form + Zod** validates the "Add item" form
- **better-auth** session is read on the server below

## Code sample

\`\`\`ts
export function getGreeting(name: string): string {
  return \`Hello, \${name}!\`;
}
\`\`\`

> Tip: copy this page as a starting point for real features.
`;

export default function DemoPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 p-8">
      <article className="prose prose-sm dark:prose-invert">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code(props) {
              const { children, className, ...rest } = props;
              const match = /language-(\w+)/.exec(className ?? "");
              if (match) {
                return (
                  <CodeBlock
                    code={String(children).replace(/\n$/, "")}
                    lang={match[1]}
                    className="my-4 overflow-x-auto rounded-lg border text-sm"
                  />
                );
              }
              return (
                <code className={className} {...rest}>
                  {children}
                </code>
              );
            },
          }}
        >
          {SAMPLE_MD}
        </ReactMarkdown>
      </article>

      <DemoClient />
    </main>
  );
}
