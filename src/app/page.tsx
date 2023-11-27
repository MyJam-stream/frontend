'use client'
import Image from 'next/image'
import Link from 'next/link'
import Leaves from '@/assets/imgs/leafs.png'
import Speaker from '@/assets/imgs/speaker.png'
import Button from '@/components/Button'

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_39%_41px] sm:grid-rows-[auto_50%_41px] grid-cols-[51.43%_42.7%_auto] md:grid-rows-[auto_77.2px] md:grid-cols-[22.41%_auto_33%_auto] xl:grid-rows-[auto_93px] xl:grid-cols-[22.41%_auto_33%_auto] 2xl:grid-cols-[27%_29%_39.7%_auto] w-full min-h-[calc(100vh-80px)]">
      <Image
        src={Leaves}
        alt="leaves"
        className="row-span-2 md:row-span-1 self-end w-[120%] md:w-full -translate-x-[10%] md:translate-x-[0%] object-cover !z-0 select-none"
        draggable={false}
      />
      <div className="relative self-end md:self-center w-fit md:min-w-[348px]">
        <div className="text-white text-[44px] md:text-[96px] font-semibold leading-[150%] tracking-[-1.825px]">
          MyJAM
        </div>
        <div className="border-[2px] md:border-[4.365px] border-[#ffffff] border-solid" />
        <div className="text-white text-[12px] md:text-[26.92px] font-bold leading-[53.94px]">
          STREAM FROM ANYWHERE
        </div>
        <Link href="/stream">
          <Button
            fullWidth
            color="amber"
            className="text-black text-[14px] md:text-[2rem] font-semibold leading-[13.264px] md:leading-7"
          >
            Launch App
          </Button>
        </Link>
      </div>
      <Image
        src={Speaker}
        alt="speaker"
        className="col-start-2 md:col-start-3 self-end w-full object-cover !z-0 select-none"
        draggable={false}
      />
      <div className="col-start-1 col-span-3 md:col-span-4 justify-self-center w-[98%] bg-gradient-to-b from-green-950 via-gray-800 to-teal-950 rounded-[20px] shadow-[-37px_55px_106px_17px_#A52C37] border-2 border-zinc-600"></div>
    </div>
  )
}
