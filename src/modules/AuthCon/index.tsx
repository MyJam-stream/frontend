'use client'
import { PropsWithChildren, useCallback, ReactNode } from 'react'
import { useSearchParams } from 'next/navigation'
import { useAccount } from 'wagmi'
import { useAtomValue, useAtom } from 'jotai'
import { useModal } from '@/components/Modal'
import Button from '@/components/Button'
import {
  pushAddressAtom,
  initializePushAtom,
  checkPermissionAtom,
  permissionAtom,
} from '@/services/push'
import { useMintTokens } from '@/services/monetize'
import useInTransaction from '@/hooks/useIntransaction'
import WalletsBoard from './WalletsBoard'

const AuthCon: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <WalletAuthCon>
      <PushAuthCon>{children}</PushAuthCon>
    </WalletAuthCon>
  )
}

export default AuthCon

export const WalletAuthCon: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { showModal } = useModal({
    title: 'Connect to a Wallet',
    content: <WalletsBoard />,
  })
  const { address } = useAccount()
  if (address) return <>{children}</>
  return (
    <Button fullWidth onClick={showModal}>
      Connect Wallet
    </Button>
  )
}

export const PushAuthCon: React.FC<PropsWithChildren> = ({
  children,
  ...props
}) => {
  const pushAccount = useAtomValue(pushAddressAtom)
  const [, initializePush] = useAtom(initializePushAtom)
  const { handleExecAction, loading, error } = useInTransaction(initializePush)

  if (pushAccount) return <>{children}</>
  return (
    <Button loading={loading} fullWidth onClick={handleExecAction} {...props}>
      Connect Push
    </Button>
  )
}

export const PermissionAuthCon: React.FC<
  PropsWithChildren & { chatid: string }
> = ({ children, chatid, ...props }) => {
  const permissed = useAtomValue(permissionAtom)
  const [, checkPermission] = useAtom(checkPermissionAtom)
  const searchParams = useSearchParams()
  const contractAddr = searchParams.get('contractAddr') as `0x${string}`
  const { mint } = useMintTokens()
  const handleJoin = useCallback(async () => {
    try {
      const res = await checkPermission(chatid)
      if (res || !contractAddr) return
      await mint(contractAddr)
      await checkPermission(chatid)
    } catch (err) {
      alert(err)
    }
  }, [contractAddr, checkPermission])
  const { handleExecAction, loading } = useInTransaction(handleJoin)
  if (permissed) return <>{children}</>
  return (
    <Button loading={loading} fullWidth onClick={handleExecAction} {...props}>
      Join the Chat
    </Button>
  )
}
