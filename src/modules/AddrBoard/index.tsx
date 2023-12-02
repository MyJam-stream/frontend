'use client'
import { useAtomValue } from 'jotai'
// import { accountAtom } from '@/services/account'
import { pushAddressAtom } from '@/services/push'
import Button from '@/components/Button'
import { shortenAddress } from '@/utils/address'

const AddressBoard: React.FC = () => {
  const address = useAtomValue(pushAddressAtom)

  return (
    <Button color="white">
      {shortenAddress({ address: address as string })}
    </Button>
  )
}

export default AddressBoard
