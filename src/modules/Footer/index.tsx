import { ReactElement } from 'react'
import { TwitterIcon, LensIcon, GithubIcon } from '@/components/Icons'
const Footer: React.FC = () => {
  return (
    <div className="flex flex-col w-full items-centerw-full border-t-[1px] border-t-solid border-t-[#fff] rounded-t-[12px] bg-[rgba(255,255,255,0.08)]">
      <div className="flex flex-col justify-center items-center w-full max-w-[1920px] h-[257px]">
        <div className="mb-[40px] font-semibold text-[48px] leading-[67.2px]">
          Contacts
        </div>
        <div className="flex flex-row justify-between gap-x-[32px] md:gap-x-[16px]">
          <ContactItem
            Icon={
              <TwitterIcon
                className="w-[24px] h-[24px]"
                iconClassName="fill-[#ffffff]"
              />
            }
            text="Twitter"
            href="https://twitter.com/ETHMyJam"
          />
          <ContactItem
            Icon={
              <LensIcon
                className="w-[24px] h-[24px]"
                iconClassName="fill-[#ffffff]"
              />
            }
            text="Lens"
            href="https://hey.xyz/u/myjam"
          />
          <ContactItem
            Icon={
              <GithubIcon
                className="w-[24px] h-[24px]"
                iconClassName="fill-[#ffffff]"
              />
            }
            text="GitHub"
            href="https://github.com/MyJam-stream"
          />
        </div>
      </div>
      <FootNote />
    </div>
  )
}

export default Footer

export const FootNote: React.FC = () => {
  return (
    <div className="relative w-full">
      <div className="relative flex flex-col justify-center items-center h-[73px] font-light text-[12px] leading-[24px]">
        @2023 MyJam
      </div>
    </div>
  )
}

interface ContactItemProp {
  Icon: ReactElement
  text: string
  href: string
}

const ContactItem: React.FC<ContactItemProp> = ({ Icon, text, href }) => {
  return (
    <div className="flex flex-row justify-center items-center text-[#FFFFFF] fill-[#ffffff] transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110">
      <a
        className="flex flex-row justify-center items-center gap-x-[8px] md:w-[216px] md:h-[56px]"
        href={href}
        target="_blank"
      >
        <div className="w-[32px] h-[32px] flex justify-center items-center">
          {Icon}
        </div>
        <div className="hidden sm:block font-medium text-[18px] leading-[28px]">
          {text}
        </div>
      </a>
    </div>
  )
}
