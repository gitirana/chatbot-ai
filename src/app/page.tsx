"use-client";

import { Chat } from "@/components/Chat";
import { ThemeProvider } from "@/components/theme-provider";

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex min-h-screen bg-slate-100 dark:bg-slate-900 items-center justify-center">
        <Chat />
      </div>
    </ThemeProvider>
  );
}
