'use client'
import { useAtom, useAtomValue } from 'jotai'
import { Broadcast } from '@livepeer/react'
import { toggleShowBoardAtom } from '@/components/Board'
import FunctionBar from '@/modules/FunctionBar'
import { paramsAtom } from '@/services/params'

//TODO: animation for collapse
const Streaming: React.FC = () => {
  // const [showBoard, toggleShowBaord] = useAtom(toggleShowBoardAtom)
  const params = useAtomValue(paramsAtom)

  return (
    <section className="flex flex-col grow items-center justify-start">
      <h1 className="mb-[.5rem] text-center text-white text-4xl font-semibold leading-[54px]">
        {params.title}
      </h1>
      <div className="flex justify-center items-center w-full h-fit">
        <Broadcast
          streamKey={params.streamKey}
          controls={{ autohide: 0, hotKey: false, defaultVolume: 0.6 } as any}
          aspectRatio="16to9"
          objectFit="cover"
        />
      </div>
      <div className="mt-[27px] flex flex-row items-center justify-center gap-x-[12px]">
        <FunctionBar />
      </div>
    </section>
  )
}

export default Streaming
