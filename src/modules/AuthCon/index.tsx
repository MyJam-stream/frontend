'use client'
import { PropsWithChildren, useCallback, ReactNode } from 'react'
import { useSearchParams } from 'next/navigation'
import { useAccount, useNetwork, useSwitchNetwork } from 'wagmi'
import { polygonMumbai } from 'wagmi/chains'
import { useAtomValue, useAtom } from 'jotai'
import { useModal } from '@/components/Modal'
import Button from '@/components/Button'
import { useShowToast } from '@/components/Toast'
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
  const showToast = useShowToast()
  const { address } = useAccount()
  const { chain } = useNetwork()
  const { isLoading, switchNetwork } = useSwitchNetwork({
    chainId: polygonMumbai.id,
    onError(error) {
      showToast({
        content: error.message,
        type: 'failed',
      })
    },
    onSuccess() {
      showToast({
        content: 'Switched to Polygon Mumbai',
        type: 'success',
      })
    },
  })
  const chainMatched = chain?.id === polygonMumbai.id

  if (address && chainMatched) return <>{children}</>
  else if (address && !chainMatched)
    return (
      <Button
        fullWidth
        loading={isLoading}
        onClick={() => {
          switchNetwork?.(polygonMumbai.id)
        }}
      >
        Switch Network
      </Button>
    )
  return <Button onClick={showModal}>Connect Wallet</Button>
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
