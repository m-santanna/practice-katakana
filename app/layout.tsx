import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import { Provider } from "jotai"

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Practice Katakana",
  description: "Practice and improve your katakana knowledge with this app.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
