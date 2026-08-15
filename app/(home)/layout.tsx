import Link from "next/link";
import React from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="w-full sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex justify-between items-center">
          <Link href="/" className="font-extrabold text-lg sm:text-xl tracking-tight text-zinc-900 dark:text-zinc-50">
            My<span className="text-blue-600">Typology</span>
          </Link>

          <div className="flex items-center gap-1 sm:gap-2">
            <Link
              href="/templates"
              className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              Templates
            </Link>
            <Link
    href="/chat"
    className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
  >
    Chat ENFJ
  </Link>
            <Link
              href="/about"
              className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              About Us
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {children}
      </main>

      <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 py-8 text-center text-xs sm:text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} MyTypology. Handcrafted architecture.</p>
      </footer>
    </div>
  );
}