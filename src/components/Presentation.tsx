'use client'
import { useState, useEffect} from 'react'
import Image from 'next/image'

export default function Presentation({ title }: { title: string}) {
  const [animate, setAnimate] = useState(false)
  const [firstName, ...lastName] = title.split(' ')

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 10)
  }, [])

  /*const presentation = useRef<HTMLDivElement>(null)
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-pulse')
      }
    })

    if (presentation.current) {
      observer.current.observe(presentation.current);
    }
  }, [])*/

  // slide das imagens


  return (
    <section className="w-full max-w-[1080px]">
      <div className="flex items-center justify-between">
        <h1 className={`${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} text-6xl font-bold text-black transition-all ease-out delay-1000`}>
          {firstName}
        </h1>
        <div className="w-96 h-60 bg-black">
          <Image src="/assets/imagem1.jpg" width={500} height={500} fill={true} alt='Imagem 1' />
        </div>
        <span className={`${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} text-6xl font-bold text-gray-700 transition-all ease-out delay-1000`}>{lastName.join(' ')}</span>
      </div>
    </section>
  )
}