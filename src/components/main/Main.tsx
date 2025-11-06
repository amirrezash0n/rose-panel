import type { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

export default function Main({ children }: MainProps) {
  return (
    <main className="w-full min-h-[90vh] text-neutral-950 dark:text-neutral-50 bg-neutral-50 dark:bg-neutral-800 space-y-6 p-6 rounded-3xl">
      {children}
    </main>
  );
}
