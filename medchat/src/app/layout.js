// Import the global styles from './globals.css'
import './globals.css'

// Import the Inter font from 'next/font/google'
import { Inter } from 'next/font/google'

// Define a subset of the Inter font (latin characters)
const inter = Inter({ subsets: ['latin'] })

// Export metadata for the application
export const metadata = {
  title: 'MEDBOT',
  description: 'Generated by create next app',
}
// Define the RootLayout component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
