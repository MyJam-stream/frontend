'use client'
import { useEffect, useCallback } from 'react'
import { useAtomValue, useAtom } from 'jotai'
import Button from '@/components/Button'
import Board from '@/components/Board'
import AuthCon, { PermissionAuthCon } from '@/modules/AuthCon'
import {
  pushAccountAtom,
  pushMessagesAtom,
  fetchHistoryAtom,
  // polledMessagesAtom,
} from '@/services/push'
import { paramsAtom } from '@/services/params'
import PushSendInput from './PushSendInput'
import ChatItem from './ChatItem'

//conditional rendering according to chatid
const PushChat: React.FC = () => {
  const params = useAtomValue(paramsAtom)

  if (!params.chatid) return <PushChatBoundary />
  return <PushChatCon chatid={params.chatid} />
}

const PushChatCon: React.FC<{ chatid: string }> = ({ chatid }) => {
  const [, fetchHistory] = useAtom(fetchHistoryAtom)
  // const [polledMessage] = useAtom(polledMessagesAtom)
  const pushAccount = useAtomValue(pushAccountAtom)
  const pushMessages = useAtomValue(pushMessagesAtom)

  useEffect(() => {
    try {
      fetchHistory(chatid)
    } catch (err) {
      console.log(err)
    }
  }, [pushAccount])
  return (
    <Board title="Push Chatting" className="flex flex-col">
      <div className="flex flex-col justify-between grow">
        <div className="flex flex-col gap-y-[25px]">
          {pushMessages?.map((message) => (
            <ChatItem
              key={`${message.timestamp}-${message.fromDID}`}
              message={message}
            />
          ))}
        </div>
        <AuthCon>
          <PermissionAuthCon chatid={chatid}>
            <PushSendInput chatid={chatid} />
          </PermissionAuthCon>
        </AuthCon>
      </div>
    </Board>
  )
}

const PushChatBoundary: React.FC = () => {
  return (
    <Board title="Push Chatting" className="flex flex-col">
      <div className="flex flex-col justify-between grow">
        <div className="flex-col gap-y-[25px]">
          <div className="text-16px leading-24px text-[#ffffff]">
            Failed to fetch chatid
          </div>
        </div>
      </div>
    </Board>
  )
}

export default PushChat
