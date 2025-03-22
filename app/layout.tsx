import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import LucideProvider from "./components/lucide-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Karan Khanna | Portfolio",
  description: "Professional Portfolio for Karan Khanna",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LucideProvider />
        {children}
      </body>
      <Analytics />
    </html>
  )
}

