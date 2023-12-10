'use client'
import { useAtomValue } from 'jotai'
import { useAccount } from 'wagmi'
import { pushAddressAtom } from '@/services/push'
import Button from '@/components/Button'
import { shortenAddress } from '@/utils/address'

const AddressBoard: React.FC = () => {
  const { address } = useAccount()

  return (
    <Button color="white">
      {shortenAddress({ address: address as string })}
    </Button>
  )
}

export default AddressBoard
