// src/app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
         <header>
          <h1 className={styles.title}>Treina<span className={styles.titleSecondWord}>Blog</span></h1>
         </header>
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "TreinaBlog",
  description: "Aplicação desenvolvida no curso de next.js do TreinaWeb",
};