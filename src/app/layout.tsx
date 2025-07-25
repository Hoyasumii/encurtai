import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const PoppinsFF = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

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
    <html lang="pt">
      <body
        className={`${PoppinsFF.className} antialiased bg-slate-50 dark:bg-stone-900 dark:text-slate-50 text-slate-950 min-h-svh flex flex-col gap-8 items-center relative`}
      >
        {children}
      </body>
    </html>
  );
}
