'use client'
import { useEffect, useCallback } from 'react'
import { useAtomValue, useAtom } from 'jotai'
import { IMessageIPFS } from '@pushprotocol/restapi'
import Button from '@/components/Button'
import Board from '@/components/Board'
import PushSendInput from './PushSendInput'
import { didDisplay } from '@/utils/didFormat'
import {
  pushAccountAtom,
  pushMessagesAtom,
  fetchHistoryAtom,
  // polledMessagesAtom,
} from '@/services/push'
import { paramsAtom } from '@/services/params'
import AuthCon, { PermissionAuthCon } from '../AuthCon'

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
          {pushMessages?.map((message, index) => (
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

const ChatItem: React.FC<{ message: IMessageIPFS }> = ({ message }) => {
  return (
    <div className="grid grid-rows-[42px_auto] grid-cols-[42px_auto] gap-x-[16px]">
      <div className="w-[42px] h-[42px] rounded-[21px] bg-[rgba(199,103,173,1)]"></div>
      <div className="flex items-center text-[16px] font-bold text-[#ffffff]">
        {didDisplay(message.fromDID)}
      </div>
      <div className="col-start-2 text-[16px] leading-[24px] text-[#ffffff]">
        {message.messageContent}
      </div>
    </div>
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
