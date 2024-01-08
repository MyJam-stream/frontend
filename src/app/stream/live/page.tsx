'use client'
import { useSearchParams } from 'next/navigation'
import { useAtom } from 'jotai'
import cx from 'clsx'
import { toggleShowBoardAtom } from '@/components/Board'
import PushChat from '@/modules/PushChat'
import Streaming from './Streaming'

const LivePage: React.FC = () => {
  const [showBoard] = useAtom(toggleShowBoardAtom)

  return (
    <div
      className={cx(
        'px-[32px] pb-[32px] grid gap-y-[16px] sm:gap-x-[32px] w-full h-full h-[calc(100vh-80px)] min-h-[600px]',
        showBoard ? 'sm:grid-cols-[2.33fr,1fr]' : 'sm:grid-cols-[1fr,0fr]'
      )}
    >
      <Streaming />
      <PushChat />
    </div>
  )
}

export default LivePage
