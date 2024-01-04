'use client'
import { ReactNode, useEffect } from 'react'
import { Provider as JotaiProvider, useAtomValue, useSetAtom } from 'jotai'
import { Env, IMessageIPFS } from '@pushprotocol/restapi'
import { createSocketConnection, EVENTS } from '@pushprotocol/socket'
import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { polygonMumbai } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { pushAddressAtom, pushMessagesAtom } from '@/services/push'
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react'

const { publicClient, chains } = configureChains(
  [polygonMumbai],
  [publicProvider()]
)

const wagmiConfig = createConfig({
  autoConnect: false,
  publicClient,
  connectors: [
    new InjectedConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: 'cd2a58b521af06038b4edaba4fadc914',
      },
    }),
  ],
})

//Livepeer client
const client = createReactClient({
  provider: studioProvider({
    apiKey: process.env.NEXT_PUBLIC_LIVEPEER_API_KEY as string,
  }),
})

const Providers: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <JotaiProvider>
      <WagmiConfig config={wagmiConfig}>
        <LivepeerConfig client={client}>
          <PushProvider>{children}</PushProvider>
        </LivepeerConfig>
      </WagmiConfig>
    </JotaiProvider>
  )
}

export default Providers

export const PushProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const pushAddress = useAtomValue(pushAddressAtom)
  const setPushMessages = useSetAtom(pushMessagesAtom)

  useEffect(() => {
    if (!pushAddress) return
    const pushSDKSocket = createSocketConnection({
      user: pushAddress,
      socketType: 'chat',
      socketOptions: { autoConnect: true, reconnectionAttempts: 3 },
      env: 'staging' as Env,
      // env: 'prod' as Env,
    })
    if (!pushSDKSocket) return
    // TODO:
    pushSDKSocket.on(EVENTS.CHAT_RECEIVED_MESSAGE, (message: IMessageIPFS) => {
      setPushMessages((messages) => [...messages, message])
    })
    return () => {
      pushSDKSocket.disconnect()
    }
  }, [pushAddress])

  return <>{children}</>
}
