'use client'
import { PropsWithChildren, useCallback } from 'react'
import { useSearchParams } from 'next/navigation'
import { useAtomValue, useAtom } from 'jotai'
import Button from '@/components/Button'
import { accountAtom, useConnect } from '@/services/account'
import {
  pushAddressAtom,
  initializePushAtom,
  checkPermissionAtom,
  permissionAtom,
} from '@/services/push'
import { useMintTokens } from '@/services/monetize'
import useInTransaction from '@/hooks/useIntransaction'

const AuthCon: React.FC<PropsWithChildren> = ({ children, ...props }) => {
  const account = useAtomValue(accountAtom)
  const { connect } = useConnect()
  const { handleExecAction, loading } = useInTransaction(connect)
  if (account) return <>{children}</>
  return (
    <Button loading={loading} onClick={handleExecAction} {...props}>
      {loading ? 'Connecting' : 'Connect'}
    </Button>
  )
}

export default AuthCon

export const PushAuthCon: React.FC<PropsWithChildren> = ({
  children,
  ...props
}) => {
  const pushAccount = useAtomValue(pushAddressAtom)
  const [, initializePush] = useAtom(initializePushAtom)
  const { handleExecAction, loading } = useInTransaction(initializePush)
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
  const contractAddr = searchParams.get('contractAddr')
  const { mint } = useMintTokens()
  const handleJoin = useCallback(async () => {
    try {
      const res = await checkPermission(chatid)
      if (res || !contractAddr) return
      await mint(contractAddr)
      await checkPermission(chatid)
    } catch (err) {
      console.log(err)
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
