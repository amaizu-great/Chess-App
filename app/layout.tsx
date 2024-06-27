import "./globals.css";
import "reflect-metadata"
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { NextAuthProvider } from "./providers";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "Chess App",
  description: "Play Against The Best",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
