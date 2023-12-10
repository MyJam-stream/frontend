import { useCallback } from 'react'
import { useAtomValue, atom } from 'jotai'
import { ContractFactory } from 'ethers'
import { sendTransaction, writeContract, getWalletClient } from 'wagmi/actions'
import { useAccount } from 'wagmi'
import { parseEther } from 'viem'
import { useShowToast } from '@/components/Toast'
import Abi from '@/utils/contract/abi.json'
import { erc20Bytecodes } from '@/utils/contract/bytecode'
import { CHAIN_ID } from '@/utils/constants'
import { walletClientToSigner } from '@/utils/etherAdapter'
import { pushAddressAtom } from '../push'

export const recieverAddressAtom = atom<string | null>(null)

export const useCreateReciever = () => {
  const { address } = useAccount()

  const createReciever = useCallback(async () => {
    try {
      if (typeof window === 'undefined') return
      const walletClient = await getWalletClient({
        chainId: parseInt(CHAIN_ID),
      })
      if (!walletClient) throw new Error('Wallet not found')
      const signer = walletClientToSigner(walletClient)
      const recieverContract = await new ContractFactory(
        Abi,
        erc20Bytecodes,
        signer
      )
      const reciever = await recieverContract.deploy(address)
      // await reciever.deployTransaction.wait()
      const tx = await reciever.deployed()
      return tx.address
    } catch (err) {
      throw err
    }
  }, [address])

  return { createReciever }
}

export const useMintTokens = () => {
  const mint = useCallback(
    async (recieverAddress: `0x${string}`) => {
      try {
        if (typeof window === 'undefined') return
        const { hash } = await writeContract({
          address: recieverAddress,
          abi: Abi,
          functionName: 'mint',
          value: parseEther('0.01'),
        })
        return hash
      } catch (err) {
        throw err
      }
    },
    [window]
  )

  return { mint }
}

export const useDonate = () => {
  const showToast = useShowToast()

  const donate = useCallback(
    async (recieverAddress: string) => {
      try {
        if (typeof window === 'undefined') return
        const { hash } = await sendTransaction({
          to: recieverAddress,
          value: parseEther('0.01'),
        })
        showToast({
          content: `donation success hash: ${hash}`,
          type: 'success',
        })
        return hash
      } catch (err) {
        // throw err
        //TODO: more clear error notification
        showToast({ content: 'failed to donate', type: 'failed' })
      }
    },
    [window]
  )

  return { donate }
}
