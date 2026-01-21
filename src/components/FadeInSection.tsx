import { useEffect, useRef, useState } from 'react'

export const FadeInSection: React.FC<{
  children: React.ReactNode
  className?: string
  onVisibleChange?: (isVisible: boolean) => void
  delay?: number
}> = ({ children, className = '', onVisibleChange, delay = 0 }) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => {
              setIsVisible(true)
              onVisibleChange?.(true)
            }, delay)
          } else {
            setIsVisible(true)
            onVisibleChange?.(true)
          }
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [onVisibleChange, delay])

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default FadeInSection
