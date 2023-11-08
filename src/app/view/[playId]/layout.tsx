'use client'
import { useLayoutEffect } from 'react'
import { useGetParams } from '@/services/params'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const getParams = useGetParams()
  useLayoutEffect(() => {
    getParams()
  }, [])
  return <section>{children}</section>
}
