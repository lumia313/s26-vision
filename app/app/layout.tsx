import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Samsung Galaxy S26 Ultra - Vision Premium',
  description: 'Découvrez le futur du smartphone : Galaxy S26 Ultra avec Snapdragon 8 Elite Gen 5, 200MP AI Camera.',
  openGraph: {
    title: 'Galaxy S26 Ultra',
    description: 'Le flagship ultime.',
    images: '/og-image.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
