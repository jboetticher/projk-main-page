import type { Metadata } from 'next'
import './_styles/globals.css'

export const metadata: Metadata = {
  title: 'PROJK',
  description: 'PROJK! Make things.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Lexend, sans-serif' }}>{children}</body>
    </html>
  )
}