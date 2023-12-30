'use client'
import Image from 'next/image'
import Presentation from '@/components/Presentation'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-[#f9f7f3]">
      <Presentation title="Jungle Studio" />
    </main>
  )
}
