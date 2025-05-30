import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "@/components/layout/ScrollToTop"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Michael Green | Frontend Developer",
  description: "Portfolio of Michael Green, a frontend developer focused on climate tech and social impact.",
  generator: 'v0.dev',
  // In App Router, the favicon.ico and icon.svg files in the app directory take precedence
  // over these metadata settings, but we'll keep them for older browsers
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' }
    ],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <ScrollToTop />
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}