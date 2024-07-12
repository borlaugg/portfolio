import type { Metadata } from "next";
import { Red_Hat_Mono } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Red_Hat_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rishabh Ravi",
  description: "About Rishabh Ravi, final year student at IIT Bombay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
