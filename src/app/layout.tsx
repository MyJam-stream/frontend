import './globals.css'
import type { Metadata } from 'next'
import MyJam from '@/assets/icons/myJam.svg'
import ModalRender from '@/components/Modal'
import { ToastRender } from '@/components/Toast'
import Providers from '@/modules/Providers'
import Navbar from '@/modules/NavBar'
import Footer from '@/modules/Footer'

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
          <Providers>
            <Navbar />
            <ToastRender />
            <ModalRender />
            <div className="relative mt-[80px] flex flex-col items-center w-full min-h-[calc(100vh-80px)] max-w-[1920px]">
              {children}
            </div>
            <Footer />
          </Providers>
        </>
      </body>
    </html>
  )
}
