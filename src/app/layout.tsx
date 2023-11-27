import './globals.css'
import type { Metadata } from 'next'
import MyJam from '@/assets/icons/myJam.svg'
import { ToastRender } from '@/components/Toast'
import Providers from '@/modules/Providers'
import Navbar from '@/modules/NavBar'

export const metadata: Metadata = {
  title: 'MyJam',
  applicationName: 'MyJam',
  keywords: ['streaming', 'music', 'audio', 'MyJam'],
  description:
    'MyJam is a decentralized live-streaming platform that brings musicians and listeners together, empowering artists to stream connections with audiences',
  icons: MyJam,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FF9591" />
        <link rel="apple-touch-icon" href="/pwa_192.png" sizes="180x180" />
        <link rel="mask-icon" href="/myJam.svg" color="#FFFFFF" />
      </head>
      <body>
        <>
          <Navbar />
          <Providers>
            <ToastRender />
            <div className="relative mt-[80px] w-full min-h-[calc(100vh-80px)] max-w-[1920px]">
              {children}
            </div>
          </Providers>
        </>
      </body>
    </html>
  )
}
