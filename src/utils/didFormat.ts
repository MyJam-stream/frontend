import { shortenAddress } from './address'
export const didDisplay = (did: string): string => {
  const didSlices = did.split(':')
  if ((didSlices[0] = 'eip155')) {
    return shortenAddress({ address: didSlices[1] })
  }
  return ''
}
