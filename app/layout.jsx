"use client"

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ProvidedApp from "@/components/ProvidedApp";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  let pathname = usePathname()
  let hideLayout = pathname === "/login" || pathname === "/create-account"
  return (
    <html lang="en">
      <body>
        {!hideLayout && <Navbar />}
          <ProvidedApp>{children}</ProvidedApp>
          {!hideLayout && <Footer />}
      </body>
    </html>
  );
}
