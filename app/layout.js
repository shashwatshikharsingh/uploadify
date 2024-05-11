import { Inter } from 'next/font/google'
import './globals.css'

import { ClerkProvider } from '@clerk/nextjs'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Uploadify: Instantly share files',
  description: 'Uploadify is a free file sharing service with no registration required. Upload files & share them instantly with anyone on the internet.',
  
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

      

    <html lang="en">
      
      <body className={inter.className}>{children}</body>
    </html>
    </ClerkProvider>

  )
}
