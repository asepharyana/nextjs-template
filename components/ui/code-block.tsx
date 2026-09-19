import { codeToHtml } from "shiki";

const DEFAULT_THEME = "github-dark";

export async function CodeBlock({
  code,
  lang = "text",
  theme = DEFAULT_THEME,
  className,
}: {
  code: string;
  lang?: string;
  theme?: string;
  className?: string;
}) {
  const html = await codeToHtml(code, {
    lang,
    theme,
  });

  // Safe: shiki escapes all input before emitting HTML (no raw user content
  // reaches innerHTML), so no sanitizer is required here.
  return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
