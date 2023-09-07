import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Html, Head } from 'next/document'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Html>
      <Head>
         <Script
           src="https://js-cdn.dynatrace.com/jstag/157944990f8/bf83471ois/3d03307895552e3e_complete.js"
           strategy="beforeInteractive"
          />
      </Head>
      <body className={inter.className}>{children}</body>
    </Html>
  )
}
