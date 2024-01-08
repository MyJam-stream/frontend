'use client'
import Image from 'next/image'
import { IMessageIPFS } from '@pushprotocol/restapi'
import cx from 'clsx'
import DefaultAvatar from '@/assets/imgs/defaultAvatar.png'
import { didDisplay } from '@/utils/didFormat'
import { useIsCurrentAddress } from '@/services/push'

const ChatItem: React.FC<{ message: IMessageIPFS }> = ({ message }) => {
  const isCurrentAddress = useIsCurrentAddress(message.fromDID)

  return (
    <div
      className={cx(
        'grid grid-rows-[42px_auto] gap-x-[16px]',
        isCurrentAddress ? 'grid-cols-[auto_42px]' : 'grid-cols-[42px_auto]'
      )}
    >
      <div
        className={cx(
          'flex items-end justify-center w-[42px] h-[42px] rounded-[21px] bg-[rgba(199,103,173,1)]',
          isCurrentAddress && 'order-2'
        )}
      >
        <Image alt="avatar" src={DefaultAvatar} className="w-[24.5px]" />
      </div>
      <div
        className={cx(
          'flex items-center text-[16px] font-bold text-[#ffffff]',
          isCurrentAddress && 'order-1 justify-self-end'
        )}
      >
        {didDisplay(message.fromDID)}
      </div>
      <div
        className={cx(
          'text-[16px] leading-[24px] text-[#ffffff]',
          isCurrentAddress ? 'order-3 justify-self-end text-end' : 'col-start-2'
        )}
      >
        {message.messageContent}
      </div>
    </div>
  )
}

export default ChatItem
