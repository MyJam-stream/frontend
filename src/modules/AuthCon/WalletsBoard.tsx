'use client'
import { useCallback, useEffect } from 'react'
import { useConnect, Connector } from 'wagmi'
import Button from '@/components/Button'
import { useModal } from '@/components/Modal'
import { useShowToast } from '@/components/Toast'
import { CHAIN_ID } from '@/utils/constants'

const WalletsBoard: React.FC = () => {
  const showToast = useShowToast()
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect({ chainId: parseInt(CHAIN_ID) })
  const { hideModal } = useModal()
  //TODO: this is too specific, make it abstract
  const handleWalletConnect = useCallback(async (connector: Connector) => {
    try {
      await connect({ connector: connector })
    } catch (error) {
      showToast({ type: 'failed', content: 'failed to connect' })
    }
  }, [])

  useEffect(() => {
    if (!isLoading && pendingConnector) {
      hideModal()
    }
  }, [isLoading, pendingConnector])

  return (
    <div className="flex flex-col gap-y-[24px]">
      {connectors.map((connector) => {
        return (
          <Button
            key={connector.id}
            onClick={() => handleWalletConnect(connector)}
            disabled={isLoading && pendingConnector?.id === connector.id}
          >
            {connector.name}
          </Button>
        )
      })}
    </div>
  )
}

export default WalletsBoard
