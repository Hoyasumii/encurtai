import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components";

export const metadata: Metadata = {
  title: "Encurtaí - Encurte seus links",
  description: "Encurte seus links",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="antialiased bg-white dark:bg-slate-900 text-slate-950 dark:text-gray-50 min-h-svh flex flex-col gap-8 items-center pb-4">
        <Header />
        {children}
      </body>
    </html>
  );
}
