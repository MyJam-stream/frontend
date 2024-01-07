import { useAtomValue } from 'jotai'
import { didToAddr } from '@/utils/didFormat'
import { pushAddressAtom } from '.'

export const useIsCurrentAddress = (did: string) => {
  const pushAddress = useAtomValue(pushAddressAtom)
  return pushAddress === didToAddr(did)
}
