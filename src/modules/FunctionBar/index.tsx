'use client'
import { ComponentProps } from 'react'
import { useAtom, useAtomValue } from 'jotai'
import { ChatIcon, TempIcon } from '@/components/Icons'
import { toggleShowBoardAtom } from '@/components/Board'
import Button from '@/components/Button'
import FunctionButton from '@/modules/FunctionBar/FunctionBtn'
import ClipBoard from '@/modules/ClipBoard'
import useInTransaction from '@/hooks/useIntransaction'
import { paramsAtom } from '@/services/params'
// import { fetchHistoryAtom } from '@/services/push'
import { useDonate } from '@/services/monetize'
import { WalletAuthCon } from '../AuthCon'

const FunctionBar: React.FC<ComponentProps<'div'>> = ({ ...props }) => {
  const [showBoard, toggleShowBaord] = useAtom(toggleShowBoardAtom)
  // const [, fetchHistory] = useAtom(fetchHistoryAtom)
  const { donate } = useDonate()
  const params = useAtomValue(paramsAtom)
  const DOMAIN = window.location.origin
  const { handleExecAction, loading } = useInTransaction(() =>
    donate(params.creatorAddr as string)
  )

  return (
    <div
      className="mt-[27px] flex flex-row items-center justify-center gap-x-[12px]"
      {...props}
    >
      <ClipBoard
        content={`${DOMAIN}/view/${params.id}?chatid=${params.chatid}&contractAddr=${params.contractAddr}&creatorAddr=${params.creatorAddr}&id=${params.id}`}
      />
      <FunctionButton curPath={showBoard} onClick={toggleShowBaord}>
        <ChatIcon curPath={showBoard} />
      </FunctionButton>
      {/* <FunctionButton
        curPath={showBoard}
        onClick={() => {
          if (!chatid) return
          fetchHistory(chatid)
        }}
      >
        <TempIcon curPath={false} />
      </FunctionButton> */}
      {params.creatorAddr && (
        <WalletAuthCon>
          <Button loading={loading} color="amber" onClick={handleExecAction}>
            Donate 0.01matic
          </Button>
        </WalletAuthCon>
      )}
    </div>
  )
}

export default FunctionBar
