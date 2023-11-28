'use client'
import Image from 'next/image'
import Link from 'next/link'
import Leaves from '@/assets/imgs/leafs.png'
import Speaker from '@/assets/imgs/speaker.png'
import Guitar from '@/assets/imgs/guitar.png'
import SGrass from '@/assets/imgs/sGrass.png'
import WaterMelon from '@/assets/imgs/watermelon.png'
import Button from '@/components/Button'

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[auto_39%_41px] sm:grid-rows-[auto_50%_41px] grid-cols-[51.43%_42.7%_auto] md:grid-rows-[auto_77.2px] md:grid-cols-[22.41%_auto_33%_auto] xl:grid-rows-[auto_93px] xl:grid-cols-[22.41%_auto_33%_auto] 2xl:grid-cols-[27%_29%_39.7%_auto] w-full min-h-[calc(100vh-80px)]">
        <div className="relative row-span-2 md:row-span-1 self-end ">
          <Image
            src={Leaves}
            alt="leaves"
            className="relative w-[120%] md:w-full -translate-x-[10%] md:translate-x-[0%] object-cover !z-0 select-none"
            draggable={false}
          />
          <Image
            src={SGrass}
            alt="grass"
            className="absolute bottom-[0px] -right-[6%] hidden md:block w-[75%] object-cover !z-0 select-none"
            draggable={false}
          />
        </div>
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
        <div className="relative col-start-2 md:col-start-3 self-end">
          <Image
            src={Speaker}
            alt="speaker"
            className="w-full object-cover !z-0 select-none"
            draggable={false}
          />
          <Image
            src={WaterMelon}
            alt="watermelon"
            className="absolute bottom-[0px] left-[0px] hidden md:block -translate-x-[100%] w-[34.5%] object-cover !z-0 select-none"
            draggable={false}
          />
        </div>
        <div className="col-start-1 col-span-3 md:col-span-4 justify-self-center w-[98%] bg-gradient-to-b from-green-950 via-gray-800 to-teal-950 rounded-[20px] shadow-[-37px_55px_106px_17px_#A52C37] border-2 border-zinc-600"></div>
      </div>
      <AboutUs />
    </>
  )
}

const AboutUs: React.FC = () => {
  return (
    <div className="my-[80px] p-[40px] flex flex-col items-center w-[75%]">
      <div className="mb-[48px] font-semibold text-[48px] leading-[67.2px]">
        AboutUs
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <Image
          src={Guitar}
          className="hidden sm:block w-[32.4%] select-none pointer-events-none"
          alt="about us"
          draggable={false}
        />
        <div className="sm:w-[61.7%] font-medium text-[16px] leading-[24px]">
          MyJam is a decentralized audio streaming platform designed to connect
          independent musicians with audiences in a new and meaningful way.
          <br />
          <br />
          With MyJam, users can live stream their music from any device and
          engage with their listeners through chat or video. We have envisioned
          a live audio streaming experience that is both rewarding and engaging,
          leveraging some of the web3 technology to enhance accessibility and
          portability, providing more controls to musicians and audiences.
          <br />
          <br />
          The project has served as a proof of concept during the ETHOnline
          hackathon and underwent testing at ETHMexico.
          <br />
        </div>
      </div>
    </div>
  )
}
