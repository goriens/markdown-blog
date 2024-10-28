import { cn } from "@/lib/utils";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.min.css";
import { FaTerminal } from "react-icons/fa";
import CopyButton from "./CopyButton";

export default function MarkdownPreview({
  content,
  className,
}: {
  content: string;
  className?: string;
}) {
  return (
    <Markdown
      rehypePlugins={[rehypeHighlight]}
      className={cn("space-y-6", className)}
      components={{
        h1: ({ node, ...props }) => {
          return <h1 {...props} className="text-3xl font-bold"></h1>;
        },
        h2: ({ node, ...props }) => {
          return <h1 {...props} className="text-2xl font-bold"></h1>;
        },
        h3: ({ node, ...props }) => {
          return <h1 {...props} className="text-xl font-bold"></h1>;
        },
        h4: ({ node, ...props }) => {
          return <h1 {...props} className="text-lg font-bold"></h1>;
        },
        code: ({ node, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || "");
          const Icon = FaTerminal;
          if (match?.length) {
            return (
              <div className="bg-graident-dark text-gray-300 border rounded-md">
                <div className="px-5 py-2 border-b flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Icon />
                    <span>{node?.data?.meta}</span>
                  </div>
                  <CopyButton />
                </div>
                <div className="overflow-x-auto w-full">
                  <div className="p-4">{children}</div>
                </div>
              </div>
            );
          } else {
            return (
              <code className="bg-zinc-700 rounded-md px-2">{children}</code>
            );
          }
        },
      }}
    >
      {content}
    </Markdown>
  );
}
