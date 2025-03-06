import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Horizon'25 - National Level AI Hackathon",
  description:
    "Join the future of AI at Horizon'25, a National Level AI Hackathon at KPR Institute of Engineering and Technology",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} font-sans bg-black text-white`}>{children}</body>
    </html>
  )
}



import './globals.css'