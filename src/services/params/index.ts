import { useCallback } from 'react'
import { useSearchParams, useParams } from 'next/navigation'
import { atom, useSetAtom } from 'jotai'

export interface Params {
  title: string | null
  streamKey: string | null
  chatid: string | null
  contractAddr: string | null
  creatorAddr: string | null
  id: string | null
}
export const paramsAtom = atom<Params>({
  title: null,
  streamKey: null,
  chatid: null,
  contractAddr: null,
  creatorAddr: null,
  id: null,
})

export const useGetParams = () => {
  const params = useParams()
  const searchParams = useSearchParams()
  const setParams = useSetAtom(paramsAtom)

  const getParams = useCallback(() => {
    if (typeof window === 'undefined') return
    const id = params?.id as string
    const chatid = searchParams.get('chatid')
    const contractAddr = searchParams.get('contractAddr')
    const creatorAddr = searchParams.get('creatorAddr')
    const title = searchParams.get('title')
    const streamKey = searchParams.get('streamKey')
    setParams({
      id,
      chatid,
      contractAddr,
      creatorAddr,
      title,
      streamKey,
    })
    return {
      id,
      chatid,
      contractAddr,
      creatorAddr,
      title,
      streamKey,
    }
  }, [])

  return getParams
}
