'use client'
import React, { useState, useEffect, type ComponentProps } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import cx from 'clsx'
import MJHeader from '@/assets/icons/MJheader.svg'
import { HomeIcon, MicIcon, VoiceIcon } from '@/components/Icons'
import ToolTip from '@/components/Tooltip'
import AuthCon, { PushAuthCon } from '@/modules/AuthCon'
import AddressBoard from '../AddrBoard'
import Mobile from './Mobile'
import './index.css'

//TODO: conditinal rendering should be doen in NavLink instead of icon itself
const NavLink: React.FC<ComponentProps<typeof Link> & { curPath: boolean }> = ({
  href,
  children,
  curPath,
  className,
  ...props
}) => (
  <li
    className={cx(
      'navbar-link relative flex items-center w-[48px] h-[48px] rounded-[24px] overflow-hidden',
      curPath ? 'bg-[#ffffff]' : 'bg-[rgba(255,255,255,0.12)]'
    )}
  >
    <Link
      className={cx(
        'flex items-center justify-center w-full h-full text-#147240 decoration-none',
        className
      )}
      href={href}
      {...props}
    >
      {children}
    </Link>
  </li>
)

const Navbar: React.FC = () => {
  const curPath = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [curPath])

  return (
    <header className="fixed left-0 top-0 flex flex-row justify-between w-full h-[80px] bg-transparent z-[1000]">
      <Mobile
        open={isMobileMenuOpen}
        curPath={curPath === '/' ? 'home' : curPath}
      />
      <nav
        className={cx(
          'max-w-[1920px] mx-auto pl-[43px] pr-[33px] flex justify-end items-center w-full h-[80px]'
        )}
      >
        <Link
          href="/"
          className="mr-auto flex flex-row items-center decoration-none"
        >
          <Image
            src={MJHeader}
            alt=""
            className="select-none w-[118px] h-[30px]"
            draggable={false}
          />
        </Link>
        <ul className="navbar-linkArea mr-auto display-none hidden sm:visible sm:flex items-center justify-end grow gap-x-[12px] h-full text-[16px] font-semibold">
          <NavLink href="/" curPath={curPath === '/' || curPath === '/home'}>
            <HomeIcon curPath={curPath === '/' || curPath === '/home'} />
          </NavLink>
          <NavLink href="/stream" curPath={curPath === '/stream'}>
            <MicIcon curPath={curPath === '/stream'} />
          </NavLink>
          <ToolTip text="Coming soon" options={{ placement: 'bottom' }}>
            <NavLink
              href="/view"
              curPath={curPath === '/view'}
              className="!cursor-not-allowed"
            >
              <VoiceIcon curPath={curPath === '/view'} />
            </NavLink>
          </ToolTip>
        </ul>
        <div className="ml-[12px] flex flex-row justify-between items-center gap-x-[8px]">
          <AuthCon>
            <AddressBoard />
          </AuthCon>
          <label
            className="burger-container ml-[20px] sm:hidden"
            htmlFor="burger-check"
          >
            <input
              className="burger-check"
              id="burger-check"
              type="checkbox"
              checked={isMobileMenuOpen}
              onChange={(e) => setIsMobileMenuOpen(e.target.checked)}
            />
            <span className="burger" />
          </label>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
