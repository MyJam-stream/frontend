import { shortenAddress } from './address'

export const didToAddr = (did: string): string => {
  const didSlices = did.split(':')
  if ((didSlices[0] = 'eip155')) {
    return didSlices[1]
  }
  return ''
}

export const didDisplay = (did: string): string => {
  const addr = didToAddr(did)
  return shortenAddress({ address: addr })
}
