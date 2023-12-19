import { Inter } from 'next/font/google'
import '@styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'KKNNS',
  description: 'B Jaiswal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
        <Navbar />
        {children}
        <Footer />
        </main>
      </body>
    </html>
  )
}
